import React from "react";
import ReactDOM from "react-dom";
import { act, Simulate } from "react-dom/test-utils";
import App from "./App";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
});

it("renders every section", () => {
  act(() => {
    ReactDOM.render(<App />, container);
  });
  ["about", "experience", "skills", "projects", "education", "contact"].forEach(
    (id) => {
      expect(container.querySelector(`#${id}`)).not.toBeNull();
    }
  );
  expect(container.textContent).toContain(
    "Research Assistant at Universität Koblenz"
  );
});

it("answers a question asked from the hero", async () => {
  act(() => {
    ReactDOM.render(<App />, container);
  });

  const input = container.querySelector("#hero-question");
  act(() => {
    Simulate.change(input, {
      target: { value: "Where did he do his bachelor?" },
    });
  });
  await act(async () => {
    Simulate.submit(input.form);
  });

  const chat = container.querySelector(".chat");
  expect(chat.classList).toContain("chat--open");
  const messages = chat.querySelectorAll(
    ".chat__message--assistant .chat__bubble"
  );
  expect(messages[messages.length - 1].textContent).toContain(
    "National University of Sciences and Technology"
  );
});

it("expands a project in the list to show its details", () => {
  act(() => {
    ReactDOM.render(<App />, container);
  });

  const toggle = container.querySelector(".archive__summary-btn");
  expect(toggle.getAttribute("aria-expanded")).toBe("false");
  act(() => {
    Simulate.click(toggle);
  });

  expect(toggle.getAttribute("aria-expanded")).toBe("true");
  const details = container.querySelector(
    `#${toggle.getAttribute("aria-controls")}`
  );
  expect(
    details.querySelector(".archive__description").textContent.length
  ).toBeGreaterThan(20);
});
