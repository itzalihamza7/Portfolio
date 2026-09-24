/*
 * Turns the portfolio data into small, self-contained passages ("chunks") that
 * the retriever can rank. Each chunk reads as plain prose about Ali so it can be
 * shown to a visitor directly or handed to the language model as context.
 *
 * `keywords` are extra search terms that do not appear in the text itself but
 * that visitors are likely to use (e.g. "job" for an experience entry).
 */

const join = (items) => items.filter(Boolean).join(", ");

export function buildKnowledgeBase(data) {
  const {
    profile,
    socialLinks,
    achievements,
    focusAreas,
    skillGroups,
    spokenLanguages,
    experience,
    projectGroups,
    projects,
    education,
    certifications,
    volunteering,
  } = data;

  const chunks = [];
  const add = (chunk) => chunks.push(chunk);

  const current = experience.find((job) => job.end === "Present");
  const currentStudy = education.find((degree) => degree.end === "Present");

  add({
    id: "profile",
    title: "Profile",
    section: "about",
    text: [
      `${profile.name} is a ${profile.headline} (${profile.tagline}), based in ${profile.location}.`,
      current &&
        `He currently works as ${current.role} at ${current.company} (since ${current.start}).`,
      currentStudy &&
        `He is studying for a ${currentStudy.degree} at ${currentStudy.school} (since ${currentStudy.start}).`,
      profile.summary,
    ]
      .filter(Boolean)
      .join(" "),
    keywords:
      "who is about overview introduction background summary bio person profile currently now today present",
  });

  add({
    id: "contact",
    title: "Contact and availability",
    section: "contact",
    text: [
      `You can reach ${profile.firstName} by email at ${profile.email}.`,
      `Online: ${socialLinks
        .filter((link) => link.name !== "Email")
        .map((link) => `${link.name} (${link.url})`)
        .join(", ")}, and the website ${profile.website}.`,
      `His resume is available at ${profile.resumeLink}.`,
      profile.availability,
    ].join(" "),
    keywords:
      "contact reach email mail message hire hiring recruit available availability open opportunity job offer role position cv resume linkedin github social location based live full time fulltime part hours week start notice join",
  });

  add({
    id: "achievements",
    title: "Key achievements",
    section: "about",
    text: [
      "Key achievements and metrics:",
      ...achievements.map((item) => `- ${item}`),
    ].join("\n"),
    keywords:
      "achievement accomplishment impact result metric number proud best biggest highlight performance improvement",
  });

  add({
    id: "focus",
    title: "Focus areas",
    section: "about",
    text: `Main focus areas: ${focusAreas
      .map((area) => `${area.title}: ${area.text}`)
      .join(" ")}`,
    keywords:
      "focus specialize specialization interest interested expertise strength passion domain healthcare",
  });

  skillGroups.forEach((group) => {
    add({
      id: `skills-${slug(group.title)}`,
      title: `Skills: ${group.title}`,
      section: "skills",
      text: `${group.title} skills: ${join(group.items)}.`,
      keywords:
        "skill skills technology technologies tech stack tool tools know knowledge proficient experience familiar",
    });
  });

  add({
    id: "spoken-languages",
    title: "Spoken languages",
    section: "about",
    text: `Spoken languages: ${spokenLanguages
      .map((lang) => `${lang.name} (${lang.level})`)
      .join(", ")}.`,
    keywords:
      "language languages speak spoken fluent fluency native german deutsch english urdu punjabi",
  });

  experience.forEach((job) => {
    const isCurrent = job.end === "Present";
    add({
      id: `experience-${slug(job.company)}`,
      title: `${job.role} at ${job.company}`,
      section: "experience",
      text: [
        `**${job.role} at ${job.company}** (${
          isCurrent ? "current role" : "past role"
        }, ${job.start} – ${job.end}, ${job.location})`,
        ...job.bullets.map((bullet) => `- ${bullet}`),
        `Technologies: ${join(job.tech)}.`,
      ].join("\n"),
      keywords: [
        "experience work worked job role position company employer career employment professional",
        isCurrent
          ? "current currently now present today"
          : "previous past former",
      ].join(" "),
    });
  });

  add({
    id: "experience-overview",
    title: "Work history overview",
    section: "experience",
    text: `Work history: ${experience
      .map((job) => `${job.role} at ${job.company} (${job.start} – ${job.end})`)
      .join("; ")}.`,
    keywords:
      "experience work history career timeline jobs companies employers years how long worked total",
  });

  const groupOf = (id) => projectGroups.find((group) => group.id === id);
  const groupTitle = (id) => groupOf(id).title;
  const links = (project) =>
    [
      project.url && `Website: ${project.url}`,
      project.repo && `Code: ${project.repo}`,
    ]
      .filter(Boolean)
      .join(" · ");

  // Lists every project by group, highlighted ones first, so general questions
  // ("What has he worked on?") get the projects Ali wants to lead with.
  const highlighted = projects.filter((project) => project.highlight);
  add({
    id: "projects-overview",
    title: "Projects overview",
    section: "projects",
    text: [
      `Projects to mention first when asked what ${profile.firstName} has worked on:`,
      ...highlighted.map(
        (project) =>
          `- **${project.name}** (${project.type}): ${
            project.description
          } Tech stack: ${join(project.tags)}.`
      ),
      "All projects by group:",
      ...projectGroups.map(
        (group) =>
          `- ${group.title}: ${projects
            .filter((project) => project.group === group.id)
            .map((project) => project.name)
            .join(", ")}`
      ),
    ].join("\n"),
    keywords:
      "project projects worked work built build portfolio example examples products apps applications catalog overview",
  });

  projects.forEach((project) => {
    add({
      id: `project-${slug(project.name)}`,
      title: project.name,
      section: "projects",
      text: [
        `**${project.name}** (${[
          groupTitle(project.group),
          project.type,
          project.company && `built at ${project.company}`,
          project.date,
        ]
          .filter(Boolean)
          .join(", ")})`,
        project.description,
        `Context: ${groupOf(project.group).description}`,
        `Tech stack: ${join(project.tags)}.`,
        links(project),
      ]
        .filter(Boolean)
        .join("\n"),
      keywords: [
        "project projects app application backend frontend stack technology",
        project.group === "client"
          ? "client clients freelance upwork customer"
          : "",
        project.group === "genai" ? "ai genai llm rag generative" : "",
        project.group === "research" ? "research university thesis" : "",
      ].join(" "),
    });
  });

  education.forEach((degree) => {
    add({
      id: `education-${slug(degree.school)}`,
      title: degree.degree,
      section: "education",
      text: [
        `**${degree.degree}** at ${degree.school}, ${degree.location} (education, ${degree.start} – ${degree.end})`,
        degree.courses.length > 0 &&
          `Relevant courses: ${join(degree.courses)}.`,
      ]
        .filter(Boolean)
        .join("\n"),
      keywords: [
        "education study studies studying degree university college school academic course courses",
        degree.end === "Present" ? "current currently master masters msc" : "",
      ].join(" "),
    });
  });

  add({
    id: "certifications",
    title: "Certifications",
    section: "education",
    text: [
      "Certifications:",
      ...certifications.map(
        (cert) =>
          `- ${[cert.name, cert.issuer && `(${cert.issuer})`, cert.date]
            .filter(Boolean)
            .join(" ")}${cert.url ? `, verify at ${cert.url}` : ""}`
      ),
    ].join("\n"),
    keywords:
      "certification certifications certificate certified course training credential",
  });

  add({
    id: "volunteering",
    title: "Volunteering and leadership",
    section: "education",
    text: `Volunteering and leadership: ${volunteering
      .map(
        (item) =>
          `${item.role} at ${item.organization}, ${item.location} (${item.start} – ${item.end})`
      )
      .join("; ")}.`,
    keywords:
      "volunteer volunteering leadership lead extracurricular community conference event",
  });

  return chunks;
}

function slug(value) {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
