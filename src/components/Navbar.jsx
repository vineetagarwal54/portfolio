import { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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
  { name: "Skills", href: "#technologies" },
  { name: "Experience", href: "#experience-education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const hamburgerRef = useRef(null);

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
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside, { passive: true });
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.setAttribute("data-theme", "dark");
      setDarkMode(true);
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 140; // offset > navbar + breathing room

      let current = sections[0];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element && scrollPosition >= element.offsetTop) {
          current = sectionId;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-xl border-b border-border/60 shadow-[0_1px_12px_rgba(0,0,0,0.04)]"
          : "bg-bg/60 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="shell flex h-[72px] items-center justify-between">
        <a href="#home" aria-label="Home" className="flex items-center">
          <img
            src={logo}
            className="h-9 w-auto object-contain transition-transform duration-300 hover:scale-105 sm:h-10"
            alt="logo"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-accent-foreground bg-accent"
                    : "text-fg/80 hover:text-fg hover:bg-secondary/60"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Desktop socials + theme */}
        <div className="hidden lg:flex items-center gap-2">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                onClick={() => trackSocialClick(link.label)}
                className="flex h-9 w-9 items-center justify-center rounded-full text-fg/75 transition-colors duration-200 hover:text-accent hover:bg-secondary/60"
              >
                <Icon className="text-lg" />
              </a>
            );
          })}

          <button
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-full text-fg/75 transition-colors duration-200 hover:text-accent hover:bg-secondary/60"
          >
            {darkMode ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="flex h-10 w-10 items-center justify-center rounded-full text-fg/80 transition-colors duration-200 hover:text-accent hover:bg-secondary/60"
          >
            {darkMode ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
          </button>
          <button
            ref={hamburgerRef}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-fg/80 transition-colors duration-200 hover:text-accent hover:bg-secondary/60"
          >
            {menuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          ref={dropdownRef}
          role="menu"
          className="absolute right-4 top-[calc(100%+4px)] w-64 overflow-hidden rounded-2xl border border-border bg-secondary shadow-2xl lg:hidden"
          style={{ animation: "dropdown-enter 0.2s ease-out" }}
        >
          <nav className="py-2" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  role="menuitem"
                  href={link.href}
                  className={`block px-5 py-3 text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? "bg-accent/10 text-accent"
                      : "text-fg hover:bg-accent/5 hover:text-accent"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="mx-4 h-px bg-border" />

          <div className="flex items-center justify-center gap-4 py-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  onClick={() => {
                    trackSocialClick(link.label);
                    setMenuOpen(false);
                  }}
                  className="text-fg/80 transition-colors duration-150 hover:text-accent text-xl"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
