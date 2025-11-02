import { useEffect } from 'react';
import { experiences, education, projects } from '../constants';

// Import critical images for immediate preloading
import profilePic from '../assets/pho1.png';
import github from '../assets/github.png';

const ImagePreloader = () => {
  useEffect(() => {
    // Priority 1: Critical images that should load immediately
    const criticalImages = [
      profilePic,
      github,
      experiences[0]?.icon, // Most recent experience
      education[0]?.icon,   // Current education
      projects[0]?.image,   // First project
      projects[1]?.image    // Second project
    ].filter(Boolean); // Remove any undefined values

    // Priority 2: All other images for background preloading
    const allImages = new Set([
      ...experiences.map(exp => exp.icon),
      ...education.map(edu => edu.icon),
      ...projects.map(proj => proj.image)
    ]);

    // Remove critical images from background loading set
    criticalImages.forEach(url => allImages.delete(url));

    // Preload critical images immediately with high priority
    const preloadCritical = () => {
      const promises = criticalImages.map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        });
      });

      Promise.allSettled(promises).then(results => {
        const successful = results.filter(result => result.status === 'fulfilled').length;
        console.log(`✅ Preloaded ${successful}/${criticalImages.length} critical images`);
      });
    };

    // Preload other images with low priority after a delay
    const preloadOthers = () => {
      setTimeout(() => {
        const promises = Array.from(allImages).map(src => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = reject;
            img.src = src;
          });
        });

        Promise.allSettled(promises).then(results => {
          const successful = results.filter(result => result.status === 'fulfilled').length;
          console.log(`🔄 Background loaded ${successful}/${allImages.size} secondary images`);
        });
      }, 1000); // Delay secondary loading by 1 second
    };

    preloadCritical();
    preloadOthers();
  }, []);

  return null; // This component doesn't render anything
};

export default ImagePreloader;