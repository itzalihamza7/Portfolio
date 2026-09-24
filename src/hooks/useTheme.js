import { useCallback, useState } from "react";

// public/index.html sets data-theme before React loads; this keeps it in sync.
export default function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute("data-theme") || "light"
  );

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {
        // Storage can be unavailable (private mode); the toggle still works.
      }
      return next;
    });
  }, []);

  return [theme, toggleTheme];
}
