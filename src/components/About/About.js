import React from "react";
import { FiCode, FiCpu, FiDatabase } from "react-icons/fi";
import { focusAreas, profile, spokenLanguages } from "../../portfolio";
import Section from "../Section";
import "./About.css";

const FOCUS_ICONS = [FiCode, FiCpu, FiDatabase];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      // Non-breaking hyphen keeps "full-stack" together when the title wraps.
      title={"Full\u2011stack development with a focus on backend and AI"}
      alt
    >
      <div className="about__grid">
        <div className="about__summary">
          <p>{profile.about}</p>
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
    </Section>
  );
}
