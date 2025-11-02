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

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Svipes",
    icon: svipes_logo,
    iconBg: "#383E56",
    date: "July 2024 - December 2024",
    website: "https://svipes.com/",
    points: [
      "Led development of a social media app handling 10K+ daily active users with complex real-time features",
      "Engineered a modular component library of 40+ reusable UI components, reducing development time by 45%",
      "Optimized app load time from 4.2s to 1.8s through code splitting and lazy loading strategies",
      "Implemented real-time notifications system processing 100K+ daily events with <100ms latency",
      "Reduced app bundle size by 60% and improved client-side performance by 40% through state management optimization",
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
      "Architected and deployed blockchain wallet app processing $2M+ in monthly transactions with zero security incidents",
      "Built community management platform serving 50+ residential societies with 15K+ active users",
      "Developed video interview platform scaling to 100+ concurrent sessions with 99.9% uptime",
      "Optimized database queries reducing API latency by 86% (75s to <10s) and increasing throughput by 400%",
      "Led adoption of automated testing, achieving 90% code coverage and reducing production bugs by 65%",
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
      "Developed automated data extraction pipeline processing 1000+ multilingual Wikipedia articles daily",
      "Created custom NLP models achieving 85% accuracy in regional language emotion classification",
      "Reduced manual data processing time by 90% through intelligent automation scripts",
      "Contributed to research paper accepted at international NLP conference with 92% positive reviewer feedback",
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
      "Minor in Cloud Security covering AWS, Azure, and GCP security best practices",
      "Hands-on experience with containerization, microservices, and serverless architectures",
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


export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
