import React from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { moreProjects, projects, socialLinks } from "../../portfolio";
import Section from "../Section";
import "./Projects.css";

const github = socialLinks.find((link) => link.name === "GitHub");

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      lead="AI applications, data analysis and full-stack systems, including this site's own RAG assistant."
    >
      <ul className="projects">
        {projects.map((project) => (
          <li key={project.name} className="card project">
            <div className="project__meta">
              <span className="tag tag--accent">{project.category}</span>
              <span className="project__date">{project.date}</span>
            </div>
            <h3 className="project__name">{project.name}</h3>
            <p className="project__description">{project.description}</p>
            <ul className="tag-list project__tags" aria-label="Built with">
              {project.tags.map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </ul>
            {project.url && (
              <a
                className="project__link"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub aria-hidden="true" /> View code
                <span className="visually-hidden"> for {project.name}</span>
              </a>
            )}
          </li>
        ))}
      </ul>

      <div className="more-projects">
        <div className="more-projects__header">
          <h3 className="more-projects__title">More on GitHub</h3>
          {github && (
            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="more-projects__all"
            >
              All repositories <FiArrowUpRight aria-hidden="true" />
            </a>
          )}
        </div>
        <ul className="more-projects__list">
          {moreProjects.map((project) => (
            <li key={project.name}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="more-project"
              >
                <span className="more-project__name">
                  {project.name} <FiArrowUpRight aria-hidden="true" />
                </span>
                <span className="more-project__description">
                  {project.description}
                </span>
                <span className="more-project__tags">
                  {project.tags.join(" · ")}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
