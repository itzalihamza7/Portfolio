import React from "react";
import { FiCheck, FiCode, FiCpu, FiDatabase } from "react-icons/fi";
import {
  achievements,
  focusAreas,
  profile,
  spokenLanguages,
} from "../../portfolio";
import Section from "../Section";
import "./About.css";

const FOCUS_ICONS = [FiCode, FiCpu, FiDatabase];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Backend systems and GenAI features that ship"
      alt
    >
      <div className="about__grid">
        <div className="about__summary">
          <p>{profile.summary}</p>
          <div className="about__languages">
            <h3 className="about__subheading">Languages</h3>
            <ul className="tag-list">
              {spokenLanguages.map((lang) => (
                <li key={lang.name} className="tag">
                  <strong className="about__lang-name">{lang.name}</strong>
                  &nbsp;· {lang.level}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="about__focus">
          {focusAreas.map((area, index) => {
            const Icon = FOCUS_ICONS[index % FOCUS_ICONS.length];
            return (
              <li key={area.title} className="card focus-card">
                <span className="focus-card__icon" aria-hidden="true">
                  <Icon />
                </span>
                <div>
                  <h3 className="focus-card__title">{area.title}</h3>
                  <p className="focus-card__text">{area.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <h3 className="about__subheading about__achievements-title">
        Selected achievements
      </h3>
      <ul className="achievements">
        {achievements.map((item) => (
          <li key={item} className="achievement">
            <FiCheck className="achievement__icon" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
