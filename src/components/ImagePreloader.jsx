import { useEffect } from 'react';
import { experiences, education } from '../constants';

const ImagePreloader = () => {
  useEffect(() => {
    // Collect all unique image URLs
    const imageUrls = new Set([
      ...experiences.map(exp => exp.icon),
      ...education.map(edu => edu.icon)
    ]);

    // Preload all images
    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  return null; // This component doesn't render anything
};

export default ImagePreloader;