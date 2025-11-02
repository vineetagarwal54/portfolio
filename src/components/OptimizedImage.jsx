import { useState, useEffect, useRef } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  onLoad, 
  priority = false, 
  placeholder = true,
  lazy = true 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [inView, setInView] = useState(!lazy || priority);
  const imgRef = useRef(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px' // Start loading 50px before image enters viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [lazy, priority]);

  // Preload image when in view
  useEffect(() => {
    if (!inView) return;

    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageLoaded(true);
      onLoad?.();
    };
    img.onerror = () => {
      setError(true);
    };

    // Preload immediately for priority images
    if (priority) {
      img.loading = 'eager';
    }
  }, [src, onLoad, inView, priority]);

  if (error) {
    return (
      <div 
        ref={imgRef}
        className={`${className} bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded`}
      >
        <span className="text-gray-400 text-xs">Image unavailable</span>
      </div>
    );
  }

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {/* Actual Image */}
      {inView && (
        <img
          src={src}
          alt={alt}
          className={`${className} ${
            !imageLoaded ? 'opacity-0' : 'opacity-100'
          } transition-opacity duration-500 ease-in-out`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => {
            setImageLoaded(true);
            onLoad?.();
          }}
          onError={() => setError(true)}
        />
      )}
      
      {/* Loading Placeholder */}
      {(!imageLoaded || !inView) && placeholder && (
        <div 
          className={`absolute inset-0 ${className} bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse rounded`}
          style={{
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite linear'
          }}
        />
      )}
      
      {/* CSS for shimmer effect */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
};

export default OptimizedImage;