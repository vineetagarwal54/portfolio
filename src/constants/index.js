import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import starbucks from "../assets/company/meta.png";
import shopify from "../assets/company/meta.png";
import tesla from "../assets/company/meta.png";
import meta from "../assets/company/meta.png";
import svipes_logo from "../assets/svipes_logo.jpg";
import xelp_logo from "../assets/xelp_logo.jpg";
import iith from "../assets/iith.jpg";
import umd_logo from "../assets/umd_logo.png"
import ou_logo from "../assets/ou_logo.png"
import ActivityLogger from "../assets/ActivityLogger.jpg"
import mpTourism from "../assets/mpTourism.png"


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Svipes",
    icon: svipes_logo,
    iconBg: "#383E56",
    date: "July 2024 - December 2024",
    points: [
      "Problem: Need for a scalable and performant social media app with complex UI requirements.",
      "Solution: Developed cross-platform app using React Native and Redux Toolkit with 50+ interactive screens and reusable UI components from Figma designs.",
      "Impact: Enhanced app performance by 30% through state optimization and asynchronous rendering strategies while improving code maintainability and scalability.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Xelpmoc",
    icon: xelp_logo,
    iconBg: "#fff",
    date: "November 2022 - April 2024",
    points: [
      "Problem: Multiple complex projects requiring scalable solutions - blockchain wallet, community apps, and video interview platform.",
      "Solution: Built GreenLight Credentials Wallet App with 30+ screens and 15+ blockchain webhooks; developed community apps for 50+ residents; engineered interview platform supporting 100+ concurrent video sessions.",
      "Impact: Cut bugs by 40%, improved development speed by 25%, and optimized SQL query latency by 86% (75s to <10s) with 4x API throughput improvement.",
    ],
  },
  {
    title: "Summer Internship",
    company_name: "IIIT Hyderabad",
    icon: iith,
    iconBg: "#fff",
    date: "June 2022 - August 2022",
    points: [
      "Problem: Need for efficient multilingual data extraction and processing for regional-language Wikipedia contributions.",
      "Solution: Automated data extraction using Python and Selenium for curating multilingual datasets.",
      "Impact: Successfully processed and cleaned 100+ articles, enhancing NLP-based emotion classification accuracy through collaboration with researchers.",
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
    points: [
      "Minor in Cloud Engineering, focusing on advanced software development and cloud computing concepts.",
      "Relevant coursework: Software Design, Cloud Computing, Virtualization, Cloud Security.",
      "Gaining hands-on experience with modern software architecture and cloud-native development practices.",
    ],
  },
   {
    company_name: "Osmania University",
    title: "Bachelor of Engineering, Computer Science",
    icon: ou_logo,
    iconBg: "#383E56",
    date: "January 2019 - December 2023",
    points: [
      "Minor in Cloud Engineering, focusing on advanced software development and cloud computing concepts.",
      "Relevant coursework: Software Design, Cloud Computing, Virtualization, Cloud Security.",
      "Gaining hands-on experience with modern software architecture and cloud-native development practices.",
    ],
  },
];

export const projects = [
  {
    name: "AI Chatbot for Plywood Business",
    description:
      "Problem: Need for efficient automation of product information queries in the plywood business.\n\nSolution: Built an internal assistant using LangChain, OpenAI, and FAISS with focus on data ingestion, embedding, vector store, and prompt design.\n\nImpact: Successfully automated product information retrieval, improving response time and accuracy for business queries.",
    tags: [
      {
        name: "LangChain",
        color: "text-blue-700",
      },
      {
        name: "OpenAI",
        color: "text-green-600",
      },
      {
        name: "FAISS",
        color: "text-pink-600",
      },
    ],
    image: meta,
    source_code_link: "https://github.com/vineetagarwal54",
  },
  {
    name: "CollabDrawAI",
    description:
      "Problem: Need for a real-time collaborative drawing application with multi-user support.\n\nSolution: Built an infinite canvas application with live presence, cursors, and stroke/shape broadcasting over WebSockets. Implemented batched events for optimal performance.\n\nImpact: Successfully created a smooth multi-user drawing experience with minimal network overhead using React, TypeScript, Canvas API, Node.js, and WebSockets.",
    tags: [
      {
        name: "React",
        color: "text-blue-700",
      },
      {
        name: "TypeScript",
        color: "text-green-600",
      },
      {
        name: "WebSockets",
        color: "text-pink-600",
      },
    ],
    image: meta,
    source_code_link: "https://github.com/vineetagarwal54/CollabDrawAI",
  },
  {
    name: "GreenLight Credentials Wallet",
    description:
      "Problem: Need for a secure and user-friendly blockchain wallet with real-time updates.\n\nSolution: Developed 30+ responsive React Native screens and integrated 15+ blockchain webhooks for real-time state management.\n\nImpact: Created a seamless cross-platform experience for managing blockchain credentials with reliable real-time updates.",
    tags: [
      {
        name: "React Native",
        color: "text-blue-700",
      },
      {
        name: "Blockchain",
        color: "text-green-600",
      },
      {
        name: "WebHooks",
        color: "text-pink-600",
      },
    ],
    image: ActivityLogger,
    source_code_link: "https://github.com/vineetagarwal54",
  },
  {
    name: "Interview Management Platform",
    description:
      "Problem: Need for a scalable remote interviewing solution with real-time collaboration.\n\nSolution: Engineered a platform using WebRTC and WebSockets for video conferencing and real-time collaboration.\n\nImpact: Successfully scaled to 100+ concurrent video sessions with <200ms latency, providing a reliable interviewing experience.",
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
        name: "WebSockets",
        color: "text-pink-600",
      },
    ],
    image: meta,
    source_code_link: "https://github.com/vineetagarwal54",
  }
];


export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
