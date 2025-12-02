import { useState, useEffect } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";
import { trackSocialClick } from "../services/analytics";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/vineet-agarwal-540abc/",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "https://github.com/vineetagarwal54",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://twitter.com/vineetagarwal540",
    label: "X (Twitter)",
    icon: FaSquareXTwitter,
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode using data-theme attribute
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      }
      return next;
    });
  };

  // On mount, respect system/user preference
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      
      if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        document.documentElement.setAttribute("data-theme", "dark");
        setDarkMode(true);
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        setDarkMode(false);
      }
    }
  }, []);

  return (
    <nav className="w-full px-4 sm:px-8 py-4 flex items-center justify-between bg-bg">
      {/* Logo */}
      <a href="/" aria-label="Home" className="flex items-center group">
        <img
          src={logo}
          className="h-10 w-auto sm:h-12 md:h-14 object-contain group-hover:drop-shadow-[0_0_8px_var(--accent)] transition-all duration-300"
          alt="logo"
        />
      </a>

      {/* Desktop Socials & Toggle */}
      <div className="hidden md:flex items-center gap-4 text-2xl">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="transition-colors group"
              onClick={() => trackSocialClick(link.label)}
            >
              <span className="text-fg group-hover:text-accent transition-colors">
                <Icon />
              </span>
            </a>
          );
        })}
        {/* Dark/Light Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          className="ml-2 text-xl p-2 rounded-full hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent-ring transition-colors text-fg"
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center gap-2">
        <button
          onClick={toggleDarkMode}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          className="text-lg p-2 rounded-full hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent-ring transition-colors text-fg"
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
        <button
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="text-xl p-2 rounded-md hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent-ring transition-colors text-fg"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm flex flex-col items-end md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          <div 
            className="w-48 h-auto bg-secondary border border-border shadow-lg p-3 m-4 flex flex-col rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <div className="flex justify-end mb-2">
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="text-lg p-1 rounded-md hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent-ring text-fg transition-colors"
              >
                <FiX />
              </button>
            </div>
            
            {/* Menu Items */}
            <div className="flex flex-col gap-1">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-accent/10 transition-colors group"
                    onClick={() => {
                      trackSocialClick(link.label);
                      setMenuOpen(false);
                    }}
                  >
                    <Icon className="text-base text-fg group-hover:text-accent transition-colors flex-shrink-0" />
                    <span className="text-sm font-medium text-fg group-hover:text-accent transition-colors">
                      {link.label}
                    </span>
                  </a>
                );
              })}
            </div>
            
            {/* Theme toggle in mobile menu */}
            <div className="mt-2 pt-2 border-t border-border">
              <button
                onClick={() => {
                  toggleDarkMode();
                  setMenuOpen(false);
                }}
                className="flex items-center gap-2 p-2 rounded-md hover:bg-accent/10 transition-colors group w-full text-left"
              >
                {darkMode ? (
                  <FiSun className="text-base text-fg group-hover:text-accent transition-colors flex-shrink-0" />
                ) : (
                  <FiMoon className="text-base text-fg group-hover:text-accent transition-colors flex-shrink-0" />
                )}
                <span className="text-sm font-medium text-fg group-hover:text-accent transition-colors">
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
