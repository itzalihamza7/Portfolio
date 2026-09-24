# Ali Hamza · Portfolio

Personal portfolio at [alihamza.co](https://www.alihamza.co): a single-page React site with a built-in AI assistant that answers visitors' questions about my experience, skills, projects and education.

## How the AI assistant works (RAG)

```
visitor question
      │
      ▼
src/rag/retriever.js ── BM25 search over ──▶ src/rag/knowledgeBase.js
      │                                      (chunks built from src/portfolio.js)
      ▼
top matching chunks + question
      │
      ├─ chat API configured ─▶ chat-api/ (Cloudflare Worker) ─▶ OpenAI ─▶ grounded answer
      │
      └─ not configured / unreachable ─▶ best matching passages quoted directly
```

- **One source of truth.** `src/portfolio.js` drives both the page and the assistant. Update it and both change.
- **Retrieval** is a small BM25 index with light stemming, a synonym table and section boosting. It runs in the browser and in the worker, with no embedding API needed.
- **Generation** happens in `chat-api/`, a Cloudflare Worker that retrieves context itself and calls the OpenAI API, so the API key never reaches the browser. It restricts origins, validates input and rate limits per IP.
- **Offline fallback.** Without `REACT_APP_CHAT_API_URL` (or if the worker is down) the assistant still answers by quoting the most relevant parts of the resume.
- Link to `https://www.alihamza.co/#ask` to open the assistant, or `#ask=Your%20question` to ask straight away.

## Development

Requires Node 16 for the site (`nvm use`, see `.nvmrc`).

```bash
yarn install
yarn start        # http://localhost:3000
yarn test         # retrieval and app tests
```

## Chat API (Cloudflare Worker)

Requires Node 20 and a Cloudflare account.

```bash
cd chat-api
npm install
echo "OPENAI_API_KEY=sk-..." > .dev.vars         # local only, git-ignored
npm run dev                                        # http://localhost:8787
```

Run the site against it with `REACT_APP_CHAT_API_URL=http://localhost:8787 yarn start`.

To deploy:

```bash
cd chat-api
npx wrangler secret put OPENAI_API_KEY
npm run deploy     # prints the worker URL
```

Then put the worker URL in `.env.production` as `REACT_APP_CHAT_API_URL=...` and redeploy the site. Allowed origins are set in `chat-api/wrangler.toml`. The model defaults to `gpt-5.4-mini`; set `OPENAI_MODEL` in `wrangler.toml` to use a different one.

## Deploying the site

```bash
yarn deploy       # builds and publishes build/ to the gh-pages branch
```

## Built with

React, Cloudflare Workers, the OpenAI API, react-icons and Inter.
