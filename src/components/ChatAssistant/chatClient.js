import { localAnswer } from "../../rag";

// URL of the deployed chat-api worker. Without it the assistant answers
// locally by quoting the best matching passages from the knowledge base.
export const CHAT_API_URL = process.env.REACT_APP_CHAT_API_URL || "";

const TIMEOUT_MS = 45000;

/**
 * Ask the assistant a question.
 * @param {string} question
 * @param {{role: "user"|"assistant", content: string}[]} history earlier turns
 * @returns {Promise<{answer: string, sources: object[], mode: "ai"|"local"}>}
 */
export async function askAssistant(question, history) {
  const previousQuestion = [...history]
    .reverse()
    .find((m) => m.role === "user");

  if (CHAT_API_URL) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
      const response = await fetch(CHAT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, history }),
        signal: controller.signal,
      });
      const data = await response.json().catch(() => ({}));
      if (response.ok && data.answer) {
        return { answer: data.answer, sources: data.sources || [], mode: "ai" };
      }
      if (response.status === 429 && data.error) {
        return { answer: data.error, sources: [], mode: "ai" };
      }
    } catch (error) {
      // Network error or timeout: fall through to the local answer.
    } finally {
      clearTimeout(timer);
    }
  }

  return { ...localAnswer(question, previousQuestion?.content), mode: "local" };
}
