/*
 * Lightweight BM25 retriever. The knowledge base is small (a few dozen
 * chunks), so lexical ranking with light stemming and a synonym table is fast,
 * runs anywhere (browser and Cloudflare Worker) and needs no embedding API.
 */

const STOPWORDS = new Set(
  (
    "a an and are as at be been but by can could did do does for from had has have he her " +
    "him his how i if in into is it its me my of on or our she so than that the their them " +
    "then there these they this to was we were what when where which who whom why will with " +
    "would you your yours tell about know please any some much many also just give show list " +
    "use uses used using ali hamza hamza's ali's"
  ).split(" ")
);

// Visitor vocabulary -> vocabulary used in the resume data.
const SYNONYMS = {
  ror: ["rails", "ruby"],
  rails: ["ruby"],
  nodejs: ["node"],
  reactjs: ["react"],
  vuejs: ["vue"],
  js: ["javascript"],
  ts: ["typescript"],
  postgres: ["postgresql"],
  k8s: ["kubernetes"],
  ml: ["machine", "learning"],
  ai: ["artificial", "intelligence", "llm"],
  genai: ["generative", "ai", "llm"],
  llm: ["large", "language", "model"],
  gpt: ["openai", "llm"],
  chatbot: ["rag", "llm"],
  cloud: ["aws"],
  devops: ["ci", "cd", "terraform", "ansible", "docker"],
  database: ["postgresql", "mysql", "mongodb", "redis"],
  frontend: ["react", "vue", "html5", "css3"],
  backend: ["api", "rails", "node", "spring"],
  cv: ["resume"],
  job: ["experience", "role"],
  employer: ["company", "experience"],
  study: ["education", "degree"],
  university: ["education", "degree"],
  uni: ["university", "education"],
  master: ["msc", "education"],
  bachelor: ["bsc", "education"],
  phd: ["education"],
  german: ["germany", "language"],
  deutsch: ["german", "language"],
  hire: ["contact", "availability"],
  reach: ["contact", "email"],
  internship: ["intern"],
};

export function stem(token) {
  if (token.length > 5 && token.endsWith("ies"))
    return `${token.slice(0, -3)}y`;
  if (token.length > 5 && token.endsWith("ing")) return token.slice(0, -3);
  if (token.length > 4 && token.endsWith("ed")) return token.slice(0, -2);
  if (token.length > 4 && /(ss|x|ch|sh)es$/.test(token))
    return token.slice(0, -2);
  if (token.length > 3 && token.endsWith("s") && !token.endsWith("ss"))
    return token.slice(0, -1);
  return token;
}

export function tokenize(text) {
  return String(text)
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .split(/[^a-z0-9']+/)
    .map((token) => token.replace(/'s$|'/g, ""))
    .filter((token) => token && !STOPWORDS.has(token))
    .map(stem);
}

function synonymsOf(tokens) {
  return tokens.flatMap((token) => (SYNONYMS[token] || []).map(stem));
}

export function createRetriever(chunks, { k1 = 1.2, b = 0.75 } = {}) {
  // Title terms are repeated so a match on the title outranks an incidental
  // mention in a long passage.
  const docs = chunks.map((chunk) => {
    const tokens = [
      ...tokenize(chunk.title),
      ...tokenize(chunk.title),
      ...tokenize(chunk.text),
      ...tokenize(chunk.keywords || ""),
    ];
    const termFreq = new Map();
    tokens.forEach((token) =>
      termFreq.set(token, (termFreq.get(token) || 0) + 1)
    );
    return { chunk, termFreq, length: tokens.length };
  });

  const avgLength =
    docs.reduce((sum, doc) => sum + doc.length, 0) / (docs.length || 1);
  const docFreq = new Map();
  docs.forEach((doc) => {
    doc.termFreq.forEach((_, token) =>
      docFreq.set(token, (docFreq.get(token) || 0) + 1)
    );
  });

  const idf = (token) => {
    const n = docFreq.get(token) || 0;
    return Math.log(1 + (docs.length - n + 0.5) / (n + 0.5));
  };

  function scoreDoc(doc, weightedTerms) {
    let score = 0;
    weightedTerms.forEach((weight, token) => {
      const tf = doc.termFreq.get(token);
      if (!tf) return;
      const norm = tf + k1 * (1 - b + (b * doc.length) / avgLength);
      score += weight * idf(token) * ((tf * (k1 + 1)) / norm);
    });
    return score;
  }

  /**
   * Rank chunks for a query.
   * @param {string} query the visitor's question
   * @param {object} options
   * @param {number} options.k number of results
   * @param {string} options.context earlier conversation text; its terms count
   *   at half weight so follow-ups like "what about his tests?" keep context
   */
  function search(query, { k = 5, context = "" } = {}) {
    const weightedTerms = new Map();
    const addTerms = (tokens, weight) =>
      tokens.forEach((token) =>
        weightedTerms.set(
          token,
          Math.max(weightedTerms.get(token) || 0, weight)
        )
      );
    // Synonyms count half as much as the words actually typed, so a specific
    // term ("Nexmuv") beats passages that only match expansions of a broad
    // one ("backend").
    const contextTokens = tokenize(context);
    const queryTokens = tokenize(query);
    addTerms(synonymsOf(contextTokens), 0.25);
    addTerms(contextTokens, 0.5);
    addTerms(synonymsOf(queryTokens), 0.5);
    addTerms(queryTokens, 1);

    if (weightedTerms.size === 0) return [];

    return docs
      .map((doc) => ({ chunk: doc.chunk, score: scoreDoc(doc, weightedTerms) }))
      .filter((result) => result.score > 0)
      .sort((a, b2) => b2.score - a.score)
      .slice(0, k);
  }

  return { search };
}
