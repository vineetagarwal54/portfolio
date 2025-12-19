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

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Tech", href: "#technologies" },
  { name: "Experience", href: "#experience-education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Trigger entrance animations after mount
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

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

  // Scroll spy to detect active section
  useEffect(() => {
    const handleScroll = () => {
      // Track scroll position for navbar styling
      setScrolled(window.scrollY > 20);
      
      const sections = navLinks.map(link => link.href.substring(1)); // Remove '#'
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 w-full px-4 sm:px-8 py-3 transition-all duration-300 ${
      scrolled 
        ? 'bg-bg/95 backdrop-blur-xl shadow-lg border-b border-border/50' 
        : 'bg-bg/70 backdrop-blur-md border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo with entrance animation */}
        <a href="#home" aria-label="Home" className="flex items-center group relative">
          <img
            src={logo}
            className={`h-10 w-auto sm:h-12 md:h-14 object-contain group-hover:drop-shadow-[0_0_12px_var(--accent)] group-hover:scale-105 transition-all duration-500 ease-out ${
              mounted ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: '0ms' }}
            alt="logo"
          />
          <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 rounded-full blur-xl transition-all duration-500"></div>
        </a>

        {/* Desktop Navigation Links - Floating Bubbles */}
        <div className="hidden lg:flex items-center gap-3 mx-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 group ${
                activeSection === link.href.substring(1)
                  ? "text-accent-foreground bg-accent shadow-[0_8px_30px_rgba(var(--accent-rgb),0.4)] scale-105"
                  : "text-fg bg-secondary/60 backdrop-blur-sm shadow-md hover:shadow-xl hover:scale-110 hover:-rotate-2 hover:text-accent"
              } ${
                mounted ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${(index + 1) * 75}ms` }}
            >
              {/* Glow effect for active state */}
              {activeSection === link.href.substring(1) && (
                <span className="absolute inset-0 rounded-full bg-accent blur-xl opacity-50 animate-pulse"></span>
              )}
              
              {/* Text */}
              <span className="relative z-10">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Desktop Socials & Toggle */}
        <div className="hidden lg:flex items-center gap-4 text-2xl">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className={`relative group text-fg hover:text-accent transition-all duration-300 hover:scale-125 hover:-translate-y-1 ${
                  mounted ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${(navLinks.length + index + 1) * 75}ms` }}
                onClick={() => trackSocialClick(link.label)}
              >
                <Icon />
                
                {/* Tooltip */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-fg text-bg text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 pointer-events-none shadow-md">
                  {link.label}
                </span>
              </a>
            );
          })}
          
          {/* Dark/Light Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className={`relative group text-fg hover:text-accent focus:outline-none transition-all duration-300 hover:scale-125 hover:-translate-y-1 ml-2 ${
              mounted ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: `${(navLinks.length + socialLinks.length + 1) * 75}ms` }}
          >
            {darkMode ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
            
            {/* Tooltip */}
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-fg text-bg text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 pointer-events-none shadow-md">
              {darkMode ? 'Light' : 'Dark'}
            </span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="relative text-fg hover:text-accent focus:outline-none transition-all duration-300 hover:scale-110 text-xl w-6 h-6 flex items-center justify-center"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
          <button
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="text-fg hover:text-accent focus:outline-none transition-all duration-300 hover:scale-110 text-xl"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div 
          className={`absolute top-4 right-4 w-72 h-auto bg-secondary/95 backdrop-blur-xl shadow-2xl p-5 flex flex-col rounded-3xl transition-all duration-500 transform ${
            menuOpen ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-8 opacity-0 scale-95'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
            {/* Close button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-full bg-accent/10 hover:bg-accent hover:text-accent-foreground hover:rotate-90 focus:outline-none focus:ring-2 focus:ring-accent-ring text-fg transition-all duration-300"
              >
                <FiX className="text-xl" />
              </button>
            </div>
            
            {/* Navigation Links - Floating Bubbles */}
            <div className="flex flex-col gap-3 mb-4">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 group text-center shadow-md hover:shadow-xl ${
                    activeSection === link.href.substring(1)
                      ? "text-accent-foreground bg-accent scale-105 shadow-[0_8px_20px_rgba(var(--accent-rgb),0.3)]"
                      : "text-fg bg-bg hover:bg-accent/10 hover:text-accent hover:scale-105 hover:-rotate-1"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  onClick={() => setMenuOpen(false)}
                >
                  {/* Glow for active */}
                  {activeSection === link.href.substring(1) && (
                    <span className="absolute inset-0 rounded-full bg-accent blur-lg opacity-40 animate-pulse"></span>
                  )}
                  
                  {/* Text */}
                  <span className="relative z-10">{link.name}</span>
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-border/30 my-3"></div>
            
            {/* Social Links - Floating Bubbles */}
            <div className="grid grid-cols-3 gap-3 mb-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="flex items-center justify-center p-4 rounded-full bg-bg hover:bg-accent/10 shadow-md hover:shadow-xl transition-all duration-300 group hover:scale-110 hover:-rotate-6"
                    onClick={() => {
                      trackSocialClick(link.label);
                      setMenuOpen(false);
                    }}
                  >
                    <Icon className="text-xl text-fg group-hover:text-accent transition-all duration-300" />
                  </a>
                );
              })}
            </div>
            
            {/* Theme toggle in mobile menu */}
            <button
              onClick={() => {
                toggleDarkMode();
                setMenuOpen(false);
              }}
              className="flex items-center justify-center gap-3 px-5 py-3 rounded-full bg-bg hover:bg-accent/10 shadow-md hover:shadow-xl transition-all duration-300 group w-full hover:scale-105 hover:rotate-2"
            >
              {darkMode ? (
                <FiSun className="text-xl text-fg group-hover:text-accent group-hover:rotate-180 group-hover:scale-125 transition-all duration-500 flex-shrink-0" />
              ) : (
                <FiMoon className="text-xl text-fg group-hover:text-accent group-hover:-rotate-12 group-hover:scale-125 transition-all duration-500 flex-shrink-0" />
              )}
              <span className="text-sm font-bold text-fg group-hover:text-accent transition-colors">
                {darkMode ? "Light Mode" : "Dark Mode"}
              </span>
            </button>
          </div>
        </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
