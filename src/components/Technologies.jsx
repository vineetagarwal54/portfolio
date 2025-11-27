import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { DiAndroid, DiApple, DiPython, DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiCplusplus, SiMongodb, SiMysql, SiReduxsaga, SiSelenium, SiLangchain, SiOpenai, SiHuggingface,SiDocker, SiKubernetes,SiFastapi, SiApacheairflow   } from "react-icons/si";
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
        className="my-20 text-center text-4xl leading-tight"
      >
        <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent font-bold inline-block py-2">
          Technologies
        </span>
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
          className="hover:scale-110 transition-transform"
        >
          <RiReactjsLine className="text-7xl tech-react transition-colors" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="hover:scale-110 transition-transform"
        >
          <TbBrandNextjs className="text-7xl tech-next transition-colors" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="hover:scale-110 transition-transform"
        >
          <SiMongodb className="text-7xl tech-mongodb transition-colors" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="hover:scale-110 transition-transform"
        >
          <DiRedis className="text-7xl tech-redis transition-colors" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
          className="hover:scale-110 transition-transform"
        >
          <FaNodeJs className="text-7xl tech-node transition-colors" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="hover:scale-110 transition-transform"
        >
          <BiLogoPostgresql className="text-7xl tech-postgres transition-colors" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(7)}
          className="hover:scale-110 transition-transform"
        >
          <BiLogoTypescript className="text-7xl tech-typescript transition-colors" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5.5)}
          className="hover:scale-110 transition-transform"
        >
          <DiPython className="text-7xl tech-python transition-colors" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3.5)}
          className="hover:scale-110 transition-transform"
        >
          <DiAndroid className="text-7xl tech-android transition-colors" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="hover:scale-110 transition-transform"
        >
          <DiApple className="text-7xl tech-apple transition-colors" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="hover:scale-110 transition-transform"
        >
          <SiReduxsaga className="text-7xl tech-redux transition-colors" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="hover:scale-110 transition-transform"
        >
          <SiCplusplus className="text-7xl tech-cpp transition-colors" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="hover:scale-110 transition-transform"
        >
          <SiMysql className="text-7xl tech-mysql transition-colors" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="hover:scale-110 transition-transform"
        >
          <SiSelenium className="text-7xl tech-selenium transition-colors" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3.5)}
          className="hover:scale-110 transition-transform"
        >
          <SiLangchain className="text-7xl tech-langchain transition-colors" />
        </motion.div>
        {/* <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4.5)}
          className="hover:scale-110 transition-transform"
        >
          <SiGooglecloud className="text-7xl tech-google transition-colors" />
        </motion.div> */}
        {/* <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4.5)}
          className="hover:scale-110 transition-transform"
        >
          <SiAmazonaws className="text-7xl tech-amazonaws transition-colors" />
        </motion.div> */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4.5)}
          className="hover:scale-110 transition-transform"
        >
          <SiDocker className="text-6xl tech-docker transition-colors" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4.5)}
          className="hover:scale-110 transition-transform"
        >
          <SiKubernetes className="text-6xl tech-kubernetes transition-colors" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4.5)}
          className="hover:scale-110 transition-transform"
        >
          <SiFastapi className="text-6xl tech-fastapi transition-colors" />
        </motion.div>

    
      </motion.div>
    </div>
  );
};

export default Technologies;
