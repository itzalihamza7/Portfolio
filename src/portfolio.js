/*
 * Single source of truth for the portfolio.
 *
 * Everything on the page AND everything the AI assistant knows comes from this
 * file (see src/rag/knowledgeBase.js), so keep it accurate. It must stay plain
 * data with no imports or process.env access, because the chat API worker in
 * chat-api/ bundles it as well.
 *
 * Content follows the Master Resume (Sep 2026).
 */

const settings = {
  googleTrackingID: "UA-174238252-2",
};

const profile = {
  name: "Ali Hamza",
  firstName: "Ali",
  headline: "Full-Stack Developer",
  tagline: "MSc Student in Web and Data Science",
  location: "Koblenz, Germany",
  email: "alihamzaali44@gmail.com",
  website: "https://www.alihamza.co",
  photo: "ali-2026.jpg",
  resumeLink:
    "https://drive.google.com/file/d/1Te5n9U9qKroEnyLnHM8iaya9jqHCWFVB/view?usp=sharing",
  intro:
    "I build backend systems and APIs with Ruby on Rails, Node.js and Spring Boot, and bring generative AI into products with RAG and LLM-powered features.",
  summary:
    "Full-stack engineer who builds web products end to end, from APIs and databases to the interfaces people actually use. Over the past 3+ years, shipped applications for product companies and international freelance clients with Ruby on Rails and Node.js on the backend and React and Vue.js on the frontend. Focused on making systems fast and reliable: clean REST APIs secured with OAuth 2.0 and JWT, performance through Redis caching and database optimization, and automated deployments on AWS with Terraform and Ansible. Brings data and AI into products, from personalized recommendation features to interactive dashboards. Currently a Research Assistant at Universität Koblenz while completing a Master's in Web and Data Science, building Spring Boot services and Vue.js visualizations that connect data from multiple ERP systems into an explorable knowledge graph.",
  availability:
    "Open to conversations about software engineering, data and AI roles, including working student positions alongside the Master's. Email is the best way to get in touch.",
};

const socialLinks = [
  {
    name: "GitHub",
    handle: "itzalihamza7",
    url: "https://github.com/itzalihamza7",
  },
  {
    name: "LinkedIn",
    handle: "alihamza1234",
    url: "https://www.linkedin.com/in/alihamza1234/",
  },
  {
    name: "Email",
    handle: "alihamzaali44@gmail.com",
    url: "mailto:alihamzaali44@gmail.com",
  },
];

// Headline numbers shown under the hero.
const highlights = [
  { value: "3+", label: "years shipping production software" },
  { value: "5M+", label: "registered users on a platform I built APIs for" },
  { value: "~180 ms", label: "peak API response time, down from ~600 ms" },
  { value: "10+", label: "full-stack projects for international clients" },
];

const achievements = [
  "Built secure REST APIs with OAuth 2.0, JWT and role-based access control for a platform with 5M+ registered users.",
  "Cut average API response times from ~600 ms to ~180 ms during peak traffic through Redis caching and query optimization.",
  "Reduced environment setup time by 65% (from ~3 hours to ~1 hour) with Terraform and Ansible, removing manual configuration errors.",
  "Reduced deployment time by 75% and enabled zero-downtime releases with CI/CD on AWS.",
  "Increased user engagement by 35% with AI-powered recommendation features.",
  "Improved frontend load times by 40% and scaled Rails APIs to support 5x more users with Redis caching.",
  "Reached 100% test coverage on critical user flows across 3 major releases (RSpec, Jest), cutting post-launch bugs by 60%.",
  "Resolved 30+ critical production issues and was recognized by leadership.",
  "Delivered 10+ full-stack projects for international freelance clients.",
];

const focusAreas = [
  {
    title: "Backend and APIs",
    text:
      "Secure REST APIs, authentication, caching and data models with Ruby on Rails, Node.js and Spring Boot, deployed on AWS with Terraform and Ansible.",
  },
  {
    title: "Generative AI and RAG",
    text:
      "Retrieval Augmented Generation, LLM integrations with LangChain and the OpenAI API, and AI-powered recommendation features inside real products.",
  },
  {
    title: "Full-stack product delivery",
    text:
      "React, Next.js and Vue.js frontends on top of those backends, from healthcare and marketplace platforms to client products in AI, logistics and Web3.",
  },
];

const skillGroups = [
  {
    title: "Backend",
    items: [
      "Ruby on Rails",
      "Node.js",
      "Express.js",
      "Spring Boot",
      "Flask",
      "Django",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    title: "Generative AI and Machine Learning",
    items: [
      "Large language models",
      "Retrieval Augmented Generation",
      "LangChain",
      "OpenAI API",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "OpenCV",
      "MobileNetV2",
      "Computer vision",
      "Streamlit",
    ],
  },
  {
    title: "Programming Languages",
    items: ["Ruby", "JavaScript (ES6+)", "TypeScript", "Python", "Java", "SQL"],
  },
  {
    title: "Databases and Caching",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Database design",
      "Relational data modeling",
      "Query optimization",
      "ERD",
    ],
  },
  {
    title: "Cloud and DevOps",
    items: [
      "AWS (EC2, S3)",
      "Docker",
      "Terraform",
      "Ansible",
      "CI/CD",
      "Git",
      "Infrastructure management",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Redux",
      "Vue.js",
      "Next.js",
      "Tailwind CSS",
      "Radix UI",
      "HTML5",
      "CSS3",
      "Single page applications",
      "Responsive UI",
      "Dashboard and interface design",
    ],
  },
  {
    title: "Testing and Quality",
    items: [
      "RSpec",
      "Jest",
      "Unit and integration testing",
      "Test automation",
      "Code reviews",
      "Debugging and root cause analysis",
      "Performance profiling",
    ],
  },
  {
    title: "Data",
    items: [
      "Exploratory data analysis",
      "Data pipelines",
      "Jupyter",
      "Plotly",
      "Dash",
      "Tableau",
      "Data cleaning and validation",
      "Statistical models (linear and logistic regression, KNN, decision trees)",
    ],
  },
  {
    title: "Security",
    items: [
      "OAuth 2.0",
      "JWT",
      "Role-based access control",
      "Secure API design",
      "Digital signatures and hashing",
    ],
  },
  {
    title: "Web3 and Blockchain",
    items: ["Ethereum", "Smart contracts", "Blockchain-based systems"],
  },
  {
    title: "Healthcare",
    items: [
      "FHIR interoperability standards",
      "Clinical data models",
      "Patient data security",
    ],
  },
  {
    title: "Methods",
    items: [
      "Requirements analysis",
      "Object-oriented design",
      "Technical documentation",
      "Flow and process diagrams",
    ],
  },
  {
    title: "Web Analytics",
    items: ["Google Analytics", "Facebook Pixel"],
  },
  {
    title: "Electronics",
    items: ["Digital Logic Design", "Computer Architecture and Organization"],
  },
  {
    title: "Soft Skills",
    items: [
      "Communication",
      "Problem solving",
      "Adaptability",
      "Leadership",
      "Teamwork",
      "Cross-functional collaboration",
      "Independent and structured working style",
    ],
  },
];

// Technologies shown with logos in the Skills section. Icons are mapped by
// name in src/components/TechIcon.
const coreStack = [
  "Ruby on Rails",
  "Node.js",
  "Spring Boot",
  "Python",
  "TypeScript",
  "Java",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "OpenAI API",
  "React",
  "Next.js",
  "Vue.js",
  "AWS",
  "Docker",
  "Terraform",
  "Ansible",
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
];

const spokenLanguages = [
  { name: "English", level: "Professional working" },
  { name: "Urdu", level: "Full professional" },
  { name: "Punjabi", level: "Native" },
  { name: "German", level: "Limited working" },
];

const experience = [
  {
    role: "Research Assistant",
    company: "Universität Koblenz",
    companyUrl: "https://www.uni-koblenz.de/en",
    logo: "uni-koblenz.png",
    start: "Sep 2025",
    end: "Present",
    location: "Koblenz, Germany",
    bullets: [
      "Contributing to the SoNBO (Social Network of Business Objects) project, an innovative approach to information integration for ERP systems.",
      "Supporting a data pipeline that connects multiple enterprise systems through adapters to an exploration layer, integrating business objects into a social network based knowledge graph for ERP data analysis and visualization.",
      "Building backend services with Spring Boot (Java) and frontend visualizations with Vue.js.",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Vue.js",
      "Knowledge graphs",
      "Data pipelines",
    ],
  },
  {
    role: "Full-Stack Developer (Freelance)",
    company: "Upwork",
    companyUrl: "https://www.upwork.com/",
    logo: "upwork.svg",
    start: "Aug 2024",
    end: "Jul 2025",
    location: "Remote",
    bullets: [
      "Delivered 10+ full-stack projects for international clients with Ruby on Rails, Node.js and React, from requirements gathering through deployment and ongoing support.",
      "Selected clients include 10XCoach (AI business coaching), Friendsy (AI voice agents), Nexmuv (moving logistics) and Chainbox (on-chain trading).",
      "Built AI-powered recommendation features that personalized content for end users, increasing user engagement by 35%.",
      "Set up CI/CD pipelines on AWS with Ansible, reducing deployment time by 75% and enabling zero-downtime releases.",
      "Improved frontend load times by 40% through React performance optimization, and scaled Rails APIs to support 5x more users with Redis caching.",
      "Built interactive dashboards with Python (Plotly, Dash) and Tableau, and trained scikit-learn models (linear regression, decision trees) to turn client datasets into actionable insights.",
    ],
    tech: [
      "Ruby on Rails",
      "Node.js",
      "React",
      "AWS",
      "Ansible",
      "Redis",
      "Python",
      "Plotly Dash",
      "Tableau",
      "Scikit-learn",
    ],
  },
  {
    role: "Software Engineer",
    company: "Veroke",
    companyUrl: "https://www.veroke.com/",
    logo: "veroke.png",
    start: "Apr 2023",
    end: "Aug 2024",
    location: "Islamabad, Pakistan",
    bullets: [
      "Built secure REST APIs with OAuth 2.0 and JWT authentication for a platform serving 5M+ registered users, including role-based access control for sensitive data.",
      "Improved API performance with Redis caching and optimized slow database queries, cutting average response times from ~600 ms to ~180 ms during peak traffic.",
      "Automated AWS infrastructure provisioning with Terraform and Ansible, reducing environment setup time by 65% (from ~3 hours to ~1 hour) and removing manual configuration errors.",
    ],
    tech: [
      "REST APIs",
      "OAuth 2.0",
      "JWT",
      "Redis",
      "AWS",
      "Terraform",
      "Ansible",
    ],
  },
  {
    role: "Software Developer",
    company: "Devsinc",
    companyUrl: "https://devsinc.com/",
    logo: "devsinc.jpeg",
    start: "Jul 2022",
    end: "Mar 2023",
    location: "Islamabad, Pakistan",
    bullets: [
      "Developed 3 scalable full-stack applications for US clients with Ruby on Rails and the MERN stack (MongoDB, Express, React, Node.js), from API design through deployment.",
      "Partnered with QA to reach 100% test coverage on critical user flows across 3 major releases with RSpec and Jest, cutting post-launch bugs by 60%.",
      "Recognized by leadership for resolving 30+ critical production issues through root-cause analysis, log investigation and performance debugging.",
    ],
    tech: [
      "Ruby on Rails",
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "RSpec",
      "Jest",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "PTCL",
    companyUrl: "https://ptcl.com.pk/",
    logo: "ptcl.png",
    start: "Jul 2021",
    end: "Sep 2021",
    location: "Islamabad, Pakistan",
    bullets: [
      "Completed a 3-month software engineering internship at Pakistan's largest telecom company after the third year at NUST.",
      "Gained hands-on experience with the software development lifecycle in a large enterprise environment, including requirements, code reviews and testing.",
      "Worked alongside engineering teams on internal tools and systems, learning how production software is built and maintained at scale.",
      "Strengthened teamwork, professional communication and work within structured development processes.",
    ],
    tech: ["SDLC", "Code reviews", "Testing"],
  },
];

// Project catalog, grouped so the page reads as one direction: full-stack
// work with a backend and generative AI focus. `label` names a single project
// of the group on its card and in the project list.
const projectGroups = [
  {
    id: "products",
    label: "Company project",
    title: "Company projects",
    description:
      "Platforms built as a software engineer in company roles, from Rails and Node.js backends to React frontends.",
  },
  {
    id: "genai",
    label: "Generative AI",
    title: "Generative AI and RAG",
    description:
      "Retrieval Augmented Generation and LLM applications, including the assistant on this site.",
  },
  {
    id: "client",
    label: "Client work",
    title: "Client work",
    description:
      "Production products delivered for international clients through Upwork.",
  },
  {
    id: "research",
    label: "Research",
    title: "Research",
    description:
      "Data integration and healthcare systems research at Universität Koblenz and NUST.",
  },
  {
    id: "labs",
    label: "Side project",
    title: "Side projects",
    description:
      "Smaller builds from coursework and self-study in machine learning, blockchain and web development.",
  },
];

// `featured` projects get a card at the top of the Projects section; the rest
// are listed below. `highlight` marks the projects the assistant leads with
// when asked what Ali has worked on. `url` is a live site, `repo` is source
// code. The page shows the short `summary` when there is one; the assistant
// uses the full description.
const projects = [
  {
    name: "Al-Tabeeb",
    featured: true,
    group: "products",
    type: "Healthcare platform",
    summary:
      "Tabib Group's healthcare platform in Saudi Arabia, connecting patients with doctors and clinics across web and mobile apps. Its Rails API still runs in production.",
    description:
      "A healthcare platform in Saudi Arabia (Tabib Group) that connects patients with doctors and clinics, including offers on clinic and care services, across web and mobile apps. Its Ruby on Rails API still serves the platform in production.",
    tags: ["Ruby on Rails", "REST API", "React"],
    url: "https://tabibgroup.net/",
    highlight: true,
  },
  {
    name: "Iwish",
    featured: true,
    group: "products",
    type: "Marketplace",
    summary:
      "A peer-to-peer marketplace where travellers fulfil wishes for items from abroad and get paid for it.",
    description:
      "A peer-to-peer marketplace for items from abroad: users post a wish for something they need from another country, and travellers fulfil the wish and get paid for it.",
    tags: ["Node.js", "React"],
    highlight: true,
  },
  {
    name: "Portfolio AI Assistant",
    featured: true,
    group: "genai",
    type: "RAG application",
    date: "2026",
    summary:
      "The assistant on this site: BM25 retrieval over the resume data, answered by an OpenAI model through a Cloudflare Worker.",
    description:
      "The assistant on this site. Questions are matched against a knowledge base built from the resume data with BM25 retrieval, then answered by an OpenAI model through a Cloudflare Worker, with a local fallback.",
    tags: ["RAG", "OpenAI API", "React", "Cloudflare Workers"],
    repo: "https://github.com/itzalihamza7/Portfolio",
  },
  {
    name: "RAG Chatbot for Technical Documentation",
    featured: true,
    group: "genai",
    type: "RAG application",
    date: "Mar 2025",
    summary:
      "A LangChain RAG chatbot that answers drivers' and operators' questions from car and machine manuals.",
    description:
      "A context-aware chatbot built with LangChain and a RAG architecture that links car and machine manuals to LLMs, giving drivers and operators grounded answers from the documentation.",
    tags: ["LangChain", "RAG", "LLMs", "Python"],
    repo: "https://github.com/itzalihamza7/Documentation-Chatbot",
  },
  {
    name: "GenAI YouTube Video Summarizer",
    group: "genai",
    type: "LLM application",
    date: "Feb 2025",
    description:
      "An AI-powered app built with the OpenAI API and Streamlit that generates customizable, multi-language video summaries.",
    tags: ["OpenAI API", "Streamlit", "Python"],
    repo: "https://github.com/itzalihamza7/Youtube-Summariser",
  },
  {
    name: "AI Demo Agent",
    group: "genai",
    type: "AI agent",
    description: "A demo agent built with the OpenAI API and Next.js.",
    tags: ["OpenAI API", "Next.js"],
    repo: "https://github.com/itzalihamza7/AI-demo-Agent",
  },
  {
    name: "10XCoach",
    featured: true,
    group: "client",
    type: "AI business coaching",
    summary:
      "An AI business coaching platform for U.S. entrepreneurs, running on a Node.js and Express API with JWT and Google sign-in.",
    description:
      "A U.S. AI-driven coaching platform that gives entrepreneurs and small businesses structured coaching in strategy, sales, marketing, finance and operations, combining AI coaches with scorecards, planning frameworks and accountability tools. Runs on a Node.js and Express API with JWT and Google sign-in.",
    tags: [
      "Node.js",
      "Express",
      "JWT",
      "Google OAuth",
      "React",
      "React Router",
      "Nginx",
    ],
    url: "https://10xcoach.ai/",
  },
  {
    name: "Friendsy",
    group: "client",
    type: "AI voice agents",
    summary:
      "A platform for building and scaling AI voice agents for phone support, with Next.js API routes and Paddle billing.",
    description:
      "A platform for building, deploying and scaling AI voice agents for phone-based customer support, integrating leading AI and speech providers to automate conversations around the clock, with Next.js API routes and Paddle billing.",
    tags: ["Next.js API routes", "Paddle", "React", "Next.js", "Tailwind CSS"],
    url: "https://friendsy.life/",
  },
  {
    name: "Nexmuv",
    featured: true,
    group: "client",
    type: "Moving and logistics",
    summary:
      "A U.S. moving platform with instant pricing and shipment tracking, built on Supabase Edge Functions, Tinybird and Mapbox.",
    description:
      "A U.S. platform connecting customers with vetted movers for residential, corporate and office relocations, with instant pricing, shipment tracking, packing services and financing. Built on Supabase with Edge Functions for user creation and device-tracking webhooks, Tinybird event analytics and Mapbox geocoding.",
    tags: [
      "Supabase",
      "PostgreSQL",
      "Edge Functions",
      "Tinybird",
      "Mapbox",
      "React",
      "React Router",
      "Tailwind CSS",
      "Radix UI",
    ],
    url: "https://nexmuv.com/",
  },
  {
    name: "Chainbox",
    group: "client",
    type: "On-chain trading",
    summary:
      "An on-chain trading platform for crypto and synthetic assets, serving Hyperliquid market data through Next.js API routes with Privy auth.",
    description:
      "A blockchain-based trading platform for crypto and synthetic assets on smart contract infrastructure, with tokenized asset exposure, on-chain custody and 24/7 trading. Market data, candles and trades are served through Next.js API routes on top of the Hyperliquid API, with Privy for wallet authentication.",
    tags: [
      "Next.js API routes",
      "Hyperliquid API",
      "Privy",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Mantine",
      "Radix UI",
    ],
    url: "https://chainbox.ai/",
  },
  {
    name: "SoNBO: Social Network of Business Objects",
    group: "research",
    type: "Universität Koblenz",
    date: "2025 – present",
    summary:
      "Integrates data from several ERP systems into an explorable knowledge graph, with Spring Boot services and Vue.js visualizations.",
    description:
      "An approach to integrating and analyzing ERP data: a pipeline connects enterprise systems through adapters into a social network based knowledge graph, with Spring Boot services and Vue.js visualizations for exploring it.",
    tags: ["Java", "Spring Boot", "Vue.js", "Knowledge graphs"],
  },
  {
    name: "FHIR-Enabled Blockchain-based Healthcare Information System",
    group: "research",
    type: "Final year project, NUST",
    date: "2022",
    summary:
      "A health information system that uses Ethereum and FHIR to keep patient records interoperable and secure.",
    description:
      "A health information system that uses Ethereum and FHIR standards to keep patient records interoperable and secure, with cryptographic signatures and hashing.",
    tags: ["Ethereum", "AngularJS", "Django", "FHIR"],
    repo: "https://github.com/itzalihamza7/Al-Tabeeb",
  },
  {
    name: "Face Mask Detection",
    group: "labs",
    date: "Dec 2024",
    description:
      "Real-time mask detection on images and video streams with MobileNetV2 and OpenCV.",
    tags: ["Python", "MobileNetV2", "OpenCV", "TensorFlow"],
    repo: "https://github.com/itzalihamza7/Face-mask-detection",
  },
  {
    name: "Heart Attack Prediction and Analysis",
    group: "labs",
    date: "Oct 2024",
    description:
      "Exploratory data analysis and Logistic Regression, KNN and Decision Tree models that predict heart attack risk from clinical data.",
    tags: ["Python", "Scikit-learn", "EDA"],
    repo: "https://github.com/itzalihamza7/Heart-Attack-Analysis",
  },
  {
    name: "E-commerce Store",
    group: "labs",
    description:
      "An online store to sell and buy products, with Stripe payments.",
    tags: ["Rails", "React", "Stripe"],
    repo: "https://github.com/itzalihamza7/Ecommerece",
  },
  {
    name: "NFT Staking App",
    group: "labs",
    description: "An app for staking NFTs.",
    tags: ["Ethereum", "React"],
    repo: "https://github.com/itzalihamza7/NFT-Staking-APP",
  },
  {
    name: "BlogApp",
    group: "labs",
    description: "A blogging platform with posts, editing, comments and likes.",
    tags: ["Rails", "Bootstrap"],
    repo: "https://github.com/itzalihamza7/BlogApp",
  },
  {
    name: "E-wallet",
    group: "labs",
    description: "An online wallet to send and receive money.",
    tags: ["Rails"],
    repo: "https://github.com/itzalihamza7/Ewallet",
  },
  {
    name: "Social Media Memories",
    group: "labs",
    description: "An app to store and share memories online.",
    tags: ["React", "JavaScript"],
    repo: "https://github.com/itzalihamza7/social-media-memories",
  },
];

const education = [
  {
    degree: "Master of Science, Web and Data Science",
    school: "Universität Koblenz",
    location: "Koblenz, Germany",
    logo: "uni-koblenz.png",
    url: "https://www.uni-koblenz.de/en",
    start: "Apr 2025",
    end: "Present",
    courses: [
      "Introduction to Web Science",
      "Engineering Web and Data-intensive Systems",
      "Advanced Topics in Web-based, Data-intensive Software and its Security",
      "Machine Learning",
      "Data Science",
      "Big Data",
      "Graph Theory",
      "Artificial Intelligence",
      "Recommender Systems",
    ],
  },
  {
    degree: "Bachelor of Science, Computer Science",
    school: "National University of Sciences and Technology (NUST)",
    location: "Islamabad, Pakistan",
    logo: "nust.png",
    url: "https://nust.edu.pk/",
    start: "Sep 2018",
    end: "Jul 2022",
    courses: [
      "Web Engineering",
      "Human Computer Interaction",
      "Object Oriented Programming",
      "Database Systems",
      "Advanced Programming",
      "Distributed Computing",
      "Mobile Application Development for SMEs",
      "Artificial Intelligence",
      "Data Structures and Algorithms",
      "Probability and Statistics",
      "Numerical Analysis",
      "Digital Logic Design",
      "Computer Architecture and Organization",
    ],
  },
  {
    degree: "Intermediate, Pre-Engineering",
    school: "Punjab Group of Colleges",
    location: "Pakistan",
    logo: "pgc.png",
    url: "https://pgc.edu/",
    start: "2016",
    end: "2018",
    courses: [],
  },
];

// Only certificates with a public verification link.
const certifications = [
  {
    name: "Software Engineer",
    issuer: "HackerRank",
    date: null,
    url: "https://www.hackerrank.com/certificates/29638dec854a",
  },
  {
    name: "Artificial Intelligence Essentials",
    issuer: "Coursera",
    date: null,
    url: "https://coursera.org/share/66f5fe574a82ea4d70bdc886274a3f3f",
  },
];

const volunteering = [
  {
    role: "IT and Management",
    organization: "HONET ICT Conference",
    location: "Islamabad, Pakistan",
    start: "Oct 2018",
    end: "Dec 2022",
  },
];

export {
  settings,
  profile,
  socialLinks,
  highlights,
  achievements,
  focusAreas,
  skillGroups,
  coreStack,
  spokenLanguages,
  experience,
  projectGroups,
  projects,
  education,
  certifications,
  volunteering,
};
