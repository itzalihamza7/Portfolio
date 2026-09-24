import React from "react";

// Renders the small Markdown subset the assistant is asked to use (paragraphs,
// "- " bullet lists, **bold**) plus auto-linked URLs and emails. Builds React
// elements instead of injecting HTML, so model output can never inject markup.

const INLINE = /(\*\*[^*]+\*\*|https?:\/\/[^\s)]+|[\w.+-]+@[\w-]+\.[\w.-]+)/g;

function renderInline(text, keyPrefix) {
  return text.split(INLINE).map((part, index) => {
    const key = `${keyPrefix}-${index}`;
    if (!part) return null;
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={key}>{part.slice(2, -2)}</strong>;
    }
    if (/^https?:\/\//.test(part)) {
      const url = part.replace(/[.,;:]+$/, "");
      const trailing = part.slice(url.length);
      return (
        <React.Fragment key={key}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
          {trailing}
        </React.Fragment>
      );
    }
    if (/^[\w.+-]+@[\w-]+\.[\w.-]+$/.test(part)) {
      const email = part.replace(/\.+$/, "");
      return (
        <React.Fragment key={key}>
          <a href={`mailto:${email}`}>{email}</a>
          {part.slice(email.length)}
        </React.Fragment>
      );
    }
    return part;
  });
}

export default function FormattedText({ text }) {
  const blocks = [];
  let list = null;

  text.split("\n").forEach((rawLine) => {
    const line = rawLine.trim();
    const bullet = line.match(/^(?:[-*•]|\d+\.)\s+(.*)$/);
    if (bullet) {
      if (!list) {
        list = [];
        blocks.push({ type: "list", items: list });
      }
      list.push(bullet[1]);
      return;
    }
    list = null;
    if (line)
      blocks.push({ type: "paragraph", text: line.replace(/^#+\s*/, "") });
  });

  return blocks.map((block, index) =>
    block.type === "list" ? (
      <ul key={index}>
        {block.items.map((item, itemIndex) => (
          <li key={itemIndex}>{renderInline(item, `${index}-${itemIndex}`)}</li>
        ))}
      </ul>
    ) : (
      <p key={index}>{renderInline(block.text, `${index}`)}</p>
    )
  );
}
