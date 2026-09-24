import React, { useCallback, useEffect, useRef, useState } from "react";
import { FiArrowUp, FiRotateCcw, FiX } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import { profile } from "../../portfolio";
import { askAssistant, CHAT_API_URL } from "./chatClient";
import FormattedText from "./FormattedText";
import "./ChatAssistant.css";

const SUGGESTIONS = [
  "What is Ali working on right now?",
  "What did he build at Veroke?",
  "Which AI and machine learning projects has he done?",
  "What is he studying?",
  "Does he speak German?",
  "How can I contact him?",
];

const WELCOME = {
  id: "welcome",
  role: "assistant",
  content: `Hi! I'm ${profile.firstName}'s AI assistant. Ask me anything about his experience, skills, projects or education.`,
};

let nextId = 0;
const newId = () => `m${(nextId += 1)}`;

export default function ChatAssistant({
  open,
  pendingQuestion,
  onQuestionHandled,
  onOpen,
  onClose,
}) {
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const messagesRef = useRef(messages);
  messagesRef.current = messages;

  const send = useCallback(async (text) => {
    const question = text.trim();
    if (!question) return;

    const history = messagesRef.current
      .filter((m) => m.id !== WELCOME.id && !m.error)
      .map(({ role, content }) => ({ role, content }));

    setMessages((current) => [
      ...current,
      { id: newId(), role: "user", content: question },
    ]);
    setInput("");
    setLoading(true);
    try {
      const reply = await askAssistant(question, history);
      setMessages((current) => [
        ...current,
        {
          id: newId(),
          role: "assistant",
          content: reply.answer,
          sources: reply.sources,
        },
      ]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          id: newId(),
          role: "assistant",
          error: true,
          content: `Sorry, something went wrong. You can email ${profile.firstName} at ${profile.email}.`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Questions asked from elsewhere on the page (hero search, suggestions).
  useEffect(() => {
    if (open && pendingQuestion && !loading) {
      send(pendingQuestion);
      onQuestionHandled();
    }
  }, [open, pendingQuestion, loading, send, onQuestionHandled]);

  useEffect(() => {
    if (!open) return undefined;
    const timer = setTimeout(
      () => inputRef.current && inputRef.current.focus(),
      50
    );
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    const list = listRef.current;
    if (list) list.scrollTop = list.scrollHeight;
  }, [messages, loading, open]);

  const onSubmit = (event) => {
    event.preventDefault();
    if (!loading) send(input);
  };

  const onInputKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (!loading) send(input);
    }
  };

  const showSuggestions = messages.length === 1 && !loading;

  return (
    <>
      <button
        type="button"
        className={`chat-launcher${open ? " chat-launcher--hidden" : ""}`}
        onClick={onOpen}
        aria-label={`Ask AI about ${profile.firstName}`}
        aria-hidden={open}
        tabIndex={open ? -1 : 0}
      >
        <HiOutlineSparkles aria-hidden="true" />
        <span>Ask AI about {profile.firstName}</span>
      </button>

      <div
        className={`chat${open ? " chat--open" : ""}`}
        role="dialog"
        aria-modal="false"
        aria-labelledby="chat-title"
        aria-hidden={!open}
      >
        <header className="chat__header">
          <span className="chat__avatar" aria-hidden="true">
            <HiOutlineSparkles />
          </span>
          <div className="chat__heading">
            <h2 id="chat-title" className="chat__title">
              Ask about {profile.firstName}
            </h2>
            <p className="chat__subtitle">
              Answers from {profile.firstName}'s resume and projects
            </p>
          </div>
          <button
            type="button"
            className="chat__icon-btn"
            onClick={() => setMessages([WELCOME])}
            aria-label="Start a new conversation"
            title="New conversation"
            disabled={loading || messages.length === 1}
          >
            <FiRotateCcw />
          </button>
          <button
            type="button"
            className="chat__icon-btn"
            onClick={onClose}
            aria-label="Close assistant"
          >
            <FiX />
          </button>
        </header>

        <div
          className="chat__messages"
          ref={listRef}
          aria-live="polite"
          aria-busy={loading}
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={`chat__message chat__message--${message.role}`}
            >
              <div className="chat__bubble">
                <FormattedText text={message.content} />
              </div>
              {message.sources && message.sources.length > 0 && (
                <p className="chat__sources">
                  Sources:{" "}
                  {message.sources.slice(0, 3).map((source, index) => (
                    <React.Fragment key={source.id}>
                      {index > 0 && " · "}
                      <a href={`#${source.section}`}>{source.title}</a>
                    </React.Fragment>
                  ))}
                </p>
              )}
            </div>
          ))}

          {loading && (
            <div className="chat__message chat__message--assistant">
              <div
                className="chat__bubble chat__typing"
                aria-label="Assistant is typing"
              >
                <span />
                <span />
                <span />
              </div>
            </div>
          )}

          {showSuggestions && (
            <ul className="chat__suggestions" aria-label="Suggested questions">
              {SUGGESTIONS.map((suggestion) => (
                <li key={suggestion}>
                  <button
                    type="button"
                    className="chip"
                    onClick={() => send(suggestion)}
                  >
                    {suggestion}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <form className="chat__composer" onSubmit={onSubmit}>
          <label htmlFor="chat-input" className="visually-hidden">
            Your question
          </label>
          <textarea
            id="chat-input"
            ref={inputRef}
            className="chat__input"
            rows={1}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={onInputKeyDown}
            placeholder="Ask a question…"
            maxLength={500}
          />
          <button
            type="submit"
            className="chat__send"
            disabled={loading || !input.trim()}
            aria-label="Send question"
          >
            <FiArrowUp />
          </button>
        </form>
        <p className="chat__disclaimer">
          {CHAT_API_URL
            ? "AI-generated answers can contain mistakes. Please confirm important details with Ali."
            : "Answers are quoted directly from the most relevant parts of Ali's resume."}
        </p>
      </div>
    </>
  );
}
