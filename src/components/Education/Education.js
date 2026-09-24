import React, { useState } from "react";
import {
  FiAward,
  FiCalendar,
  FiExternalLink,
  FiMapPin,
  FiUsers,
} from "react-icons/fi";
import { certifications, education, volunteering } from "../../portfolio";
import image from "../../utils/images";
import Section from "../Section";
import "./Education.css";

const VISIBLE_COURSES = 5;

// "Master of Science, Web and Data Science" -> level and field.
function splitDegree(degree) {
  const index = degree.indexOf(", ");
  return index === -1
    ? { level: null, field: degree }
    : { level: degree.slice(0, index), field: degree.slice(index + 2) };
}

function Courses({ courses }) {
  const [showAll, setShowAll] = useState(false);
  if (courses.length === 0) return null;
  const hidden = courses.length - VISIBLE_COURSES;
  const shown =
    showAll || hidden <= 0 ? courses : courses.slice(0, VISIBLE_COURSES);

  return (
    <div className="degree__courses">
      <h4 className="degree__courses-title">Relevant courses</h4>
      <ul className="tag-list">
        {shown.map((course) => (
          <li key={course} className="tag">
            {course}
          </li>
        ))}
        {hidden > 0 && (
          <li>
            <button
              type="button"
              className="degree__more"
              aria-expanded={showAll}
              onClick={() => setShowAll((value) => !value)}
            >
              {showAll ? "Show fewer" : `+${hidden} more`}
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Education and certifications"
      lead="Computer science foundations from NUST, now specializing in web and data science at Universität Koblenz."
      alt
    >
      <div className="education">
        <ol className="degrees">
          {education.map((degree) => {
            const { level, field } = splitDegree(degree.degree);
            const current = degree.end === "Present";
            return (
              <li
                key={degree.school}
                className={`degree${current ? " degree--current" : ""}`}
              >
                <div className="degree__logo-wrap">
                  <img
                    src={image(degree.logo)}
                    alt=""
                    className="degree__logo"
                    loading="lazy"
                  />
                </div>
                <div className="degree__body">
                  <div className="degree__top">
                    {level && <span className="degree__level">{level}</span>}
                    {current && (
                      <span className="degree__badge">In progress</span>
                    )}
                  </div>
                  <h3 className="degree__field">{field}</h3>
                  <p className="degree__school">
                    <a
                      href={degree.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {degree.school}
                    </a>
                  </p>
                  <p className="degree__meta">
                    <span>
                      <FiCalendar aria-hidden="true" /> {degree.start} –{" "}
                      {degree.end}
                    </span>
                    <span>
                      <FiMapPin aria-hidden="true" /> {degree.location}
                    </span>
                  </p>
                  <Courses courses={degree.courses} />
                </div>
              </li>
            );
          })}
        </ol>

        <aside className="credentials">
          <div className="card credential-card">
            <h3 className="credential-card__title">
              <span className="credential-card__icon" aria-hidden="true">
                <FiAward />
              </span>
              Certifications
            </h3>
            <ul className="credential-list">
              {certifications.map((cert) => {
                const meta = [cert.issuer, cert.date]
                  .filter(Boolean)
                  .join(" · ");
                return (
                  <li key={cert.name} className="credential">
                    <span className="credential__name">{cert.name}</span>
                    {meta && <span className="credential__meta">{meta}</span>}
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="credential__link"
                      >
                        View certificate <FiExternalLink aria-hidden="true" />
                        <span className="visually-hidden">: {cert.name}</span>
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="card credential-card">
            <h3 className="credential-card__title">
              <span className="credential-card__icon" aria-hidden="true">
                <FiUsers />
              </span>
              Volunteering and leadership
            </h3>
            <ul className="credential-list">
              {volunteering.map((item) => (
                <li key={item.organization} className="credential">
                  <span className="credential__name">{item.role}</span>
                  <span className="credential__org">{item.organization}</span>
                  <span className="credential__meta">
                    {item.location} · {item.start} – {item.end}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </Section>
  );
}
