/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Ali",
  logo_name: "ali.hamza()",
  nickname: "ali",
  full_name: "Ali Hamza",
  subTitle:
    "Full Stack Developer, GEN AI and Data Science Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1Te5n9U9qKroEnyLnHM8iaya9jqHCWFVB/view?usp=sharing",
  mail: "alihamzaali44@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/itzalihamza7",
  linkedin: "https://www.linkedin.com/in/alihamza1234/",
  gmail: "alihamzaali44@gmail.com",
  gitlab: "https://gitlab.com/",
  facebook: "https://www.facebook.com/alihamzaali44?mibextid=ZbWKwL",
  twitter: "https://twitter.com/alihamzaftcr7?t=Ewgol7pvS27XgShzGr930A&s=09",
  instagram: "https://instagram.com/itz_alihamza7?igshid=NTE5MzUyOTU=",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Built and deployed 10+ interactive full-stack applications using MERN and Ruby on Rails, enhancing scalability and performance",
        "⚡ Designed responsive and high-performance front ends with React.js and HTML/CSS, improving load times by up to 40%",
        "⚡ Created and maintained secure REST APIs using Node.js, Express, and Rails with JWT/OAuth for 5M+ user systems",
        "⚡ Integrated AI features like personalized recommendations, boosting user engagement by 35% across projects",
        "⚡ Automated CI/CD pipelines using AWS, Ansible, and Terraform, reducing deployment and provisioning time by up to 75%",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        // {
        //   skillName: "PHP",
        //   fontAwesomeClassname: "simple-icons:php",
        //   style: {
        //     color: "#7377AD",
        //   },
        // },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        // {
        //   skillName: "Android",
        //   fontAwesomeClassname: "simple-icons:android",
        //   style: {
        //     color: "#3DDC84",
        //   },
        // },

        {
          skillName: "ROR",
          fontAwesomeClassname: "simple-icons:rubyonrails",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Ruby",
          fontAwesomeClassname: "simple-icons:ruby",
          style: {
            color: "#29B0EE",
          },
        },
        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        // {
        //   skillName: "Kali Linux",
        //   fontAwesomeClassname: "simple-icons:kalilinux",
        //   style: {
        //     color: "#207297",
        //   },
        // },
        {
          skillName: "Postgress",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Shopify",
          fontAwesomeClassname: "simple-icons:shopify",
          style: {
            color: "#96BF48",
          },
        },
        {
          skillName: "Big Commerce",
          fontAwesomeClassname: "simple-icons:bigcommerce",
          style: {
            color: "#00A3E0",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563D7C",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#38B2AC",
          },
        },
        //aws
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Ansible",
          fontAwesomeClassname: "simple-icons:ansible",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#2496ED",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF61F6",
          },
        },
        {
          skillName: "Canva",
          fontAwesomeClassname: "simple-icons:canva",
          style: {
            color: "#00C4CC",
          },
        },
        //nodejs
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#430098",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#00C4CC",
          },
        },
        //react
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#764ABC",
          },
        },
        {
          skillName: "Material UI",
          fontAwesomeClassname: "simple-icons:mui",
          style: {
            color: "#007FFF",
          },
        },
        
      ],
    },
    {
      title: "AI & ML and Data Science",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developed and deployed multiple AI/ML models using TensorFlow and PyTorch for real-world applications",
        "⚡ Built and fine-tuned Generative AI models for content creation and automation tasks",
        "⚡ Designed and implemented intelligent chatbots using NLP and transformer-based models (e.g., GPT, BERT)",
        "⚡ Delivered end-to-end Data Science projects including preprocessing, model training, and evaluation",
        "⚡ Performed advanced Data Analysis using Pandas, NumPy, and Scikit-learn on large-scale datasets",
        "⚡ Created interactive Data Visualizations with Matplotlib, Seaborn, and Plotly to drive insights",
        "⚡ Engineered AI-powered solutions to automate tasks and enhance decision-making in web applications",
        "⚡ Integrated AI capabilities into full-stack web apps, increasing personalization and efficiency by 30%+",
      ]
      ,
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "simple-icons:tensorflow",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Pytorch",
          fontAwesomeClassname: "simple-icons:pytorch",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            color: "#5b77ef",
          },
        },
        {
          skillName: "Scikit Learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "simple-icons:streamlit",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "ChatGpt",
          fontAwesomeClassname: "simple-icons:openai",
          style: {
            color: "#FFCA28",
          },
        },
        
        {
          skillName: "HuggingFace",
          fontAwesomeClassname: "simple-icons:huggingface",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Google Colab",
          fontAwesomeClassname: "simple-icons:googlecolab",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Jupyter Notebook",
          fontAwesomeClassname: "simple-icons:jupyter",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Anaconda",
          fontAwesomeClassname: "simple-icons:anaconda",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Plotly",
          fontAwesomeClassname: "simple-icons:plotly",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "simple-icons:matplotlib",
          style: {
            color: "#FFCA28",
          },
        },

      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Universität Koblenz",
      subtitle: "Masters in Web and Data Science",
      logo_path: "uni-koblenz.png",
      alt_name: "M.Sc. Web and Data Science",
      duration: "2025 - 2027",
      descriptions: [
        "⚡ Currently pursuing a Master's in Web and Data Science at the University of Koblenz with a focus on AI, machine learning, and modern web technologies",
        "⚡ Studying advanced topics including Data Mining, Web Analytics, Deep Learning, and Scalable Web Systems",
        "⚡ Actively working on academic and personal projects that integrate AI into full-stack applications",
        "⚡ Engaged in multicultural group projects and research activities, enhancing both technical and collaborative skills",
      ],
      website_link: "https://www.uni-koblenz.de/en",
    },
    {
      title: "National University of Sciences and technology(NUST)",
      subtitle: "Bachelor in Computer Science",
      logo_path: "nust.png",
      alt_name: "BSCS",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ Studied foundational computer science subjects including Data Structures, Algorithms, DBMS, Networking, and Cybersecurity",
        "⚡ Completed a range of online certifications in Backend, Web, and Mobile App Development to strengthen technical expertise",
        "⚡ Demonstrated strong hands-on skills and creativity through active participation in semester-long development projects",
        "⚡ Actively involved in university events and societies; led the NUST Football Team as captain and won multiple inter-university tournaments",
      ],
      website_link: "https://nust.edu.pk/",
    },
    {
      title: "Punjab Group of Colleges",
      subtitle: "FSC (Pre Eng)",
      logo_path: "pgc.png",
      alt_name: "FSC",
      duration: "2016 - 2018",
      descriptions: [
        "⚡ Gained a strong foundation in core engineering principles, which sparked a deep interest in computer science and technology",
        "⚡ Led the college athletics team and actively participated in various co-curricular activities, demonstrating leadership and teamwork skills",
      ],
      website_link: "https://pgc.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Hackathon",
      subtitle: "ACM Hackathon",
      logo_path: "hackathon1.svg",
      certificate_link:
        "https://drive.google.com/file/d/1HyR1A6lgQjvDeiIv0_LxolX_kzvFE_Q2/view?usp=share_link",
      alt_name: "hackathon",
      color_code: "#E2405F",
    },
    {
      title: "Cyber Security & Cyber Forensics",
      subtitle: "Workshop at NUST",
      logo_path: "iit.png",
      certificate_link:
        "https://drive.google.com/file/d/12auzjUKxrxPJFN9ZowaNzSYqNmO3y6Pt/view?usp=share_link",
      alt_name: "Workshop",
      color_code: "#2AAFED",
    },
    {
      title: "MLH Local Hack Day: Build",
      subtitle: "Major League Hacking",
      logo_path: "mlh-logo.svg",
      certificate_link:
        "https://drive.google.com/file/d/1HyR1A6lgQjvDeiIv0_LxolX_kzvFE_Q2/view?usp=share_link",
      alt_name: "Google",
      color_code: "#fe0037",
    },
    {
      title: "Hack20",
      subtitle: "Flutter International Hackathon",
      logo_path: "flutter.png",
      certificate_link:
        "https://drive.google.com/file/d/1G_6Gz0IEgX5OGxoHZJruxVJXUEx6Htr_/view?usp=share_link",
      alt_name: "Flutter International Hackathon",
      color_code: "#2AAFED",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have done Internships and jobs in field of computer science and have experience of an year. I have been a active freelancer and developed many projects for clients. I am looking forward to use my skills in this field.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [

        {
          title: "Full Stack Developer (Self Employeed)",
          company: "Upwork",
          company_url: "https://upwork.com/",
          logo_path: "upwork.svg",
          duration: "Jul 2024 - present",
          location: "Remote",
          description: `  
    • Developed 10+ full-stack applications for Upwork clients using Ruby on Rails, Node.js, and React.js.  
    • Integrated AI models (personalized recommendations) to increase user engagement by 35%.  
    • Built AWS CI/CD pipelines with Ansible, reducing deployment times by 75% with zero downtime.  
    • Optimized React performance (40% faster load times) and scaled Rails APIs (5x more users) via Redis.  
    • Engineered secure REST APIs with OAuth 2.0/JWT for high-traffic client projects.  
    • Collaborated with remote teams to implement AI features, boosting customer satisfaction by 30%.  
    • Delivered 5+ Shopify integrations for e-commerce clients on Upwork.  
    • Automated client reporting systems, saving 10+ hours/week on manual workflows.  
    • Tools: Ruby on Rails, React, Node.js, AWS, Ansible, Redis, PostgreSQL, Docker, AI APIs.  
`,
      

          color: "#0071C5",
        },
        
      
        {
          title: "Associate Software Developer",
          company: "Veroke",
          company_url: "https://www.veroke.com/",
          logo_path: "veroke.png",
          duration: "Jul 2023 - Aug 2024",
          location: "Islamabad, Pakistan",
          description: `
          • Engineered robust and scalable full-stack solutions using Ruby on Rails and React.js, empowering the company to lead innovation in a highly competitive SaaS market.
          • Led the development of a high-traffic healthcare platform (tabibgroup.net), serving over 1 million users, integrating complex features with seamless performance.
          • Optimized and enhanced production-grade code for third-party integrations including Shopify and BigCommerce, improving system efficiency and boosting overall revenue streams.
          • Designed and implemented interactive, responsive UI components using React.js and Bootstrap, improving user experience and retention by over 25%.
          • Built and secured RESTful APIs with OAuth 2.0 and JWT, safeguarding sensitive data and maintaining regulatory compliance across global markets.
          • Automated infrastructure deployments using Ansible and Terraform, reducing manual provisioning time by 65% while ensuring consistency across staging and production environments.
          • Conducted comprehensive load testing and performance tuning with Redis caching and PostgreSQL optimizations, allowing the system to scale for 1M+ concurrent users.
          • Collaborated closely with cross-functional QA teams, implementing automated testing pipelines and achieving 95%+ test coverage across major modules.
          • Partnered with US-based clients to deliver bespoke, high-impact solutions tailored to specific industry verticals, enhancing client satisfaction and long-term retention.
          • Mentored junior developers and interns, fostering a culture of knowledge sharing and continuous improvement within the engineering team.
          • Recognized for advanced debugging and analytics capabilities, solving mission-critical issues under tight deadlines and contributing to multiple successful product launches.
          `,

          color: "#0071C5",
        },
        {
          title: "Associate Software Developer",
          company: "Devsinc",
          company_url: "https://devsinc.com/",
          logo_path: "devsinc.jpeg",
          duration: "Jul 2022 - Jan 2023",
          location: "Islamabad, Pakistan",
          description: `  
    • Developed 3+ scalable full-stack applications for US clients using Ruby on Rails and MERN stack.  
    • Collaborated with QA teams to achieve 100% test coverage for 3 major releases, reducing post-launch bugs by 60%.  
    • Recognized by leadership for resolving 30+ critical production issues through debugging and system optimization.  
    • Contributed to production-level code for enterprise applications, ensuring high performance and scalability.  
    • Worked with React.js and Bootstrap to build responsive and user-friendly front-end interfaces.  
    • Assisted in integrating third-party APIs and services to enhance application functionality.  
    • Participated in Agile sprints, delivering features on time and meeting client requirements.  
    • Tools: Ruby on Rails, React.js, Node.js, MongoDB, PostgreSQL, Git, CI/CD, Bootstrap.  
`,
          color: "#0071C5",
        },
        {
          title: "Networks Engineer (Intern)",
          company: "PTCL",
          company_url: "https://ptcl.com.pk/",
          logo_path: "ptcl.png",
          duration: "JUN 2021 - AUG 2021",
          location: "Islamabad, Pakistan",
          description: `  
    • Monitored and maintained telecom network infrastructure serving 50,000+ subscribers, ensuring 99.9% uptime  
    • Developed Excel VBA network maintenance tool that automated 15+ manual processes, saving 20+ hours weekly  
    • Assisted in implementing critical security patches and firewall rules that reduced network vulnerabilities by 40%  
`,
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "GDG Student Volunteer",
          company: "Google Developer Groups",
          company_url: "https://gdg.community.dev/",
          logo_path: "gdg.png",
          duration: "Feb 2021 - Dec 2021",
          location: "Work From Home",
          description:
            "Google Developer Group Surat Student Volunteer and Member.",
          color: "#D83B01",
        },
        {
          title: "GitHub Student Developer",
          company: "GitHub",
          company_url: "https://github.com/",
          logo_path: "github.png",
          duration: "Nov 2019 - JUL 2020",
          location: "Work from Home",
          description:
            "Contribute to Open Source Community and Open Source Project.",
          color: "#040f26",
        },
        {
          title: "Google Local Guide",
          company: "Google Map",
          company_url: "https://maps.google.com/localguides/",
          logo_path: "localguide.png",
          duration: "Sep 2019 - JUN 2020",
          location: "Work From Home",
          description:
            "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS/Rails Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ali.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/alihamzaftcr7?t=Ewgol7pvS27XgShzGr930A&s=09",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Al-Tabeeb",
      url: "https://github.com/itzalihamza7/Al-Tabeeb",
      description:
        "A Decentralized online hospital management system where patients can securely get appointment from doctor and get the prescription after checkup.",
      languages: [
        {
          name: "Angularjs",
          iconifyClass: "logos-angular",
        },
        {
          name: "Django",
          iconifyClass: "logos-django",
        },
        {
          name: "Etherium",
          iconifyClass: "logos-ethereum",
        },
      ],
    },
    {
      id: "1",
      name: "UI Radiance",
      url: "https://github.com/itzalihamza7/UIRadiance",
      description: "An app to test the UI skills",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "13",
      name: "BlogApp",
      url: "https://github.com/itzalihamza7/BlogApp",
      description:
        "A website where we can share blogs, edit them, comment on them , like and many more features",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos-bootstrap",
        },
        {
          name: "Rails",
          iconifyClass: "logos-rails",
        },
      ],
    },
    {
      id: "2",
      name: "Ecommerece Store",
      url: "https://github.com/itzalihamza7/Ecommerece",
      description: "An Ecommerece store app to sell and buy products",
      languages: [
        {
          name: "Rails",
          iconifyClass: "logos-rails",
        },
        {
          name: "ReactJs",
          iconifyClass: "logos-react",
        },
        {
          name: "Stripe",
          iconifyClass: "logos-stripe",
        },
      ],
    },
    {
      id: "3",
      name: "Ewallet",
      url: "https://github.com/itzalihamza7/Ewallet",
      description:
        "An online wallet to where we can send and receive money from others",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Rails",
          iconifyClass: "logos-rails",
        },
      ],
    },
    {
      id: "4",
      name: "NFT Staking APP",
      url: "https://github.com/itzalihamza7/NFT-Staking-APP",
      description: "An app to stake the NFts",
      languages: [
        {
          name: "Etherium",
          iconifyClass: "logos-ethereum",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "4",
      name: "Social Media Memories",
      url: "https://github.com/itzalihamza7/social-media-memories",
      description: "An app to store the memories online",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos-bootstrap",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "4",
      name: "personal-portfolio",
      url: "https://github.com/itzalihamza7/Portfolio",
      description: "An app to show my portfolio",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "3",
      name: "BurgerApp",
      url: "https://github.com/itzalihamza7/BurgerApp",
      description: "App to test reactjs skills",
      languages: [
        {
          name: "react",
          iconifyClass: "logos-react",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
