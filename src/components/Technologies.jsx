import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs, FaAws } from "react-icons/fa";
import { DiPython, DiRedis, DiAndroid, DiApple } from "react-icons/di";
import {
  SiFastapi,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiLangchain,
  SiOpenai,
  SiTailwindcss,
  SiExpress,
  SiGithubactions,
  SiFirebase,
  SiTwilio,
} from "react-icons/si";

const focusAreas = [
  "Full-Stack Apps",
  "AI Systems",
  "MCP Servers",
  "Cloud & DevOps",
  "Mobile",
  "Real-Time",
];

const skillGroups = [
  {
    title: "Frontend Engineering",
    subtitle:
      "Responsive interfaces, product-focused UI, and modern web applications.",
    icon: RiReactjsLine,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Responsive Design",
    ],
    techIcons: [RiReactjsLine, TbBrandNextjs, BiLogoTypescript, SiTailwindcss],
  },
  {
    title: "Backend & APIs",
    subtitle:
      "Backend services, API design, data handling, and production workflows.",
    icon: FaNodeJs,
    skills: [
      "FastAPI",
      "Node.js",
      "Express",
      "REST APIs",
      "WebSocket",
      "Authentication",
      "System Design",
    ],
    techIcons: [SiFastapi, FaNodeJs, SiExpress, DiPython],
  },
  {
    title: "AI, Agents & Automation",
    subtitle:
      "Applied AI workflows, retrieval systems, automation, and agent-based tools.",
    icon: SiLangchain,
    skills: [
      "LangChain",
      "OpenAI APIs",
      "RAG Pipelines",
      "FAISS",
      "Multi-Agent Systems",
      "MCP Servers",
      "Prompt Workflows",
    ],
    techIcons: [SiLangchain, SiOpenai, DiPython, DiRedis],
  },
  {
    title: "Cloud & DevOps",
    subtitle:
      "Deployment, infrastructure, containers, CI/CD, and scalable cloud systems.",
    icon: FaAws,
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "CI/CD",
      "CloudFormation",
      "Monitoring",
    ],
    techIcons: [FaAws, SiDocker, SiKubernetes, SiGithubactions],
  },
  {
    title: "Data & Storage",
    subtitle:
      "Relational and NoSQL data systems, caching, and backend performance work.",
    icon: BiLogoPostgresql,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "SQL",
      "DynamoDB",
      "Data Modeling",
      "Query Optimization",
    ],
    techIcons: [BiLogoPostgresql, SiMongodb, DiRedis, DiPython],
  },
  {
    title: "Mobile & Real-Time",
    subtitle:
      "Cross-platform apps, real-time communication, and production mobile integrations.",
    icon: DiAndroid,
    skills: [
      "React Native",
      "iOS",
      "Android",
      "WebRTC",
      "Socket.IO",
      "Firebase",
      "Twilio",
    ],
    techIcons: [RiReactjsLine, DiApple, DiAndroid, SiFirebase, SiTwilio],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      delay: index * 0.06,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const Technologies = () => {
  return (
    <>
      <div className="section-header">
        <p className="section-kicker">Tech Stack</p>
        <h2 className="section-title">
          Full-stack engineering across product, AI, and cloud
        </h2>
        <p className="section-lede">
          I work across frontend interfaces, backend systems, AI workflows,
          infrastructure, and real-time applications — a broad stack for the
          full-stack, backend, frontend, mobile, cloud, and applied AI roles I'm
          targeting.
        </p>
      </div>

      <div className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-2.5">
        {focusAreas.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs font-medium text-fg/75 sm:text-sm"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.div
              key={group.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4 }}
              className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-accent/60 hover:shadow-lg"
            >
              <div className="mb-5 flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="text-xl" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-fg">
                    {group.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-fg/70">
                    {group.subtitle}
                  </p>
                </div>
              </div>

              <div className="mb-5 flex flex-wrap gap-2">
                {group.techIcons.map((TechIcon, idx) => (
                  <div
                    key={idx}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-bg text-accent"
                  >
                    <TechIcon className="text-lg" />
                  </div>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-fg/70"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default Technologies;