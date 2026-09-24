import React from "react";
import { FaJava } from "react-icons/fa";
import {
  SiAmazonaws,
  SiAnsible,
  SiDocker,
  SiJest,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiRedis,
  SiRubyonrails,
  SiScikitlearn,
  SiSpringboot,
  SiTensorflow,
  SiTerraform,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

// Brand colors; `dark` overrides colors that disappear on a dark background.
const ICONS = {
  "Ruby on Rails": { Icon: SiRubyonrails, color: "#CC0000" },
  "Node.js": { Icon: SiNodedotjs, color: "#339933" },
  React: { Icon: SiReact, color: "#149ECA", dark: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "#000000", dark: "#FFFFFF" },
  "Vue.js": { Icon: SiVuedotjs, color: "#42B883" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  Python: { Icon: SiPython, color: "#3776AB", dark: "#FFD43B" },
  Java: { Icon: FaJava, color: "#E76F00" },
  "Spring Boot": { Icon: SiSpringboot, color: "#6DB33F" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1", dark: "#6B8BF5" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  Redis: { Icon: SiRedis, color: "#DC382D" },
  AWS: { Icon: SiAmazonaws, color: "#FF9900" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Terraform: { Icon: SiTerraform, color: "#7B42BC", dark: "#9F6EE0" },
  Ansible: { Icon: SiAnsible, color: "#EE0000" },
  TensorFlow: { Icon: SiTensorflow, color: "#FF6F00" },
  PyTorch: { Icon: SiPytorch, color: "#EE4C2C" },
  "Scikit-learn": { Icon: SiScikitlearn, color: "#F7931E" },
  "OpenAI API": { Icon: SiOpenai, color: "#10A37F" },
  Jest: { Icon: SiJest, color: "#C21325" },
};

export default function TechIcon({ name }) {
  const entry = ICONS[name];
  if (!entry) return null;
  const { Icon, color, dark = color } = entry;
  return (
    <span
      className="tech-icon"
      style={{ "--icon-color": color, "--icon-color-dark": dark }}
      aria-hidden="true"
    >
      <Icon />
    </span>
  );
}
