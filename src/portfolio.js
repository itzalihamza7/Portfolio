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
  headline: "Full-Stack Software Engineer",
  tagline: "MSc Student in Web and Data Science",
  location: "Koblenz, Germany",
  email: "alihamzaali44@gmail.com",
  website: "https://www.alihamza.co",
  photo: "ali.jpg",
  resumeLink:
    "https://drive.google.com/file/d/1Te5n9U9qKroEnyLnHM8iaya9jqHCWFVB/view?usp=sharing",
  intro:
    "I build web products end to end, from APIs and databases to the interfaces people actually use, and I bring data and AI into them.",
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
    title: "Full-stack web products",
    text:
      "REST APIs, databases and interfaces with Ruby on Rails, Node.js, React and Vue.js, built to be fast, secure and easy to deploy.",
  },
  {
    title: "Data and AI",
    text:
      "Retrieval Augmented Generation, LLM applications, recommendation features, machine learning models and interactive dashboards.",
  },
  {
    title: "Enterprise and healthcare data",
    text:
      "Knowledge graphs over ERP data at Universität Koblenz, and FHIR interoperability with secure patient records.",
  },
];

const skillGroups = [
  {
    title: "Programming Languages",
    items: ["Ruby", "JavaScript (ES6+)", "TypeScript", "Python", "Java", "SQL"],
  },
  {
    title: "Backend",
    items: [
      "Ruby on Rails",
      "Node.js",
      "Express.js",
      "Spring Boot",
      "Flask",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Redux",
      "Vue.js",
      "HTML5",
      "CSS3",
      "Single page applications",
      "Responsive UI",
      "Dashboard and interface design",
    ],
  },
  {
    title: "AI and Machine Learning",
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
    title: "Web Analytics",
    items: ["Google Analytics", "Facebook Pixel"],
  },
  {
    title: "Electronics",
    items: ["Digital Logic Design", "Computer Architecture and Organization"],
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
  "React",
  "Vue.js",
  "TypeScript",
  "Python",
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "AWS",
  "Docker",
  "Terraform",
  "Ansible",
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
  "OpenAI API",
  "Jest",
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

const projects = [
  {
    name: "RAG Chatbot for Technical Documentation",
    category: "AI Application",
    date: "Mar 2025",
    description:
      "A context-aware chatbot built with LangChain and a RAG architecture that links car and machine manuals to LLMs, giving drivers and operators grounded answers from the documentation.",
    tags: ["LangChain", "RAG", "LLMs", "Python"],
    url: "https://github.com/itzalihamza7/Documentation-Chatbot",
  },
  {
    name: "GenAI YouTube Video Summarizer",
    category: "AI Application",
    date: "Feb 2025",
    description:
      "An AI-powered app built with the OpenAI API and Streamlit that generates customizable, multi-language video summaries.",
    tags: ["OpenAI API", "Streamlit", "Python"],
    url: "https://github.com/itzalihamza7/Youtube-Summariser",
  },
  {
    name: "Face Mask Detection",
    category: "Computer Vision",
    date: "Dec 2024",
    description:
      "A deep learning system for real-time predictions on images and video streams with MobileNetV2 and OpenCV, including data preparation, training and validation of detection accuracy.",
    tags: ["MobileNetV2", "OpenCV", "TensorFlow", "Python"],
    url: "https://github.com/itzalihamza7/Face-mask-detection",
  },
  {
    name: "Heart Attack Prediction and Analysis",
    category: "Data Analysis",
    date: "Oct 2024",
    description:
      "Exploratory data analysis and machine learning models (Logistic Regression, KNN, Decision Tree) that predict heart attack risk from clinical data features.",
    tags: ["Python", "Scikit-learn", "EDA", "Jupyter"],
    url: "https://github.com/itzalihamza7/Heart-Attack-Analysis",
  },
  {
    name: "FHIR-Enabled Blockchain-based Healthcare Information System",
    category: "Bachelor Final Year Project",
    date: "2022",
    description:
      "A health information system built with Ethereum, the MERN stack (Express.js, React, Node.js, MongoDB) and FHIR standards to ensure interoperability and security of patient records, using cryptographic signatures and hashing.",
    tags: ["Ethereum", "FHIR", "MERN", "Cryptography"],
    url: null,
  },
  {
    name: "Personal Portfolio with AI Assistant",
    category: "Web Application",
    date: "2026",
    description:
      "This website. A React portfolio with a built-in RAG assistant: questions are matched against a knowledge base built from the resume data and answered by an OpenAI model through a Cloudflare Worker.",
    tags: ["React", "RAG", "OpenAI API", "Cloudflare Workers"],
    url: "https://github.com/itzalihamza7/Portfolio",
  },
];

// Smaller repositories listed under "More on GitHub".
const moreProjects = [
  {
    name: "AI Demo Agent",
    description: "A demo agent built with the OpenAI API and Next.js.",
    tags: ["Next.js", "OpenAI API"],
    url: "https://github.com/itzalihamza7/AI-demo-Agent",
  },
  {
    name: "Al-Tabeeb",
    description:
      "A decentralized hospital management system for booking appointments and receiving prescriptions.",
    tags: ["Angular", "Django", "Ethereum"],
    url: "https://github.com/itzalihamza7/Al-Tabeeb",
  },
  {
    name: "E-commerce Store",
    description:
      "An online store to sell and buy products, with Stripe payments.",
    tags: ["Rails", "React", "Stripe"],
    url: "https://github.com/itzalihamza7/Ecommerece",
  },
  {
    name: "NFT Staking App",
    description: "An app for staking NFTs.",
    tags: ["Ethereum", "React"],
    url: "https://github.com/itzalihamza7/NFT-Staking-APP",
  },
  {
    name: "BlogApp",
    description: "A blogging platform with posts, editing, comments and likes.",
    tags: ["Rails", "Bootstrap"],
    url: "https://github.com/itzalihamza7/BlogApp",
  },
  {
    name: "E-wallet",
    description: "An online wallet to send and receive money.",
    tags: ["Rails"],
    url: "https://github.com/itzalihamza7/Ewallet",
  },
  {
    name: "Social Media Memories",
    description: "An app to store and share memories online.",
    tags: ["React", "JavaScript"],
    url: "https://github.com/itzalihamza7/social-media-memories",
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

const certifications = [
  { name: "Software Engineer", issuer: "HackerRank", date: null, url: null },
  { name: "Frontend Developer", issuer: null, date: null, url: null },
  {
    name: "Artificial Intelligence Essentials",
    issuer: "Coursera",
    date: null,
    url: null,
  },
  {
    name: "Introduction to Generative AI Learning Path",
    issuer: "Google Cloud",
    date: "02/2024 – 05/2025",
    url: null,
  },
  {
    name: "MERN Stack Front to Back",
    issuer: "Coursera",
    date: "10/2022 – 12/2022",
    url: null,
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
  projects,
  moreProjects,
  education,
  certifications,
  volunteering,
};
