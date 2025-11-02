import { useEffect } from 'react';
import { experiences, education, projects } from '../constants';

// Import critical images for immediate preloading
import profilePic from '../assets/pho1.png';
import github from '../assets/github.png';

const ImagePreloader = () => {
  useEffect(() => {
    const criticalImages = [
      profilePic,
      github,
      experiences[0]?.icon,
      education[0]?.icon, 
      projects[0]?.image,  
      projects[1]?.image   
    ].filter(Boolean); 

    const allImages = new Set([
      ...experiences.map(exp => exp.icon),
      ...education.map(edu => edu.icon),
      ...projects.map(proj => proj.image)
    ]);

    criticalImages.forEach(url => allImages.delete(url));

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
      }, 1000); 
    };

    preloadCritical();
    preloadOthers();
  }, []);

  return null;
};

export default ImagePreloader;