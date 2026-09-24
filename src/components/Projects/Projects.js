import React from "react";
import { FiArrowUpRight, FiExternalLink, FiGithub } from "react-icons/fi";
import { projectGroups, projects, socialLinks } from "../../portfolio";
import Section from "../Section";
import "./Projects.css";

const github = socialLinks.find((link) => link.name === "GitHub");

function ProjectLinks({ project }) {
  if (!project.url && !project.repo) return null;
  return (
    <div className="project__links">
      {project.url && (
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <FiExternalLink aria-hidden="true" /> Visit site
          <span className="visually-hidden"> of {project.name}</span>
        </a>
      )}
      {project.repo && (
        <a href={project.repo} target="_blank" rel="noopener noreferrer">
          <FiGithub aria-hidden="true" /> View code
          <span className="visually-hidden"> for {project.name}</span>
        </a>
      )}
    </div>
  );
}

function ProjectCard({ project, featured }) {
  return (
    <li className={`card project${featured ? " project--featured" : ""}`}>
      <div className="project__meta">
        {project.type && (
          <span className="tag tag--accent">{project.type}</span>
        )}
        {project.date && <span className="project__date">{project.date}</span>}
      </div>
      <h4 className="project__name">{project.name}</h4>
      <p className="project__description">{project.description}</p>
      <ul className="tag-list project__tags" aria-label="Built with">
        {project.tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>
      <ProjectLinks project={project} />
    </li>
  );
}

function CompactProject({ project }) {
  const href = project.url || project.repo;
  const content = (
    <>
      <span className="compact-project__name">
        {project.name}
        {href && <FiArrowUpRight aria-hidden="true" />}
      </span>
      <span className="compact-project__description">
        {project.description}
      </span>
      <span className="compact-project__tags">{project.tags.join(" · ")}</span>
    </>
  );
  return (
    <li>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="compact-project"
        >
          {content}
        </a>
      ) : (
        <div className="compact-project">{content}</div>
      )}
    </li>
  );
}

export default function Projects() {
  const groups = projectGroups
    .map((group) => ({
      ...group,
      items: projects.filter((project) => project.group === group.id),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      lead="Backend-heavy products and generative AI, backed by production work for international clients."
    >
      <nav className="project-index" aria-label="Project groups">
        {groups.map((group) => (
          <a key={group.id} href={`#projects-${group.id}`} className="chip">
            {group.title}{" "}
            <span className="project-index__count">{group.items.length}</span>
          </a>
        ))}
      </nav>

      {groups.map((group) => (
        <div
          key={group.id}
          id={`projects-${group.id}`}
          className="project-group"
          aria-labelledby={`projects-${group.id}-title`}
        >
          <header className="project-group__header">
            <h3
              id={`projects-${group.id}-title`}
              className="project-group__title"
            >
              {group.title}
            </h3>
            <p className="project-group__description">{group.description}</p>
          </header>

          {group.layout === "compact" ? (
            <ul className="compact-projects">
              {group.items.map((project) => (
                <CompactProject key={project.name} project={project} />
              ))}
            </ul>
          ) : (
            <ul
              className={`projects${
                group.layout === "featured" ? " projects--featured" : ""
              }`}
            >
              {group.items.map((project) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  featured={group.layout === "featured"}
                />
              ))}
            </ul>
          )}

          {group.id === "labs" && github && (
            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-group__more"
            >
              All repositories on GitHub <FiArrowUpRight aria-hidden="true" />
            </a>
          )}
        </div>
      ))}
    </Section>
  );
}
