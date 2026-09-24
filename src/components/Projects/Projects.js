import React, { useState } from "react";
import { FiChevronDown, FiExternalLink, FiGithub } from "react-icons/fi";
import { projectGroups, projects, socialLinks } from "../../portfolio";
import Section from "../Section";
import "./Projects.css";

const github = socialLinks.find((link) => link.name === "GitHub");
const groupById = Object.fromEntries(
  projectGroups.map((group) => [group.id, group])
);
const featured = projects.filter((project) => project.featured);
const others = projects.filter((project) => !project.featured);
const COLLAPSED_ROWS = 6;

function CategoryPill({ groupId }) {
  return (
    <span className={`category category--${groupId}`}>
      {groupById[groupId].label}
    </span>
  );
}

function LinkIcons({ project }) {
  return (
    <span className="project-links">
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-links__btn"
          aria-label={`Visit ${project.name}`}
          title="Visit site"
        >
          <FiExternalLink aria-hidden="true" />
        </a>
      )}
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="project-links__btn"
          aria-label={`Source code for ${project.name}`}
          title="View code"
        >
          <FiGithub aria-hidden="true" />
        </a>
      )}
    </span>
  );
}

function FeaturedCard({ project }) {
  return (
    <li className="card feature">
      <div className="feature__top">
        <CategoryPill groupId={project.group} />
        <LinkIcons project={project} />
      </div>
      <h3 className="feature__name">{project.name}</h3>
      {project.type && <p className="feature__type">{project.type}</p>}
      <p className="feature__summary">
        {project.summary || project.description}
      </p>
      <ul className="feature__stack" aria-label="Tech stack">
        {project.tags.slice(0, 4).map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </li>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [expanded, setExpanded] = useState(false);

  const filters = [
    { id: "all", title: "All", count: others.length },
    ...projectGroups
      .map((group) => ({
        id: group.id,
        title: group.title,
        count: others.filter((project) => project.group === group.id).length,
      }))
      .filter((item) => item.count > 0),
  ];
  const matching =
    filter === "all" ? others : others.filter((p) => p.group === filter);
  const collapsible = filter === "all" && matching.length > COLLAPSED_ROWS;
  const visible =
    collapsible && !expanded ? matching.slice(0, COLLAPSED_ROWS) : matching;

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="What I've built"
      lead={`${projects.length} projects across company platforms, client products, generative AI and research, each with the stack behind it.`}
    >
      <ul className="features">
        {featured.map((project) => (
          <FeaturedCard key={project.name} project={project} />
        ))}
      </ul>

      <div className="archive">
        <div className="archive__header">
          <h3 className="archive__title">More projects</h3>
          <div
            className="archive__filters"
            role="group"
            aria-label="Filter projects"
          >
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`chip archive__filter${
                  filter === item.id ? " archive__filter--active" : ""
                }`}
                aria-pressed={filter === item.id}
                onClick={() => {
                  setFilter(item.id);
                  setExpanded(false);
                }}
              >
                {item.title}{" "}
                <span className="archive__count">{item.count}</span>
              </button>
            ))}
          </div>
        </div>

        <ul className="archive__list">
          {visible.map((project) => (
            <li key={project.name} className="archive__row">
              <div className="archive__main">
                <span className="archive__name">{project.name}</span>
                <span className="archive__summary">
                  {project.summary || project.description}
                </span>
              </div>
              <CategoryPill groupId={project.group} />
              <span className="archive__stack">
                {project.tags.slice(0, 3).join(" · ")}
              </span>
              <LinkIcons project={project} />
            </li>
          ))}
        </ul>

        <div className="archive__footer">
          {collapsible && (
            <button
              type="button"
              className="btn btn--secondary archive__toggle"
              aria-expanded={expanded}
              onClick={() => setExpanded((value) => !value)}
            >
              {expanded ? "Show fewer" : `Show all ${matching.length} projects`}
              <FiChevronDown
                aria-hidden="true"
                className={expanded ? "archive__chevron--up" : undefined}
              />
            </button>
          )}
          {github && (
            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="archive__github"
            >
              <FiGithub aria-hidden="true" /> More on GitHub
            </a>
          )}
        </div>
      </div>
    </Section>
  );
}
