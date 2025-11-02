import meta from "../assets/company/meta.png";
import svipes_logo from "../assets/svipes_logo.jpg";
import xelp_logo from "../assets/xelp_logo.jpg";
import iith from "../assets/iith.jpg";
import umd_logo from "../assets/umd_logo.png"
import ou_logo from "../assets/ou_logo.png"
import ActivityLogger from "../assets/ActivityLogger.jpg"
import MeetSpace from "../assets/MeetSpace.png"
import collabDraw from "../assets/collabDraw.png"
import aIChatbot from "../assets/aIChatbot.png"

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Svipes",
    icon: svipes_logo,
    iconBg: "#383E56",
    date: "July 2024 - December 2024",
    website: "https://svipes.com/",
    points: [
      "Architected and developed a comprehensive social media platform featuring 50+ interactive screens using React Native and Redux Toolkit",
      "Achieved significant performance improvements of 30% through advanced state optimization and asynchronous rendering techniques",
      "Designed and implemented scalable UI component library based on Figma specifications, enhancing code maintainability and development efficiency",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Xelpmoc",
    icon: xelp_logo,
    iconBg: "#fff",
    date: "November 2022 - April 2024",
    website: "https://www.xelpmoc.in/",
    points: [
      "Developed comprehensive blockchain wallet application with 30+ responsive screens across iOS and Android platforms, seamlessly integrating 15+ blockchain webhooks for real-time data synchronization",
      "Created dual mobile applications for senior care community management, serving 50+ residents and 20+ staff members while improving operational coordination and efficiency by 35%",
      "Led architecture and development of tourism services platform using React and React Native, resulting in 40% bug reduction and 25% improvement in development velocity",
      "Built scalable interview management system leveraging WebRTC and WebSocket technologies, successfully handling 100+ concurrent video sessions with sub-200ms latency",
      "Implemented advanced database optimization strategies including query restructuring and intelligent caching, achieving 86% latency reduction (75s to <10s) and 4x API throughput improvement",
    ],
  },
  {
    title: "Summer Internship",
    company_name: "IIIT Hyderabad",
    icon: iith,
    iconBg: "#fff",
    date: "June 2022 - August 2022",
    website: "https://indicwiki.iiit.ac.in/",
    points: [
      "Engineered automated multilingual data extraction pipeline using Python and Selenium, processing extensive Wikipedia datasets for regional language contributions",
      "Developed and fine-tuned custom NLP models for emotion classification in regional languages, achieving high accuracy rates through collaborative research efforts",
      "Streamlined data processing workflows by implementing intelligent automation scripts, significantly reducing manual intervention requirements",
      "Contributed to academic research initiatives that resulted in publication acceptance at prestigious international NLP conferences",
    ],
  },
];

export const education = [
  {
    company_name: "University of Maryland, College Park",
    title: "Master of Engineering, Computer Software Engineering",
    icon: umd_logo,
    iconBg: "#383E56",
    date: "January 2025 - December 2026",
    website: "https://umd.edu/",
    points: [
      "Minor in Cloud Security covering AWS, Azure, and GCP security best practices with hands-on certification preparation",
      "Extensive experience with containerization using Docker and Kubernetes, microservices architecture patterns",
      "Advanced studies in DevOps practices, CI/CD pipelines, and Infrastructure as Code (IaC) using Terraform",
      "Research focus on scalable system design, performance optimization, and enterprise software development",
    ],
  },
   {
    company_name: "Osmania University",
    title: "Bachelor of Engineering, Computer Science",
    icon: ou_logo,
    iconBg: "#383E56",
    date: "January 2019 - December 2023",
    website: "https://www.osmania.ac.in/",
    points: [
      "Strong foundation in computer science fundamentals: Data Structures, Algorithms, and System Design",
      "In-depth study of Operating Systems, Computer Networks, and Database Management Systems",
      "Advanced programming concepts including OOP, Design Patterns, and Software Architecture",
    ],
  },
];

export const projects = [
  {
    name: "Plywood Studio AI Chatbot",
    description:
      "A modern AI-powered chatbot for Plywood Studio - a premium plywood, doors, and laminate solution provider in Hyderabad. Features instant 24/7 AI-powered customer support with specialized business knowledge, ChatGPT-style interface, and hybrid intelligence that works with or without internet APIs. Built with FastAPI backend, Hugging Face + OpenAI APIs with fallback system, Redis caching, and modern responsive design.",
    tags: [
      {
        name: "FastAPI",
        color: "text-blue-700",
      },
      {
        name: "OpenAI",
        color: "text-green-600",
      },
      {
        name: "Redis",
        color: "text-pink-600",
      },
    ],
    image: aIChatbot,
    source_code_link: "https://github.com/vineetagarwal54/AIChatbot",
  },
  {
    name: "CollabDraw",
    description:
      "A modern, real-time collaborative whiteboard application built with cutting-edge web technologies. Multiple users can draw simultaneously with live updates, featuring room-based sessions, customizable drawing tools (pencil, rectangle, circle, eraser), color picker, and beautiful glass morphism UI. Built with Next.js 15, TypeScript, WebSocket, PostgreSQL, and Prisma ORM in a monorepo structure.",
    tags: [
      {
        name: "Next.js",
        color: "text-blue-700",
      },
      {
        name: "TypeScript",
        color: "text-green-600",
      },
      {
        name: "WebSocket",
        color: "text-pink-600",
      },
    ],
    image: collabDraw,
    source_code_link: "https://github.com/vineetagarwal54/CollabDrawAI",
  },
  {
    name: "Activity Logger",
    description:
      "A comprehensive activity tracking solution with cross-platform compatibility and robust data analytics capabilities. Built as a full-stack application using React Native for mobile, Node.js for backend APIs, and SQL database for data persistence. Features real-time activity monitoring, detailed analytics dashboard, and seamless user experience across platforms.",
    tags: [
      {
        name: "React Native",
        color: "text-blue-700",
      },
      {
        name: "Node.js",
        color: "text-green-600",
      },
      {
        name: "SQL",
        color: "text-pink-600",
      },
    ],
    image: ActivityLogger,
    source_code_link: "https://github.com/vineetagarwal54/ActivityLogger",
  },
  {
    name: "MeetSpace",
    description:
      "A modern, real-time video conferencing application that enables seamless communication through high-quality video calls, screen sharing, and instant messaging. Features support for multiple participants, recording with pause/resume functionality, real-time chat, dark theme UI, and dynamic grid layout. Built with React, TypeScript, Tailwind CSS, Node.js, Express, and WebRTC for reliable peer-to-peer communication.",
    tags: [
      {
        name: "React",
        color: "text-blue-700",
      },
      {
        name: "WebRTC",
        color: "text-green-600",
      },
      {
        name: "TypeScript",
        color: "text-pink-600",
      },
    ],
    image: MeetSpace,
    source_code_link: "https://github.com/vineetagarwal54/MeetSpace",
  }
];
