import React, { useCallback, useEffect, useState } from "react";
import ReactGA from "react-ga";
import { settings } from "./portfolio";
import useTheme from "./hooks/useTheme";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import ChatAssistant from "./components/ChatAssistant/ChatAssistant";

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const [chat, setChat] = useState({ open: false, question: null });

  useEffect(() => {
    if (settings.googleTrackingID) {
      ReactGA.initialize(settings.googleTrackingID, {
        testMode: process.env.NODE_ENV === "test",
      });
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  // Shareable links: "#ask" opens the assistant, "#ask=<question>" also asks.
  useEffect(() => {
    const match = window.location.hash.match(/^#ask(?:=(.+))?$/);
    if (match) {
      setChat({
        open: true,
        question: match[1] ? decodeURIComponent(match[1]) : null,
      });
    }
  }, []);

  // Opens the assistant, optionally asking a question straight away.
  const openChat = useCallback(
    (question = null) => setChat({ open: true, question }),
    []
  );
  const closeChat = useCallback(
    () => setChat({ open: false, question: null }),
    []
  );
  const questionHandled = useCallback(
    () => setChat((c) => ({ ...c, question: null })),
    []
  );

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenChat={() => openChat()}
      />
      <main id="main">
        <Hero onAsk={openChat} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact onOpenChat={() => openChat()} />
      </main>
      <ChatAssistant
        open={chat.open}
        pendingQuestion={chat.question}
        onQuestionHandled={questionHandled}
        onOpen={() => openChat()}
        onClose={closeChat}
      />
    </>
  );
}
