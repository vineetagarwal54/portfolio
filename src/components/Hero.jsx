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
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.12,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
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
      toast.success("Resume downloaded!", {
        id: downloadToast,
        duration: 2000,
      });

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
<section className="w-full lg:py-0">
  <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between">      
      <motion.div
          className="w-full lg:w-3/5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={childVariants}
            className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent"
          >
            Software Engineer
          </motion.p>

          <motion.h1
            variants={childVariants}
            className="mb-3 text-4xl font-bold tracking-tight text-fg sm:text-5xl lg:text-6xl"
          >
            Vineet Agarwal
          </motion.h1>

          <motion.div
            variants={childVariants}
            className="mb-6 text-xl font-semibold text-fg/80 sm:text-2xl"
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
            className="max-w-3xl text-base leading-8 text-fg/80 sm:text-lg"
          >
            {HERO_CONTENT}
          </motion.p>

          <motion.div
            variants={childVariants}
            className="mt-6 flex flex-wrap gap-3"
          >
            {focusAreas.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-fg/85"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={childVariants}
            className="mt-8 flex flex-wrap gap-4"
          >
            <motion.button
              onClick={handleDownload}
              className="group flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-md transition-colors duration-200 hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent-ring"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              animate={
                downloading
                  ? {
                      scale: [1, 0.98, 1],
                      transition: { duration: 0.6, repeat: Infinity },
                    }
                  : {}
              }
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

            <motion.a
              href="#projects"
              className="rounded-full border border-border px-6 py-3 text-base font-semibold text-fg transition-colors duration-200 hover:bg-card"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.a>

            <motion.a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 text-base font-semibold text-fg transition-colors duration-200 hover:bg-card"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex w-full justify-center lg:w-2/5"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-accent/10 blur-2xl" />
            <OptimizedImage
              src={profilePi}
              alt="Vineet Agarwal"
              className="relative h-72 w-72 rounded-3xl object-cover shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;