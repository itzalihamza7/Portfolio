import React from "react";
import { FiAward, FiUsers } from "react-icons/fi";
import { certifications, education, volunteering } from "../../portfolio";
import image from "../../utils/images";
import Section from "../Section";
import "./Education.css";

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Education and certifications"
      alt
    >
      <ul className="degrees">
        {education.map((degree) => (
          <li key={degree.school} className="card degree">
            <img
              src={image(degree.logo)}
              alt=""
              className="degree__logo"
              loading="lazy"
            />
            <div className="degree__body">
              <div className="degree__header">
                <div>
                  <h3 className="degree__title">{degree.degree}</h3>
                  <p className="degree__school">
                    <a
                      href={degree.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {degree.school}
                    </a>
                    <span> · {degree.location}</span>
                  </p>
                </div>
                <p className="degree__dates">
                  {degree.start} – {degree.end}
                </p>
              </div>
              {degree.courses.length > 0 && (
                <details className="degree__courses">
                  <summary>Relevant courses ({degree.courses.length})</summary>
                  <ul className="tag-list">
                    {degree.courses.map((course) => (
                      <li key={course} className="tag">
                        {course}
                      </li>
                    ))}
                  </ul>
                </details>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="credentials">
        <div>
          <h3 className="credentials__title">
            <FiAward aria-hidden="true" /> Certifications
          </h3>
          <ul className="credential-list">
            {certifications.map((cert) => {
              const label = (
                <>
                  <span className="credential__name">{cert.name}</span>
                  {(cert.issuer || cert.date) && (
                    <span className="credential__meta">
                      {[cert.issuer, cert.date].filter(Boolean).join(" · ")}
                    </span>
                  )}
                </>
              );
              return (
                <li key={cert.name} className="credential">
                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {label}
                    </a>
                  ) : (
                    label
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3 className="credentials__title">
            <FiUsers aria-hidden="true" /> Volunteering and leadership
          </h3>
          <ul className="credential-list">
            {volunteering.map((item) => (
              <li key={item.organization} className="credential">
                <span className="credential__name">
                  {item.role}, {item.organization}
                </span>
                <span className="credential__meta">
                  {item.location} · {item.start} – {item.end}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
