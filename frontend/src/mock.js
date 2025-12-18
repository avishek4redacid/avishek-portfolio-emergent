// Mock data for Avishek's Portfolio

export const personalInfo = {
  name: "Avishek Prasad",
  role: "Full Stack Software Developer",
  experience: "6+ years",
  bio: "As a Full Stack Software Developer with 6+ years of experience, I specialize in building scalable, high-performance web applications across the entire stack, from database integration to complex frontend architecture. My expertise lies in designing, developing, and maintaining applications using technologies like React, Redux-Saga, Next.js, and Node.js, focusing on optimizing application performance and creating highly user-friendly interfaces.",
  email: "avishek@example.com",
  github: "https://github.com/avishek4redacidUser",
  linkedin: "https://linkedin.com/in/avishek4redacid",
  location: "India",
  resumeUrl: "https://customer-assets.emergentagent.com/job_talent-display-233/artifacts/uxbzrp0l_avishek_cv.pdf"
};

export const techStack = {
  frontend: [
    { name: "React", icon: "Component", proficiency: 95 },
    { name: "Next.js", icon: "Rocket", proficiency: 90 },
    { name: "Redux-Saga", icon: "Workflow", proficiency: 90 },
    { name: "TypeScript", icon: "Code2", proficiency: 85 },
    { name: "Tailwind CSS", icon: "Palette", proficiency: 92 },
    { name: "JavaScript (ES6+)", icon: "FileCode", proficiency: 95 }
  ],
  backend: [
    { name: "Node.js", icon: "Server", proficiency: 90 },
    { name: "Express.js", icon: "Zap", proficiency: 88 },
    { name: "REST APIs", icon: "Share2", proficiency: 92 },
    { name: "GraphQL", icon: "GitBranch", proficiency: 80 },
    { name: "FastAPI", icon: "Gauge", proficiency: 75 }
  ],
  database: [
    { name: "MongoDB", icon: "Database", proficiency: 88 },
    { name: "PostgreSQL", icon: "HardDrive", proficiency: 85 },
    { name: "Redis", icon: "Layers", proficiency: 80 },
    { name: "MySQL", icon: "CircleDot", proficiency: 82 }
  ],
  tools: [
    { name: "Git & GitHub", icon: "Github", proficiency: 95 },
    { name: "Docker", icon: "Container", proficiency: 85 },
    { name: "AWS", icon: "Cloud", proficiency: 80 },
    { name: "Webpack", icon: "Package", proficiency: 82 },
    { name: "Jest", icon: "TestTube", proficiency: 85 }
  ]
};

export const projects = [
  {
    id: 1,
    name: "BestWe",
    company: "BestWe",
    website: "https://bestwe.com",
    description: "Developed a comprehensive social commerce platform enabling users to discover, share, and purchase products. Implemented real-time chat features, payment gateway integration, and optimized the application for handling 100K+ concurrent users.",
    technologies: ["React", "Redux-Saga", "Node.js", "MongoDB", "Socket.io", "AWS"],
    highlights: [
      "Reduced page load time by 40% through code splitting and lazy loading",
      "Implemented real-time chat with WebSocket connections",
      "Integrated Razorpay payment gateway with 99.9% success rate"
    ],
    role: "Senior Full Stack Developer",
    duration: "2022 - 2024"
  },
  {
    id: 2,
    name: "Jio World Drive",
    company: "Reliance",
    website: "https://jioworlddrive.com",
    description: "Built an enterprise-level retail and entertainment destination platform with features including store navigation, event booking, dining reservations, and loyalty programs. Architected the frontend with micro-frontend approach for scalability.",
    technologies: ["Next.js", "TypeScript", "Redux", "Express.js", "PostgreSQL", "Docker"],
    highlights: [
      "Architected micro-frontend system serving 50+ brands",
      "Implemented advanced caching strategies reducing API calls by 60%",
      "Built real-time seat booking system with conflict resolution"
    ],
    role: "Full Stack Developer",
    duration: "2021 - 2022"
  },
  {
    id: 3,
    name: "Zrupee",
    company: "Zrupee",
    website: "https://zrupee.com",
    description: "Developed a fintech platform for digital payments and money transfers. Focused on security, transaction reliability, and seamless user experience. Implemented complex state management and real-time transaction tracking.",
    technologies: ["React", "Redux-Saga", "Node.js", "MySQL", "Redis", "Stripe API"],
    highlights: [
      "Processed 10M+ transactions with 99.99% success rate",
      "Implemented end-to-end encryption for sensitive data",
      "Built dashboard with real-time analytics using WebSockets"
    ],
    role: "Full Stack Developer",
    duration: "2020 - 2021"
  },
  {
    id: 4,
    name: "TeamNest",
    company: "TeamNest",
    website: "https://teamnest.com",
    description: "Created a collaborative project management and team communication platform. Implemented features like task management, file sharing, video conferencing integration, and team analytics with beautiful, intuitive UI.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "AWS S3", "WebRTC"],
    highlights: [
      "Built drag-and-drop task board with React DnD",
      "Integrated video conferencing with WebRTC",
      "Optimized file upload system supporting files up to 500MB"
    ],
    role: "Full Stack Developer",
    duration: "2019 - 2020"
  }
];

export const experience = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "BestWe",
    location: "Remote",
    duration: "2022 - 2024",
    description: "Led the development of core platform features, mentored junior developers, and optimized application performance for scale.",
    achievements: [
      "Architected and implemented microservices architecture",
      "Reduced application bundle size by 45%",
      "Mentored team of 5 junior developers"
    ]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Reliance (Jio World Drive)",
    location: "Mumbai, India",
    duration: "2021 - 2022",
    description: "Developed enterprise-level features for retail and entertainment platform serving millions of users.",
    achievements: [
      "Built micro-frontend architecture from scratch",
      "Implemented CI/CD pipeline reducing deployment time by 70%",
      "Optimized database queries improving response time by 50%"
    ]
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Zrupee",
    location: "Bangalore, India",
    duration: "2020 - 2021",
    description: "Developed secure fintech platform handling millions in transactions with focus on reliability and security.",
    achievements: [
      "Implemented payment gateway integration",
      "Built real-time transaction monitoring system",
      "Achieved 99.99% uptime through robust error handling"
    ]
  },
  {
    id: 4,
    title: "Full Stack Developer",
    company: "TeamNest",
    location: "Remote",
    duration: "2019 - 2020",
    description: "Built collaborative platform features with focus on real-time communication and seamless user experience.",
    achievements: [
      "Developed real-time collaboration features",
      "Integrated third-party APIs and services",
      "Improved application performance by 40%"
    ]
  }
];
