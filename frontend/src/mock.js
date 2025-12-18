// Mock data for Avishek's Portfolio

export const personalInfo = {
  name: "Avishek Prasad",
  role: "Full Stack Software Developer",
  experience: "6+ years",
  bio: "As a Full Stack Software Developer with 6+ years of experience, I specialize in building scalable, high-performance web applications across the entire stack, from database integration to complex frontend architecture. My expertise lies in designing, developing, and maintaining applications using technologies like React, Redux-Saga, Next.js, and Node.js, focusing on optimizing application performance and creating highly user-friendly interfaces.",
  email: "avishek4jobs@gmail.com",
  github: "https://github.com/avishek4redacid",
  linkedin: "https://linkedin.com/in/avishek4redacid",
  location: "India",
  resumeUrl: "https://drive.google.com/file/d/1ff9G0hnqh0zPSjODQ2zm348szZAw8Jwv/view"
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
    { name: "Ruby on Rails", icon: "Zap", proficiency: 88 },
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
    // { name: "Docker", icon: "Container", proficiency: 85 },
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
    description: "BestWe is a technology company focused on improving workplace performance, wellbeing, and team alignment through AI-driven social and behavioral coaching. It combines artificial intelligence with behavioral science to help individuals and teams work better together and build healthier organizational dynamics.",
    technologies: ["React", "Redux-Saga", "Ruby on rails", "PostgreSQL", "Redis", "AWS", "CSS", "HTML"],
    highlights: [
      "Reduced page load time by 40% through code splitting and lazy loading",
      "Migrated React build system from CRA/Webpack to Vite, reducing cold start time from ~40–60 seconds to <2 seconds",
      "Reduced unnecessary re-renders and API over-fetching",
      "Developed scalable React and Redux-Saga architecture for an AI-powered engagement platform",
      "Implemented high-performance dashboards for survey insights and optimized data-fetching flows",
    ],
    role: "Senior Software Developer",
    duration: "2020 - 2025"
  },
  {
    id: 2,
    name: "Jio World Drive",
    company: "Reliance",
    website: "https://jioworlddrive.com",
    description: "Built an enterprise-level retail and entertainment destination platform with features including store navigation, event booking, dining reservations, and loyalty programs. Architected the frontend with micro-frontend approach for scalability.",
    technologies: ["Next.js", "TypeScript", "HTML", "CSS", "Wordpress"],
    highlights: [
      "Architected micro-frontend system serving 50+ brands",
      "Headless CMS Integration: Built a dynamic frontend driven by Headless CMS APIs, enabling real-time updates for luxury brand content",
      "Dynamic UI Rendering: Architected a system that dynamically generates page layouts (banners, grids, carousels) based on API payloads",
      "Utilized Next.js (SSR/ISR) to ensure fast load times and high SEO rankings for a content-heavy luxury portal",
    ],
    role: "Full Stack Developer",
    duration: "2021 - 2022"
  },
  {
    id: 3,
    name: "Zrupee",
    company: "Zrupee",
    website: "https://www.zrupee.co.in/",
    description: "Developed a fintech platform for digital payments and money transfers. Focused on security, transaction reliability, and seamless user experience. Implemented complex state management and real-time transaction tracking.",
    technologies: ["Node.js", "Angular", "Javascript", "MySQL", "HTML", "CSS"],
    highlights: [
      "Processed 10M+ transactions with 99.99% success rate",
      "Implemented end-to-end encryption for sensitive data",
      "Built dashboard with real-time analytics using WebSockets"
    ],
    role: "Software Developer",
    duration: "2018 - 2019"
  },
  {
    id: 4,
    name: "TeamNest",
    company: "TeamNest",
    website: "https://teamnest.com",
    description: "Teamnest is a comprehensive, cloud-based HRMS (Human Resource Management System) and Payroll automation platform. It is designed to digitize and streamline the entire employee lifecycle—from onboarding to exit—for businesses of all sizes.",
    technologies: ["Django", "MySQL", "Angular", "jQuery", "AWS S3", "HTML", "CSS"],
    highlights: [
      "Payroll & Attendance: Developed and maintained mission-critical modules for payroll processing, attendance tracking, and expense management.",
      "Hierarchical Dashboards: Built complex performance dashboards with multi-level nested metrics and smart accordion logic to streamline data visibility.",
    ],
    role: "Software Developer",
    duration: "2017 - 2018"
  }
];

export const experience = [
  {
    id: 1,
    title: "Senior Software Developer",
    company: "Bluesapling",
    location: "Bangalore, India",
    duration: "2019 - Currently working",
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
    company: "Hyrelabs",
    location: "Bangalore, India",
    duration: "2019 - 2019",
    description: "Developed enterprise-level features for retail and entertainment platform serving millions of users.",
    achievements: [
      "Built micro-frontend architecture from scratch",
      "Implemented CI/CD pipeline reducing deployment time by 70%",
    ]
  },
  {
    id: 3,
    title: "Software Developer",
    company: "Zrupee",
    location: "Mumbai, India",
    duration: "2018 - 2019",
    description: "Developed secure fintech platform handling millions in transactions with focus on reliability and security.",
    achievements: [
      "Implemented payment gateway integration",
      "Built real-time transaction monitoring system",
      "Achieved 99.99% uptime through robust error handling"
    ]
  },
  {
    id: 4,
    title: "Software Developer",
    company: "Yodaplus",
    location: "Mumbai, India",
    duration: "2017 - 2018",
    description: "Built collaborative platform features with focus on real-time communication and seamless user experience.",
    achievements: [
      "Developed real-time collaboration features",
      "Integrated third-party APIs and services",
      "Improved application performance by 40%"
    ]
  }
];
