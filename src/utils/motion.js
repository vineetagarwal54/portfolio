export const textVariant = (delay) => {
    return {
      hidden: {
        y: -20,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "tween",
          ease: [0.25, 0.1, 0.25, 1],
          duration: 0.4,
          delay: delay,
        },
      },
    };
  };
  
  export const fadeIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: Math.min(duration, 0.5), // Cap duration at 0.5s
          ease: [0.25, 0.1, 0.25, 1],
        },
      },
    };
  };