import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import yourIcon from "../assets/logo.png";

const ORANGE = "#ff9800"; // Use your logo's orange color

const SplashScreen = ({ onAnimationComplete, mode = "full" }) => {
  // For full animation
  const [showUnderline, setShowUnderline] = useState(false);
  const [showName, setShowName] = useState(false);
  const [isDone, setIsDone] = useState(false);

  // For logo-only animation
  const [logoDone, setLogoDone] = useState(false);
  const [showShine, setShowShine] = useState(false);

  useEffect(() => {
    if (mode === "full") {
      const timers = [
        setTimeout(() => setShowUnderline(true), 600),
        setTimeout(() => setShowName(true), 1100),
      ];
      return () => timers.forEach(clearTimeout);
    } else {
      // Logo-only: finish after short anim
      setShowShine(true);
      const timer = setTimeout(() => setLogoDone(true), 1200);
      return () => clearTimeout(timer);
    }
  }, [mode]);

  useEffect(() => {
    if (mode === "full" && isDone) {
      const timer = setTimeout(() => {
        onAnimationComplete();
      }, 700);
      return () => clearTimeout(timer);
    } else if (mode === "logo" && logoDone) {
      onAnimationComplete();
    }
  }, [isDone, logoDone, mode, onAnimationComplete]);

  return (
    <AnimatePresence>
      {((mode === "full" && !isDone) || (mode === "logo" && !logoDone)) && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          aria-label="Splash screen"
          role="dialog"
        >
          {/* Logo fade/scale in (shared) */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ scale: 0.92, opacity: 0, filter: "blur(2px)" }}
            animate={
              mode === "logo"
                ? {
                    scale: [0.92, 1.08, 1, 1.06, 1],
                    opacity: 1,
                    filter: [
                      "blur(2px)",
                      `drop-shadow(0 0 0px ${ORANGE})`,
                      `drop-shadow(0 0 16px ${ORANGE})`,
                      `drop-shadow(0 0 24px ${ORANGE})`,
                      `drop-shadow(0 0 0px ${ORANGE})`
                    ],
                  }
                : {
                    scale: 1,
                    opacity: 1,
                    filter: "blur(0px)",
                  }
            }
            transition={
              mode === "logo"
                ? { duration: 1.1, times: [0, 0.2, 0.5, 0.8, 1], ease: "easeInOut" }
                : { duration: 0.7, ease: "easeOut" }
            }
            aria-hidden="true"
            style={{ zIndex: 2 }}
          >
            <img
              src={yourIcon}
              alt="Logo"
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain select-none"
              draggable="false"
            />
            {/* Underline animation (full mode only) */}
            {mode === "full" && showUnderline && (
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 bottom-[-18px] h-[3px] rounded-full"
                style={{ background: ORANGE, boxShadow: `0 0 8px ${ORANGE}` }}
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '80px', opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            )}
            {/* Shine sweep (logo mode only) */}
            {mode === "logo" && showShine && (
              <span className="shine absolute inset-0 pointer-events-none" />
            )}
          </motion.div>

          {/* Name Reveal with shimmer (full mode only) */}
          {mode === "full" && showName && (
            <motion.div
              className="mt-8 text-center relative"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="relative inline-block">
                <TypeAnimation
                  sequence={[
                    "Vineet Agarwal",
                    () => setIsDone(true),
                  ]}
                  speed={60}
                  cursor={false}
                  repeat={0}
                  className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide shimmer-text"
                  aria-label="Vineet Agarwal"
                />
                {/* Subtle shimmer overlay */}
                <span className="shimmer absolute inset-0 pointer-events-none" />
              </div>
            </motion.div>
          )}
          {/* Shimmer effect CSS (full mode only) */}
          {mode === "full" && (
            <style>{`
              .shimmer-text {
                position: relative;
                overflow: hidden;
              }
              .shimmer {
                display: block;
                width: 100%;
                height: 100%;
                background: linear-gradient(120deg, transparent 0%, ${ORANGE} 50%, transparent 100%);
                opacity: 0.18;
                transform: translateX(-100%);
                animation: shimmer-move 1.1s 0.3s forwards;
              }
              @keyframes shimmer-move {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
              }
            `}</style>
          )}
          {/* Shine sweep CSS (logo mode only) */}
          {mode === "logo" && (
            <style>{`
              .shine {
                display: block;
                width: 100%;
                height: 100%;
                background: linear-gradient(100deg, transparent 0%, ${ORANGE}88 50%, transparent 100%);
                opacity: 0.5;
                transform: translateX(-100%);
                animation: shine-move 0.8s 0.2s forwards;
                border-radius: 9999px;
              }
              @keyframes shine-move {
                0% { transform: translateX(-100%); opacity: 0.2; }
                60% { opacity: 0.5; }
                100% { transform: translateX(100%); opacity: 0; }
              }
            `}</style>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
