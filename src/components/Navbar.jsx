import { useState, useEffect, useRef } from "react";
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
  const dropdownRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Close dropdown when clicking outside or pressing Escape
  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside, { passive: true });
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [menuOpen]);

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
            className="text-fg hover:text-accent focus:outline-none transition-colors duration-200 text-2xl"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
          <button
            ref={hamburgerRef}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="text-fg hover:text-accent focus:outline-none transition-colors duration-200 text-2xl"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div 
          id="mobile-menu"
          ref={dropdownRef}
          role="menu"
          className="absolute top-full right-4 mt-2 w-64 z-[101] lg:hidden bg-secondary rounded-xl shadow-xl border border-border overflow-hidden"
          style={{
            animation: 'dropdown-enter 0.2s ease-out'
          }}
        >
            {/* Navigation Links */}
            <nav className="py-2" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  role="menuitem"
                  href={link.href}
                  className={`block px-5 py-3 text-base font-medium transition-colors duration-150 ${
                    activeSection === link.href.substring(1)
                      ? "text-accent bg-accent/10"
                      : "text-fg hover:text-accent hover:bg-accent/5"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Divider */}
            <div className="h-px bg-border mx-4"></div>
            
            {/* Social Links */}
            <div className="flex items-center justify-center gap-5 py-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-fg hover:text-accent transition-colors duration-150 text-xl"
                    onClick={() => {
                      trackSocialClick(link.label);
                      setMenuOpen(false);
                    }}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>

            {/* Divider */}
            <div className="h-px bg-border mx-4"></div>
            
            {/* Theme toggle */}
            <div className="py-2">
              <button
                onClick={() => {
                  toggleDarkMode();
                  setMenuOpen(false);
                }}
                className="flex items-center gap-3 w-full px-5 py-3 text-fg hover:text-accent hover:bg-accent/5 transition-colors duration-150"
              >
                {darkMode ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
                <span className="font-medium">{darkMode ? "Light Mode" : "Dark Mode"}</span>
              </button>
            </div>
          </div>
      )}
    </nav>
  );
};

export default Navbar;
