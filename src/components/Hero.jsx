import profilePi from "../assets/pho1.png";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import toast from "react-hot-toast";
import { trackResumeDownload } from "../services/analytics";
import OptimizedImage from "./OptimizedImage";
import { HiDownload } from "react-icons/hi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const focusAreas = [
  "Full-Stack Apps",
  "AI Systems",
  "Cloud & DevOps",
  "Mobile",
  "Real-Time",
];

const Hero = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    const downloadToast = toast.loading("Downloading...");
    try {
      setDownloading(true);
      try {
        const link = document.createElement("a");
        link.href = "/Resume1.pdf";
        link.setAttribute("download", "Vineet_Agarwal_Resume.pdf");
        document.body.appendChild(link);
        link.click();
        link.remove();
      } catch (err) {
        console.error("Programmatic download failed, fallback to new tab", err);
        window.open("/Resume1.pdf", "_blank", "noopener");
      }

      setDownloading(false);
      toast.success("Resume downloaded!", { id: downloadToast, duration: 2000 });

      trackResumeDownload().catch((err) => {
        console.error("Analytics tracking failed:", err);
      });
    } catch (error) {
      console.error("Download failed:", error);
      setDownloading(false);
      toast.error("Download failed. Please try again.", { id: downloadToast });
    }
  };

  return (
    <div className="grid w-full items-center gap-10 lg:grid-cols-12 lg:gap-12">
      <motion.div
        className="order-2 lg:order-1 lg:col-span-7"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={childVariants}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-accent sm:text-sm"
        >
          Software Engineer
        </motion.p>

        <motion.h1
          variants={childVariants}
          className="mb-4 text-4xl font-bold leading-[1.05] tracking-tight text-fg sm:text-5xl lg:text-[4rem]"
        >
          Vineet Agarwal
        </motion.h1>

        <motion.div
          variants={childVariants}
          className="mb-6 min-h-[2.25rem] text-xl font-medium text-fg/80 sm:text-2xl"
        >
          <TypeAnimation
            sequence={[
              "Full-Stack Developer",
              1500,
              "AI Engineer",
              1500,
              "Frontend + Backend Builder",
              1500,
              "Cloud-Native Problem Solver",
              1500,
            ]}
            wrapper="span"
            speed={42}
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          variants={childVariants}
          className="max-w-2xl text-base leading-[1.75] text-fg/70 sm:text-lg"
        >
          {HERO_CONTENT}
        </motion.p>

        <motion.div
          variants={childVariants}
          className="mt-7 flex flex-wrap gap-2 sm:gap-2.5"
        >
          {focusAreas.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs font-medium text-fg/75 sm:text-sm"
            >
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={childVariants}
          className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
        >
          <motion.button
            onClick={handleDownload}
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-md transition-colors duration-200 hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent-ring sm:text-base"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {downloading ? (
              <>
                <AiOutlineLoading3Quarters className="animate-spin text-lg" />
                Downloading...
              </>
            ) : (
              <>
                <HiDownload className="text-lg" />
                Download Resume
              </>
            )}
          </motion.button>

          <a
            href="#projects"
            className="inline-flex items-center rounded-full border border-border bg-bg px-6 py-3 text-sm font-semibold text-fg transition-colors duration-200 hover:border-accent hover:text-accent sm:text-base"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="inline-flex items-center rounded-full px-4 py-3 text-sm font-semibold text-fg/75 transition-colors duration-200 hover:text-accent sm:text-base"
          >
            Get in touch →
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
      >
        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2rem] bg-accent/15 blur-3xl"
          />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-card p-1.5 shadow-xl">
            <OptimizedImage
              src={profilePi}
              alt="Vineet Agarwal"
              className="h-64 w-64 rounded-[1.4rem] object-cover sm:h-80 sm:w-80 lg:h-[22rem] lg:w-[22rem]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
