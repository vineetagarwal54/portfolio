// import meta from "../assets/company/meta.png";
import svipes_logo from "../assets/svipes_logo.jpg";
import xelp_logo from "../assets/xelp_logo.jpg";
import iith from "../assets/iith.jpg";
import umd_logo from "../assets/umd_logo.png"
import ou_logo from "../assets/ou_logo.png"
import ActivityLogger from "../assets/ActivityLogger.jpg"
import MeetSpace from "../assets/MeetSpace.png"
import collabDraw from "../assets/collabDraw.png"
import aIChatbot from "../assets/aIChatbot.png"
import suntek_corp from "../assets/suntek_corp.jpg"
import reportGen from "../assets/reportGen.png"
import terrapinEvents from "../assets/terrapinEvents.png"
import videoAnalytics from "../assets/videoAnalytics.png"
// import { title } from "framer-motion/client";

export const HERO_CONTENT = `I build full-stack products and AI systems that are fast, reliable, and practical.
From frontend interfaces and backend APIs to cloud infrastructure, agent workflows, and real-time systems, I enjoy taking products from idea to production.
My work spans React, React Native, FastAPI, Node.js, AWS, RAG pipelines, multi-agent workflows, and performance-focused engineering.`;

export const experiences = [
  {
    title: "Software Developer",
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
    title: "Summer Software Intern",
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
  {
    title:"Academic Mentor (Data Structures & OOP)",
    company_name: "Suntek Organization",
    icon: suntek_corp,
    // iconBg: "#383E56",
    date: "2021 - 2022",
    website: "https://www.linkedin.com/company/suntek-corp-solutions-pvt-ltd/?originalSubdomain=at",
    points: [
      "Provided one-on-one mentorship to 15+ undergraduate students in Data Structures and Object-Oriented Programming (OOP) concepts, enhancing their understanding and application skills",
"Helped students understand tricky concepts like recursion, trees, graphs, hashing, and time-complexity tradeoffs",
      "Conducted weekly coding workshops and problem-solving sessions, fostering a collaborative learning environment and encouraging peer-to-peer knowledge sharing",    ],
  }
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
  "Minor in Cloud Engineering with coursework in Cloud Computing, Virtualization, and Cloud Security",
  "Hands-on experience with Docker, Kubernetes, and cloud-native system design",
  "Focused on scalable software architecture, backend systems, and performance-oriented engineering",
  "Interested in applied AI systems, production infrastructure, and modern developer workflows",
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
    name: "AI Repository Analyzer",
    description:
      "Multi-agent code analysis platform that accepts GitHub repositories or ZIP files and returns architecture insights, API understanding, database analysis, and context-aware Q&A. Built with FastAPI, LangChain, AutoGen, FAISS, Streamlit, and OpenAI.",
    tags: [
      { name: "AutoGen", color: "text-purple-600" },
      { name: "LangChain", color: "text-teal-600" },
      { name: "FAISS", color: "text-blue-600" },
    ],
    categories: ["AI", "Backend", "Full Stack"],
    featured: true,
    image: reportGen,
    source_code_link: "https://github.com/vineetagarwal54/RepoResearchAI",
  },
  {
    name: "Plywood Studio AI Chatbot",
    description:
      "AI-powered customer support chatbot with business-specific knowledge, fallback model support, Redis caching, and a production-style conversational interface. Built with FastAPI, OpenAI, Hugging Face, and a hybrid inference workflow.",
    tags: [
      { name: "FastAPI", color: "text-blue-700" },
      { name: "OpenAI", color: "text-green-600" },
      { name: "Redis", color: "text-pink-600" },
    ],
    categories: ["AI", "Backend", "Full Stack"],
    featured: true,
    image: aIChatbot,
    source_code_link: "https://github.com/vineetagarwal54/AIChatbot",
  },
  {
    name: "Terrapin Events - Campus Event Management",
    description:
      "Full-stack campus event platform with React, FastAPI, MongoDB, CAS SSO, JWT RBAC, payments, and waitlist automation. Deployed with Kubernetes and built in an agile team setup with CI/CD and reliability-focused testing.",
    tags: [
      { name: "React", color: "text-blue-600" },
      { name: "FastAPI", color: "text-green-600" },
      { name: "MongoDB", color: "text-orange-600" },
    ],
    categories: ["Full Stack", "Frontend", "Backend", "Cloud"],
    featured: true,
    image: terrapinEvents,
    source_code_link:
      "https://github.com/bhavnakumari/enpm613-team4-terrapin-events",
  },
  {
    name: "AWS Video Analytics Streaming Platform",
    description:
      "Cloud-native analytics platform using Lambda, EKS, S3, DynamoDB, API Gateway, AppSync, CloudFormation, and CI/CD. Designed around serverless processing, containerized services, and auto-scaling architecture on AWS.",
    tags: [
      { name: "AWS Lambda", color: "text-orange-500" },
      { name: "EKS", color: "text-blue-600" },
      { name: "CloudFormation", color: "text-purple-600" },
    ],
    categories: ["Cloud", "Backend", "Full Stack"],
    featured: true,
    image: videoAnalytics,
    source_code_link:
      "https://github.com/Divyesh4683/AWS-Video-Analytics-Streaming-Dashboard",
  },
  {
    name: "CollabDraw",
    description:
      "Real-time collaborative whiteboard with room-based sessions, live drawing updates, WebSocket communication, PostgreSQL, Prisma, and a structured monorepo setup. A strong example of frontend + backend coordination in real-time systems.",
    tags: [
      { name: "Next.js", color: "text-blue-700" },
      { name: "TypeScript", color: "text-green-600" },
      { name: "WebSocket", color: "text-pink-600" },
    ],
    categories: ["Frontend", "Backend", "Full Stack", "Real-Time"],
    featured: false,
    image: collabDraw,
    source_code_link: "https://github.com/vineetagarwal54/CollabDrawAI",
  },
  {
    name: "Activity Logger",
    description:
      "Cross-platform mobile application built with React Native, Node.js, and SQL for activity tracking and analytics. Useful as mobile proof, but positioned here as part of a broader full-stack engineering profile rather than the main headline.",
    tags: [
      { name: "React Native", color: "text-blue-700" },
      { name: "Node.js", color: "text-green-600" },
      { name: "SQL", color: "text-pink-600" },
    ],
    categories: ["Mobile", "Full Stack", "Backend"],
    featured: false,
    image: ActivityLogger,
    source_code_link: "https://github.com/vineetagarwal54/ActivityLogger",
  },
  {
    name: "MeetSpace",
    description:
      "Real-time video conferencing application with React, TypeScript, Node.js, Express, WebRTC, chat, screen sharing, and dynamic participant layouts. Strong proof of real-time systems, frontend interaction, and backend coordination.",
    tags: [
      { name: "React", color: "text-blue-700" },
      { name: "WebRTC", color: "text-green-600" },
      { name: "TypeScript", color: "text-pink-600" },
    ],
    categories: ["Frontend", "Backend", "Full Stack", "Real-Time"],
    featured: false,
    image: MeetSpace,
    source_code_link: "https://github.com/vineetagarwal54/MeetSpace",
  },
];
