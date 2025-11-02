import { useState, useEffect } from 'react';

const OptimizedImage = ({ src, alt, className, onLoad }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageLoaded(true);
      onLoad?.();
    };
    img.onerror = () => {
      setError(true);
    };
  }, [src, onLoad]);

  if (error) {
    return (
      <div className={`${className} bg-gray-200 flex items-center justify-center`}>
        <span className="text-gray-400 text-sm">Failed to load</span>
      </div>
    );
  }

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`${className} ${!imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        loading="eager"
        decoding="async"
      />
      {!imageLoaded && (
        <div className={`${className} bg-gray-200 animate-pulse absolute inset-0`} />
      )}
    </>
  );
};

export default OptimizedImage;