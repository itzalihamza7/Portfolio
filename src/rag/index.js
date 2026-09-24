/*
 * Retrieval entry point shared by the website (offline answers) and the chat
 * API worker (context for Claude). Keep this file free of JSX, browser APIs and
 * process.env so both environments can bundle it.
 */
import * as portfolio from "../portfolio";
import { buildKnowledgeBase } from "./knowledgeBase";
import { createRetriever } from "./retriever";

export const knowledgeBase = buildKnowledgeBase(portfolio);
const retriever = createRetriever(knowledgeBase);
const profileChunk = knowledgeBase.find((chunk) => chunk.id === "profile");

// Scores below this mean the question is not really about anything in the
// knowledge base. Tuned against src/rag/rag.test.js.
export const MIN_RELEVANT_SCORE = 1.5;

// When a question names a section ("Which AI projects…"), passages from that
// section win over passages that merely share a keyword.
const SECTION_BOOST = 1.5;
const SECTION_HINTS = {
  projects: /\b(projects?|built|build|repos?|repositor(y|ies)|github)\b/i,
  experience: /\b(work(ed|s|ing)?|jobs?|roles?|compan(y|ies)|employers?|career)\b/i,
  education: /\b(stud(y|ies|ied|ying)|degrees?|universit(y|ies)|courses?|certific\w*)\b/i,
  skills: /\b(skills?|stack|technolog(y|ies)|tools?)\b/i,
};

/**
 * Find the chunks that best answer a question.
 * @param {string} question
 * @param {string} [previousQuestion] the visitor's previous question, used to
 *   resolve follow-ups
 * @returns {{chunks: object[], results: {chunk: object, score: number}[]}}
 *   `results` are the scored matches; `chunks` is the context to hand to the
 *   model, which always starts with the profile overview.
 */
export function retrieveContext(question, previousQuestion = "", k = 5) {
  const hinted = Object.keys(SECTION_HINTS).filter((section) =>
    SECTION_HINTS[section].test(question)
  );
  const results = retriever
    .search(question, { k: k * 2, context: previousQuestion })
    .map((result) =>
      hinted.includes(result.chunk.section)
        ? { ...result, score: result.score * SECTION_BOOST }
        : result
    )
    .sort((a, b) => b.score - a.score)
    .slice(0, k);
  const relevant = results.filter(
    (result) => result.score >= MIN_RELEVANT_SCORE
  );
  const chunks = [
    profileChunk,
    ...relevant.map((r) => r.chunk).filter((c) => c !== profileChunk),
  ];
  return { chunks, results: relevant };
}

export function formatContext(chunks) {
  return chunks
    .map(
      (chunk) => `<document title="${chunk.title}">\n${chunk.text}\n</document>`
    )
    .join("\n");
}

const GREETING = /^\s*(hi|hello|hey|hallo|salam|assalam|good (morning|afternoon|evening))\b[\s!.?]*$/i;

/**
 * Answer without a language model by returning the best matching passages.
 * Used when the chat API is not configured or unreachable.
 */
export function localAnswer(question, previousQuestion = "") {
  const { firstName, email } = portfolio.profile;

  if (GREETING.test(question)) {
    return {
      answer: `Hi! I can answer questions about ${firstName}'s experience, skills, projects and education. What would you like to know?`,
      sources: [],
    };
  }

  const { results } = retrieveContext(question, previousQuestion, 3);
  if (results.length === 0) {
    return {
      answer: `I couldn't find anything about that in ${firstName}'s profile. Try asking about his experience, skills, projects or education, or email him at ${email}.`,
      sources: [],
    };
  }

  // Keep the best match, plus runners-up that score nearly as well (e.g.
  // several projects for "Which AI projects has he built?").
  const best = results[0];
  const picked = results.filter((result) => result.score >= best.score * 0.75);

  return {
    answer: picked.map((result) => result.chunk.text).join("\n\n"),
    sources: picked.map(({ chunk }) => ({
      id: chunk.id,
      title: chunk.title,
      section: chunk.section,
    })),
  };
}
