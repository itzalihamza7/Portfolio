import React from "react";
import { FiMapPin } from "react-icons/fi";
import { experience } from "../../portfolio";
import image from "../../utils/images";
import Section from "../Section";
import "./Experience.css";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      lead="From enterprise internships to product teams, freelance clients and university research."
    >
      <ol className="timeline">
        {experience.map((job) => (
          <li key={`${job.company}-${job.start}`} className="timeline__item">
            <div className="timeline__marker" aria-hidden="true">
              <img
                src={image(job.logo)}
                alt=""
                className="timeline__logo"
                loading="lazy"
              />
            </div>
            <article className="card job">
              <header className="job__header">
                <div>
                  <h3 className="job__role">{job.role}</h3>
                  <p className="job__company">
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {job.company}
                    </a>
                    <span className="job__location">
                      <FiMapPin aria-hidden="true" /> {job.location}
                    </span>
                  </p>
                </div>
                <p
                  className={`job__dates${
                    job.end === "Present" ? " job__dates--current" : ""
                  }`}
                >
                  {job.start} – {job.end}
                </p>
              </header>
              <ul className="job__bullets">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <ul className="tag-list" aria-label="Technologies">
                {job.tech.map((tech) => (
                  <li key={tech} className="tag">
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
