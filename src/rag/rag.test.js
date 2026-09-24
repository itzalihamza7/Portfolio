import { knowledgeBase, retrieveContext, localAnswer } from "./index";
import { tokenize } from "./retriever";

const topIds = (question, previous) =>
  retrieveContext(question, previous).results.map((result) => result.chunk.id);

describe("knowledge base", () => {
  it("gives every chunk a unique id and non-empty text", () => {
    const ids = knowledgeBase.map((chunk) => chunk.id);
    expect(new Set(ids).size).toBe(ids.length);
    knowledgeBase.forEach((chunk) =>
      expect(chunk.text.length).toBeGreaterThan(20)
    );
  });
});

describe("tokenize", () => {
  it("normalizes accents, case, stopwords and plurals", () => {
    expect(tokenize("Universität Koblenz")).toEqual(["universitat", "koblenz"]);
    expect(tokenize("What are Ali's projects?")).toEqual(["project"]);
  });
});

describe("retrieval", () => {
  const cases = [
    ["Where does he work currently?", "experience-universitat-koblenz"],
    ["What is Ali doing right now?", "experience-universitat-koblenz"],
    ["What did he do at Veroke?", "experience-veroke"],
    ["Has he worked with Redis caching?", "experience-veroke"],
    ["Does he know Spring Boot?", "experience-universitat-koblenz"],
    [
      "Which AI projects has he built?",
      "project-rag-chatbot-for-technical-documentation",
    ],
    [
      "Tell me about the face mask detection project",
      "project-face-mask-detection",
    ],
    ["What is he studying?", "education-universitat-koblenz"],
    [
      "Where did he do his bachelor?",
      "education-national-university-of-sciences-and-technology-nust",
    ],
    ["How can I contact him?", "contact"],
    ["Is he open to hiring?", "contact"],
    ["Does he speak German?", "spoken-languages"],
    ["What certifications does he have?", "certifications"],
    ["What databases does he use?", "skills-databases-and-caching"],
    ["Has he done an internship?", "experience-ptcl"],
    [
      "What is his experience with FHIR and healthcare?",
      "project-fhir-enabled-blockchain-based-healthcare-information-system",
    ],
  ];

  it.each(cases)("%s -> %s in the top 3", (question, expectedId) => {
    expect(topIds(question).slice(0, 3)).toContain(expectedId);
  });

  it.each([
    "What projects has he worked on?",
    "Can you give examples of his work?",
    "What has he built?",
  ])("%s -> leads with the projects overview", (question) => {
    expect(topIds(question)[0]).toBe("projects-overview");
    const { chunks } = retrieveContext(question);
    expect(chunks.map((chunk) => chunk.id)).toContain("projects-overview");
  });

  it("finds client projects by name", () => {
    expect(topIds("What did he build for Nexmuv?")[0]).toBe("project-nexmuv");
  });

  it("prefers the section a question names", () => {
    const top = retrieveContext(
      "Which AI projects has he built?"
    ).results.slice(0, 3);
    top.forEach(({ chunk }) => expect(chunk.section).toBe("projects"));
  });

  it("uses the previous question to resolve follow-ups", () => {
    expect(
      topIds(
        "What technologies did he use there?",
        "What did he do at Devsinc?"
      )[0]
    ).toBe("experience-devsinc");
  });

  it("always hands the profile to the model first", () => {
    expect(retrieveContext("Redis").chunks[0].id).toBe("profile");
  });

  it("finds nothing for unrelated questions", () => {
    expect(
      retrieveContext("What's the weather in Paris tomorrow?").results
    ).toEqual([]);
  });
});

describe("localAnswer", () => {
  it("answers from the best matching passage", () => {
    const { answer, sources } = localAnswer("How can I reach him?");
    expect(answer).toContain("alihamzaali44@gmail.com");
    expect(sources[0].id).toBe("contact");
  });

  it("leads with Al-Tabeeb and Iwish for general project questions", () => {
    const { answer } = localAnswer("What projects has Ali worked on?");
    expect(answer.indexOf("Al-Tabeeb")).toBeLessThan(answer.indexOf("Iwish"));
    expect(answer).toContain("Iwish");
  });

  it("greets without searching", () => {
    expect(localAnswer("Hello!").sources).toEqual([]);
  });

  it("says so when nothing matches", () => {
    expect(localAnswer("Recommend a pizza place").answer).toMatch(
      /couldn't find/
    );
  });
});
