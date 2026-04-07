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
    <section className="pb-16 sm:pb-20">
      <div className="mb-8 text-center sm:mb-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent sm:text-sm">
          Tech Stack
        </p>

        <h2 className="text-2xl font-bold text-fg sm:text-3xl lg:text-4xl">
          Full-stack engineering across product, AI, and cloud
        </h2>

        <p className="mx-auto mt-4 max-w-3xl px-2 text-sm leading-7 text-fg/75 sm:px-0 sm:text-base lg:text-lg">
          I work across frontend interfaces, backend systems, AI workflows,
          infrastructure, and real-time applications. This section is broad on
          purpose because the roles I’m targeting span full-stack, backend,
          frontend, mobile, cloud, and applied AI engineering.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10 sm:gap-3">
        {focusAreas.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border bg-card px-3 py-2 text-xs font-medium text-fg/85 shadow-sm sm:px-4 sm:text-sm"
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
  whileHover={{ y: -6 }}
  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:border-accent hover:bg-accent/5 hover:shadow-lg sm:p-6"
>
              <div className="mb-5 flex items-start gap-4">
               <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent sm:h-12 sm:w-12">
  <Icon className="text-xl sm:text-2xl" />
</div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-fg sm:text-xl">
                    {group.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-fg/70">
                    {group.subtitle}
                  </p>
                </div>
              </div>

              <div className="mb-5 flex flex-wrap gap-2 sm:gap-3">
                {group.techIcons.map((TechIcon, idx) => (
                  <div
                    key={idx}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-bg text-accent sm:h-10 sm:w-10"
                  >
                    <TechIcon className="text-lg sm:text-xl" />
                  </div>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
className="rounded-full border border-border px-3 py-1.5 text-[11px] font-medium text-fg/80 sm:text-xs"                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Technologies;