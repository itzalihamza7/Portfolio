import React from "react";
import { coreStack, skillGroups } from "../../portfolio";
import Section from "../Section";
import TechIcon from "../TechIcon/TechIcon";
import "./Skills.css";

// Groups shown as full cards; the rest are listed compactly below them.
const PRIMARY_GROUPS = 8;

export default function Skills() {
  const groups = skillGroups.filter((group) => !group.hideOnPage);
  const primary = groups.slice(0, PRIMARY_GROUPS);
  const secondary = groups.slice(PRIMARY_GROUPS);

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I use to ship"
      lead="Backend, frontend, data and AI, with the infrastructure and testing to run them in production."
      alt
    >
      <ul className="stack" aria-label="Core technologies">
        {coreStack.map((name) => (
          <li key={name} className="stack__item">
            <TechIcon name={name} />
            <span>{name}</span>
          </li>
        ))}
      </ul>

      <div className="skill-groups">
        {primary.map((group) => (
          <div key={group.title} className="card skill-group">
            <h3 className="skill-group__title">{group.title}</h3>
            <ul className="tag-list">
              {group.items.map((item) => (
                <li key={item} className="tag">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <dl className="skill-more">
        {secondary.map((group) => (
          <div key={group.title} className="skill-more__row">
            <dt>{group.title}</dt>
            <dd>{group.items.join(" · ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
