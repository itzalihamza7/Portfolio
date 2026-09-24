import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { socialLinks } from "../portfolio";

const ICONS = { GitHub: FiGithub, LinkedIn: FiLinkedin, Email: FiMail };

export default function SocialLinks() {
  return (
    <ul className="social-links">
      {socialLinks.map((link) => {
        const Icon = ICONS[link.name];
        const external = !link.url.startsWith("mailto:");
        return (
          <li key={link.name}>
            <a
              className="icon-btn"
              href={link.url}
              aria-label={link.name}
              title={link.name}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {Icon ? <Icon aria-hidden="true" /> : link.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
