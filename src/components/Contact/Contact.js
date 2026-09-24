import React from "react";
import { FiDownload, FiMail } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import { profile } from "../../portfolio";
import useReveal from "../../hooks/useReveal";
import SocialLinks from "../SocialLinks";
import "./Contact.css";

export default function Contact({ onOpenChat }) {
  const revealRef = useReveal();

  return (
    <>
      <section id="contact" className="section" aria-labelledby="contact-title">
        <div className="container">
          <div ref={revealRef} className="reveal contact">
            <span className="eyebrow">Contact</span>
            <h2 id="contact-title" className="contact__title">
              Let's build something together
            </h2>
            <p className="contact__text">{profile.availability}</p>
            <div className="contact__actions">
              <a className="btn btn--primary" href={`mailto:${profile.email}`}>
                <FiMail aria-hidden="true" /> {profile.email}
              </a>
              <a
                className="btn btn--secondary"
                href={profile.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiDownload aria-hidden="true" /> Resume
              </a>
              <button
                type="button"
                className="btn btn--secondary"
                onClick={onOpenChat}
              >
                <HiOutlineSparkles aria-hidden="true" /> Ask the AI assistant
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container footer__inner">
          <p>
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </p>
          <SocialLinks />
        </div>
      </footer>
    </>
  );
}
