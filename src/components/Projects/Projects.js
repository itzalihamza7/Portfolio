import React, { useRef, useState } from "react";
import { FiArrowUpRight, FiExternalLink, FiGithub } from "react-icons/fi";
import { projectGroups, projects, socialLinks } from "../../portfolio";
import Section from "../Section";
import "./Projects.css";

const github = socialLinks.find((link) => link.name === "GitHub");
const MAX_TAGS = 5;

const groups = projectGroups
  .map((group) => ({
    ...group,
    items: projects.filter((project) => project.group === group.id),
  }))
  .filter((group) => group.items.length > 0);

function Tags({ tags }) {
  const shown = tags.slice(0, MAX_TAGS);
  const hidden = tags.slice(MAX_TAGS);
  return (
    <ul className="tag-list project__tags" aria-label="Tech stack">
      {shown.map((tag) => (
        <li key={tag} className="tag">
          {tag}
        </li>
      ))}
      {hidden.length > 0 && (
        <li className="tag tag--more" title={hidden.join(", ")}>
          +{hidden.length}
        </li>
      )}
    </ul>
  );
}

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
      <p className="project__description">
        {project.summary || project.description}
      </p>
      <Tags tags={project.tags} />
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
        {project.summary || project.description}
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
  const [activeId, setActiveId] = useState(groups[0].id);
  const tabRefs = useRef({});
  const active = groups.find((group) => group.id === activeId);

  // Arrow keys move between tabs, as in native tab controls.
  const onTabKeyDown = (event) => {
    const index = groups.findIndex((group) => group.id === activeId);
    const offset = { ArrowRight: 1, ArrowLeft: -1 }[event.key];
    if (!offset) return;
    event.preventDefault();
    const next = groups[(index + offset + groups.length) % groups.length];
    setActiveId(next.id);
    tabRefs.current[next.id].focus();
  };

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      lead="Backend-heavy company platforms and generative AI, backed by production work for international clients."
    >
      <div className="project-tabs" role="tablist" aria-label="Project groups">
        {groups.map((group) => {
          const selected = group.id === activeId;
          return (
            <button
              key={group.id}
              ref={(node) => {
                tabRefs.current[group.id] = node;
              }}
              type="button"
              role="tab"
              id={`projects-tab-${group.id}`}
              aria-selected={selected}
              aria-controls="projects-panel"
              tabIndex={selected ? 0 : -1}
              className={`project-tab${selected ? " project-tab--active" : ""}`}
              onClick={() => setActiveId(group.id)}
              onKeyDown={onTabKeyDown}
            >
              {group.title}
              <span className="project-tab__count">{group.items.length}</span>
            </button>
          );
        })}
      </div>

      <div
        id="projects-panel"
        role="tabpanel"
        aria-labelledby={`projects-tab-${active.id}`}
        className="project-panel"
      >
        <p className="project-panel__description">{active.description}</p>

        {active.layout === "compact" ? (
          <ul className="compact-projects">
            {active.items.map((project) => (
              <CompactProject key={project.name} project={project} />
            ))}
          </ul>
        ) : (
          <ul className={`projects projects--${active.layout}`}>
            {active.items.map((project) => (
              <ProjectCard
                key={project.name}
                project={project}
                featured={active.layout === "featured"}
              />
            ))}
          </ul>
        )}

        {active.id === "labs" && github && (
          <a
            href={github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-panel__more"
          >
            All repositories on GitHub <FiArrowUpRight aria-hidden="true" />
          </a>
        )}
      </div>
    </Section>
  );
}
