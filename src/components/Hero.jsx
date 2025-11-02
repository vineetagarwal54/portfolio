import profilePi from "../assets/pho1.png";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { trackResumeDownload } from '../services/analytics';
import OptimizedImage from './OptimizedImage';

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
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async (e) => {
    const downloadToast = toast.loading('Downloading...');
    try {
      setDownloading(true);
      
      // Start both operations concurrently
      const [result, downloadSuccess] = await Promise.allSettled([
        trackResumeDownload(),
        (async () => {
          try {
            const link = document.createElement('a');
            link.href = '/Resume1.pdf';
            link.setAttribute('download', 'Vineet_Agarwal_Resume.pdf');
            document.body.appendChild(link);
            link.click();
            link.remove();
            return true;
          } catch (err) {
            console.error('Programmatic download failed, fallback to opening in new tab', err);
            window.open('/Resume1.pdf', '_blank', 'noopener');
            return true;
          }
        })()
      ]);
      
      // Show success message immediately
      if (downloadSuccess.status === 'fulfilled' && downloadSuccess.value) {
        toast.success(
          `Resume downloaded${result.status === 'fulfilled' && result.value ? ` (${result.value.value} downloads)` : ''}!`,
          { id: downloadToast, duration: 2000 }
        );
      }
      
      return result.status === 'fulfilled' ? result.value : null;
    } catch (error) {
      console.error('Download failed:', error);
      toast.error('Download failed. Please try again.', { id: downloadToast });
    } finally {
      setDownloading(false);
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
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
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
                {downloading ? 'Downloading...' : 'Download Resume'}
                {!downloading && (
                  <motion.svg 
                    className="w-5 h-5"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    animate={{ y: [0, 2, 0] }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                    />
                  </motion.svg>
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
