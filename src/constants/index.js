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
    title: "React Native Developer",
    company_name: "Svipes",
    icon: svipes_logo,
    iconBg: "#383E56",
    date: "July 2024 - November 2024",
    points: [
      "Developed a social media application from scratch, creating over 50+ dynamic screens to enhance user engagement and experience.",
      "Implemented state management using Redux Toolkit to streamline data flow and optimize app performance.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Xelpmoc",
    icon: xelp_logo,
    iconBg: "#fff",
    date: "November 2022 - March 2024",
    points: [
      "Web3 Wallet App: Implemented 30+ responsive screens using React Native for both IOS and Android, enhancing user experience across various devices. Integrated over 15 webhooks for real-time blockchain communication.",
      "Interview Management System: Spearheaded the development of a website with React and sockets, employed WebRTC for data transfer, supporting up to 100 concurrent interviews with minimal latency.",
      "Made SQL databases more efficient by optimizing queries using hash maps and indexing, significantly improving performance.",
    ],
  },
  {
    title: "Internship",
    company_name: "IIIT Hyderabad",
    icon: iith,
    iconBg: "#fff",
    date: "June 2022 - August 2022",
    points: [
      "Utilized Python and Selenium to extract and analyze data from multiple sources, ensuring data accuracy and relevance",
      "Applied data cleaning and transformation techniques to prepare content for publication.",
      "Collaborated with a team to deploy 200+ articles, significantly improving regional language content on Wikipedia.",
    ],
  },
];

export const education = [
  {
    company_name: "University of Maryland, College Park",
    title: "Computer Software Engineering",
    icon: umd_logo,
    iconBg: "#383E56",
    date: "January 2025 - Present",
    points: [
      "Relevant Coursework: Software Engineering, Data Structures and Algorithms, Software Design & Implementation, System and Software Requirements, Software Testing & Maintenence, Cloud Computing",
    ],
  },
  {
    title: "Computer Science",
    company_name: "Osmania University",
    icon: ou_logo,
    iconBg: "#fff",
    date: "August 2019 - July 2023",
    points: [
      "Web3 Wallet App: Implemented 30+ responsive screens using React Native for both IOS and Android, enhancing user experience across various devices. Integrated over 15 webhooks for real-time blockchain communication.",
      "Interview Management System: Spearheaded the development of a website with React and sockets, employed WebRTC for data transfer, supporting up to 100 concurrent interviews with minimal latency.",
      "Made SQL databases more efficient by optimizing queries using hash maps and indexing, significantly improving performance.",
    ],
  },
];

export const projects = [
  {
    name: "Automatic Poetry Generation",
    description:
      "Developed a prototype web application that integrated OpenCV and NLP techniques to detect facial expressions, classify them into emotional states, and generate poetry based on emotions using GPT-2. Won First Prize among 600 participants at the Project Expo in the university, highlighting its innovation and execution.",
    tags: [
      {
        name: "Python",
        color: "text-blue-700",
      },
      {
        name: "Mongodb",
        color: "text-green-600",
      },
      {
        name: "OpenCv",
        color: "text-pink-600",
      },
    ],
    image: meta,
    source_code_link: "https://github.com/",
  },
  {
    name: "Activity Logger",
    description:
      "Developed an app to help users log daily activities and plan schedules efficiently. I used React Native for the front end, Node.js for the back end, and SQL for the database.",
    tags: [
      {
        name: "React Native",
        color: "text-blue-700",
      },
      {
        name: "SQL",
        color: "text-green-600",
      },
      {
        name: "Node JS",
        color: "text-pink-600",
      },
    ],
    image: ActivityLogger,
    source_code_link: "https://github.com/",
  },
  {
    name: "Interview Management System",
    description:
      "The Interview Management System is a user-friendly platform built with React, WebRTC, WebSockets, Node.js, and MongoDB that simplifies remote interviews by enabling real-time video calls, scheduling, candidate evaluation, and seamless collaboration for hiring teams.",
    tags: [
      {
        name: "React",
        color: "text-blue-700",
      },
      {
        name: "Node JS",
        color: "text-green-600",
      },
      {
        name: "Webrtc",
        color: "text-pink-600",
      },
    ],
    image: meta,
    source_code_link: "https://github.com/",
  },
  {
    name: "Tourism Website",
    description:
      "Explore the world with ease on this tourism website, built using React for a smooth user experience, Redux for seamless state management, and Tailwind CSS for a clean, modern design, offering destination guides, travel tips, and booking options all in one place.",
    tags: [
      {
        name: "React",
        color: "text-blue-700",
      },
      {
        name: "Redux Toolkit",
        color: "text-green-600",
      },
      {
        name: "TailwindCss",
        color: "text-pink-600",
      },
    ],
    image: mpTourism,
    source_code_link: "https://github.com/",
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
