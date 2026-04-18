import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

const GITHUB_USERNAME = "vineetagarwal54";

// Fallback component when image fails to load
const StatsFallback = ({ title, children }) => (
  <div className="rounded-xl bg-card-bg border border-card-border p-6 min-w-[300px] text-center">
    <h3 className="text-accent font-semibold mb-2">{title}</h3>
    {children}
  </div>
);

const StatsImage = ({ src, alt, className, fallbackTitle }) => {
  const [hasError, setHasError] = useState(false);
  
  if (hasError) {
    return (
      <StatsFallback title={fallbackTitle}>
        <p className="text-muted text-sm">
          Stats temporarily unavailable.
          <br />
          <a 
            href={`https://github.com/${GITHUB_USERNAME}`}
            className="text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub →
          </a>
        </p>
      </StatsFallback>
    );
  }
  
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
};

const GitHubStats = () => {
  return (
    <AnimateOnScroll>
      <div className="section-header">
        <p className="section-kicker">GitHub</p>
        <h2 className="section-title">Activity and open-source footprint</h2>
        <p className="section-lede">
          A quick snapshot of what I've been building and shipping on GitHub.
        </p>
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:border-accent/60 hover:shadow-md"
          >
            <StatsImage
              src={`https://github-readme-stats-eight-theta.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&hide_border=true&title_color=ff9800&icon_color=ff9800&text_color=9ca3af&bg_color=00000000`}
              alt="GitHub Stats"
              className="w-full max-w-[480px]"
              fallbackTitle="GitHub Stats"
            />
          </a>

          <a
            href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:border-accent/60 hover:shadow-md"
          >
            <StatsImage
              src={`https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=transparent&hide_border=true&title_color=ff9800&text_color=9ca3af&bg_color=00000000`}
              alt="Top Languages"
              className="w-full max-w-[480px]"
              fallbackTitle="Top Languages"
            />
          </a>
        </div>

        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex w-full items-center justify-center rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:border-accent/60 hover:shadow-md"
        >
          <StatsImage
            src={`https://streak-stats.demolab.com/?user=${GITHUB_USERNAME}&theme=transparent&hide_border=true&ring=ff9800&fire=ff9800&currStreakLabel=ff9800&sideLabels=9ca3af&currStreakNum=9ca3af&sideNums=9ca3af&dates=6b7280&background=00000000`}
            alt="GitHub Streak"
            className="w-full max-w-[720px]"
            fallbackTitle="GitHub Streak"
          />
        </a>

        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-2 rounded-full border border-border bg-bg px-6 py-3 text-sm font-semibold text-fg transition-colors duration-200 hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent-ring"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          View full profile
        </a>
      </div>
    </AnimateOnScroll>
  );
};

export default GitHubStats;
