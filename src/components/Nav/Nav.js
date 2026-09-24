import React, { useEffect, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import { profile } from "../../portfolio";
import "./Nav.css";

const LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Nav({ theme, onToggleTheme, onOpenChat }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link of the section currently in the middle of the viewport.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    LINKS.forEach(({ id }) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`nav${scrolled || menuOpen ? " nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" onClick={closeMenu}>
          <span className="nav__logo" aria-hidden="true">
            AH
          </span>
          <span className="nav__name">{profile.name}</span>
        </a>

        <nav
          className={`nav__links${menuOpen ? " nav__links--open" : ""}`}
          aria-label="Main"
        >
          {LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav__link${
                active === id ? " nav__link--active" : ""
              }`}
              aria-current={active === id ? "true" : undefined}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="btn btn--primary nav__ask"
            onClick={() => {
              closeMenu();
              onOpenChat();
            }}
          >
            <HiOutlineSparkles aria-hidden="true" />
            <span>Ask AI</span>
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={
              theme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button
            type="button"
            className="icon-btn nav__menu-btn"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
