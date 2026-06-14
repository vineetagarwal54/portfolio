import { useState } from "react";

// Renders a <picture> with a WebP source and the original as a fallback.
// Keeps explicit width/height so the browser can reserve space (no layout shift),
// uses native lazy loading for everything below the fold, and fades in on load.
const OptimizedImage = ({
  src,
  webpSrc,
  alt = "",
  className = "",
  width,
  height,
  priority = false,
  onLoad,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`${className} flex items-center justify-center bg-secondary-alt`}
        role="img"
        aria-label={alt}
      >
        <span className="text-muted text-xs">Image unavailable</span>
      </div>
    );
  }

  return (
    <picture style={{ display: "contents" }}>
      {webpSrc ? <source srcSet={webpSrc} type="image/webp" /> : null}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className} ${
          loaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500 ease-in-out`}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : undefined}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        onError={() => setError(true)}
      />
    </picture>
  );
};

export default OptimizedImage;
