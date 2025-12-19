import AnimateOnScroll from "./AnimateOnScroll";

const GITHUB_USERNAME = "vineetagarwal54";

const GitHubStats = () => {
  return (
    <div className="pb-16">
      <AnimateOnScroll>
        <h2 className="mb-16 text-center text-4xl leading-tight">
          <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent font-bold inline-block py-2">
            GitHub Activity
          </span>
        </h2>
        
        <div className="flex flex-col items-center gap-8">
          {/* Stats Cards Row */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full">
            {/* GitHub Stats */}
            <a 
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-all duration-200 ease-out hover:scale-[1.03]"
            >
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&hide_border=true&title_color=ff9800&icon_color=ff9800&text_color=9ca3af&bg_color=00000000`}
                alt="GitHub Stats"
                className="rounded-xl shadow-soft group-hover:shadow-accent-ring transition-shadow duration-200"
                loading="lazy"
              />
            </a>
            
            {/* Top Languages */}
            <a 
              href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-all duration-200 ease-out hover:scale-[1.03]"
            >
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=transparent&hide_border=true&title_color=ff9800&text_color=9ca3af&bg_color=00000000`}
                alt="Top Languages"
                className="rounded-xl shadow-soft group-hover:shadow-accent-ring transition-shadow duration-200"
                loading="lazy"
              />
            </a>
          </div>
          
          {/* Contribution Graph */}
          <a 
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group transition-all duration-200 ease-out hover:scale-[1.01] w-full max-w-4xl"
          >
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&theme=github-compact&hide_border=true&bg_color=00000000&color=9ca3af&line=ff9800&point=ff9800&area=true&area_color=ff9800`}
              alt="GitHub Contribution Graph"
              className="w-full rounded-xl shadow-soft group-hover:shadow-accent-ring transition-shadow duration-200"
              loading="lazy"
            />
          </a>
          
          {/* Streak Stats */}
          <a 
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group transition-all duration-200 ease-out hover:scale-[1.03]"
          >
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=transparent&hide_border=true&ring=ff9800&fire=ff9800&currStreakLabel=ff9800&sideLabels=9ca3af&currStreakNum=9ca3af&sideNums=9ca3af&dates=6b7280&background=00000000`}
              alt="GitHub Streak"
              className="rounded-xl shadow-soft group-hover:shadow-accent-ring transition-shadow duration-200"
              loading="lazy"
            />
          </a>
          
          {/* View Profile Button */}
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-8 py-4 bg-accent text-accent-foreground rounded-full font-bold shadow-lg hover:shadow-[0_8px_30px_rgba(255,152,0,0.4)] hover:scale-105 transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-accent-ring flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View Full Profile
          </a>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default GitHubStats;
