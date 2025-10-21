import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { DiAndroid, DiApple, DiPython, DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiCplusplus, SiMongodb, SiMysql, SiReduxsaga, SiSelenium } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
        >
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
        >
          <SiMongodb className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
        >
          <DiRedis className="text-7xl text-red-700" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
        >
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(7)}
        >
          <BiLogoTypescript className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5.5)}
        >
          <DiPython className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3.5)}
        >
          <DiAndroid className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
        >
          <DiApple className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
        >
          <SiReduxsaga className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <SiCplusplus className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <SiMysql className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <SiSelenium className="text-7xl text-cyan-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
