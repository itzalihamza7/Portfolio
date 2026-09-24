import React from "react";
import useReveal from "../hooks/useReveal";

export default function Section({ id, eyebrow, title, lead, alt, children }) {
  const revealRef = useReveal();

  return (
    <section
      id={id}
      className={`section${alt ? " section--alt" : ""}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="container">
        <div ref={revealRef} className="reveal">
          <header className="section-header">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h2 id={`${id}-title`} className="section-title">
              {title}
            </h2>
            {lead && <p className="section-lead">{lead}</p>}
          </header>
          {children}
        </div>
      </div>
    </section>
  );
}
