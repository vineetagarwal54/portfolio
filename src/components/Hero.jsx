import profilePi from "../assets/pho1.png";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { trackResumeDownload } from '../services/analytics';
import OptimizedImage from './OptimizedImage';
import { HiDownload } from 'react-icons/hi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.15,
    }
  }
}

const childVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.35,
      ease: [0.25, 0.1, 0.25, 1]
    } 
  }
}

const Hero = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async (e) => {
    const downloadToast = toast.loading('Downloading...');
    try {
      setDownloading(true);
      
      // Download the file immediately
      try {
        const link = document.createElement('a');
        link.href = '/Resume1.pdf';
        link.setAttribute('download', 'Vineet_Agarwal_Resume.pdf');
        document.body.appendChild(link);
        link.click();
        link.remove();
      } catch (err) {
        console.error('Programmatic download failed, fallback to opening in new tab', err);
        window.open('/Resume1.pdf', '_blank', 'noopener');
      }
      
      // End loading state immediately after download
      setDownloading(false);
      toast.success('Resume downloaded!', { id: downloadToast, duration: 2000 });
      
      // Track analytics in background (don't wait for it)
      trackResumeDownload().catch(err => {
        console.error('Analytics tracking failed:', err);
      });
      
    } catch (error) {
      console.error('Download failed:', error);
      setDownloading(false);
      toast.error('Download failed. Please try again.', { id: downloadToast });
    }
  };
  return (
    <section className="w-full pt-8 pb-4 md:pt-16 md:pb-8 lg:mb-24">
      <div className="flex flex-col-reverse lg:flex-row-reverse items-center lg:items-start gap-8 lg:gap-0 lg:ml-20">
        {/* Image Container */}
        <div className="w-full flex justify-center lg:w-1/2">
          <div className="w-40 h-40 sm:w-64 sm:h-64 md:w-[340px] md:h-[340px] lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px] flex items-center justify-center overflow-hidden rounded-xl bg-secondary shadow-soft">
            <motion.div
              className="w-full h-full"
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <OptimizedImage
                src={profilePi}
                alt="Vineet Agarwal"
                className="object-cover aspect-square w-full h-full"
                priority={true}
                lazy={false}
              />
            </motion.div>
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
            <motion.h1 variants={childVariants} className="pb-2 text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-primary text-center lg:text-left">
              Vineet Agarwal
            </motion.h1>
            <motion.span variants={childVariants} className="text-accent-secondary text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight font-semibold mb-2 text-center lg:text-left">
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
                  'Cloud Enthusiast',
                  2000,
                  'DevOps Engineer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: 'inline-block' }}
                repeat={Infinity}
              />
            </motion.span>
            <motion.p variants={childVariants} className="my-2 max-w-xl py-4 text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-secondary text-center lg:text-left">
              {HERO_CONTENT}
            </motion.p>
            <motion.button
              variants={childVariants}
              type="button"
              onClick={async (e) => {
                e.preventDefault();
                await handleDownload();
              }}
              className="group bg-accent btn-primary rounded-full px-6 py-3 text-base sm:text-lg font-semibold shadow-md hover:bg-accent-hover transition-colors duration-200 mb-8 mt-2 focus:outline-none focus:ring-2 focus:ring-accent-ring flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              animate={downloading ? { scale: [1, 0.98, 1], transition: { duration: 0.6, repeat: Infinity } } : {}}
            >
              <motion.span
                initial={false}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                {downloading ? (
                  <>
                    Downloading...
                    <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin" />
                  </>
                ) : (
                  <>
                    Download Resume
                    <HiDownload className="w-5 h-5" />
                  </>
                )}
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
