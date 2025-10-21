import profilePi from "../assets/pho1.png";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

const containerVariants = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    }
  }
}

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}

const Hero = () => {
  return (
    <section className="w-full pt-8 pb-4 md:pt-16 md:pb-8 lg:mb-24">
      <div className="flex flex-col-reverse lg:flex-row-reverse items-center lg:items-start gap-8 lg:gap-0 lg:ml-20">
        {/* Image Container */}
        <div className="w-full flex justify-center lg:w-1/2">
          <div className="w-40 h-40 sm:w-64 sm:h-64 md:w-[340px] md:h-[340px] lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px] flex items-center justify-center overflow-hidden rounded-3xl bg-background dark:bg-background-dark shadow-lg">
            <motion.img
              src={profilePi}
              alt="Vineet Agarwal"
              className="object-cover aspect-square w-full h-full"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start mt-8 lg:mt-0 px-2 sm:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start"
          >
            <motion.h2 variants={childVariants} className="pb-2 text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-text dark:text-text-dark text-center lg:text-left">
              Vineet Agarwal
            </motion.h2>
            <motion.span variants={childVariants} className="bg-gradient-to-r from-primary to-accent bg-clip-text text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight text-transparent font-semibold mb-2 text-center lg:text-left">
              <TypeAnimation
                sequence={[
                  'Software Developer',
                  2000,
                  'MERN Stack Developer',
                  2000,
                  'Android Developer',
                  2000,
                  'IOS Developer',
                  2000,
                  'Python Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: 'inline-block' }}
                repeat={Infinity}
              />
            </motion.span>
            <motion.p variants={childVariants} className="my-2 max-w-xl py-4 text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-text dark:text-text-dark text-center lg:text-left">
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVariants}
              href="resumee.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-primary text-background dark:text-background-dark rounded-full px-6 py-3 text-base sm:text-lg font-semibold shadow-md hover:bg-primary/90 transition-colors mb-8 mt-2 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
