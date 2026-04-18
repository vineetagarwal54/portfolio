import { projects } from "../constants";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import AnimateOnScroll from "./AnimateOnScroll";
import OptimizedImage from "./OptimizedImage";
import { useState } from "react";
import { trackProjectClick } from "../services/analytics";

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: index * 0.06,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => (
  <motion.article
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    whileHover={{ y: -4 }}
    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-accent/60 hover:shadow-lg"
  >
    <a
      href={source_code_link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${name} on GitHub`}
      onClick={() => trackProjectClick(name)}
      className="relative block aspect-[16/10] w-full overflow-hidden bg-secondary-alt"
    >
      <OptimizedImage
        src={image}
        alt={name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        lazy={true}
        priority={index < 2}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <span
        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white shadow-md transition-transform duration-200 group-hover:scale-110"
        aria-hidden="true"
      >
        <FaGithub className="text-base" />
      </span>
    </a>

    <div className="flex flex-1 flex-col p-5 sm:p-6">
      <h3 className="text-lg font-semibold text-fg transition-colors duration-200 group-hover:text-accent sm:text-xl">
        {name}
      </h3>
      <p className="mt-2 text-sm leading-6 text-fg/70">{description}</p>

      <div className="mt-auto pt-5">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className="rounded-full border border-border bg-bg px-2.5 py-1 text-[11px] font-medium text-fg/70"
            >
              {tag.name}
            </span>
          ))}
        </div>

        <a
          href={source_code_link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackProjectClick(name)}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors duration-200 hover:text-accent-hover"
        >
          View source
          <FiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  </motion.article>
);

const Project = () => {
  const [showAll, setShowAll] = useState(false);
  const FEATURED_COUNT = 6;

  const displayedProjects = showAll ? projects : projects.slice(0, FEATURED_COUNT);
  const hasMore = projects.length > FEATURED_COUNT;

  return (
    <AnimateOnScroll>
      <div className="section-header">
        <p className="section-kicker">Selected Work</p>
        <h2 className="section-title">Projects I've built and shipped</h2>
        <p className="section-lede">
          A mix of full-stack products, AI systems, and real-time tools — spanning
          frontend, backend, cloud, and mobile.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
        {displayedProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-bg px-6 py-3 text-sm font-semibold text-fg transition-colors duration-200 hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent-ring"
          >
            {showAll ? "Show less" : `View all projects (${projects.length})`}
          </button>
        </div>
      )}
    </AnimateOnScroll>
  );
};

export default Project;
