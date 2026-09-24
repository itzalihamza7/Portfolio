import React, { useState } from "react";
import { FiArrowRight, FiDownload, FiMapPin } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import { experience, highlights, profile } from "../../portfolio";
import image from "../../utils/images";
import SocialLinks from "../SocialLinks";
import "./Hero.css";

const SUGGESTIONS = [
  "What is Ali working on right now?",
  "Which AI projects has he built?",
  "How much Ruby on Rails experience does he have?",
];

export default function Hero({ onAsk }) {
  const [question, setQuestion] = useState("");
  const current = experience.find((job) => job.end === "Present");

  const submit = (event) => {
    event.preventDefault();
    const trimmed = question.trim();
    if (!trimmed) return;
    onAsk(trimmed);
    setQuestion("");
  };

  return (
    <section id="top" className="hero" aria-label="Introduction">
      <div className="container hero__grid">
        <div className="hero__content">
          {current && (
            <p className="hero__status">
              <span className="hero__status-dot" aria-hidden="true" />
              {current.role} at {current.company}
            </p>
          )}
          <h1 className="hero__title">
            Hi, I'm {profile.name}.
            <span className="hero__role">{profile.headline}</span>
          </h1>
          <p className="hero__intro">{profile.intro}</p>
          <p className="hero__meta">
            <FiMapPin aria-hidden="true" /> {profile.location} ·{" "}
            {profile.tagline}
          </p>

          <form className="ask-bar" onSubmit={submit} role="search">
            <HiOutlineSparkles className="ask-bar__icon" aria-hidden="true" />
            <label htmlFor="hero-question" className="visually-hidden">
              Ask my AI assistant a question about me
            </label>
            <input
              id="hero-question"
              className="ask-bar__input"
              type="text"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask my AI assistant anything about my experience…"
              maxLength={500}
              autoComplete="off"
            />
            <button
              type="submit"
              className="btn btn--primary ask-bar__submit"
              aria-label="Ask"
            >
              <span className="ask-bar__submit-label">Ask</span>
              <FiArrowRight aria-hidden="true" />
            </button>
          </form>
          <ul className="hero__suggestions" aria-label="Example questions">
            {SUGGESTIONS.map((suggestion) => (
              <li key={suggestion}>
                <button
                  type="button"
                  className="chip"
                  onClick={() => onAsk(suggestion)}
                >
                  {suggestion}
                </button>
              </li>
            ))}
          </ul>

          <div className="hero__actions">
            <a
              className="btn btn--secondary"
              href={profile.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiDownload aria-hidden="true" /> Resume
            </a>
            <a className="btn btn--secondary" href="#contact">
              Get in touch
            </a>
            <SocialLinks />
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__photo-frame">
            <img
              src={image(profile.photo)}
              alt={`Portrait of ${profile.name}`}
              className="hero__photo"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <dl className="highlights">
          {highlights.map((item) => (
            <div key={item.label} className="highlight">
              <dt className="highlight__label">{item.label}</dt>
              <dd className="highlight__value">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
