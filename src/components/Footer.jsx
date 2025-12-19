import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-32 py-12 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright */}
          <p className="text-fg/60 text-sm">&copy; {new Date().getFullYear()} Vineet Agarwal. Built with ☕ & 💻</p>

          {/* Social Links - Floating Bubbles */}
          <div className="flex items-center gap-3">
            <a 
              href="https://www.linkedin.com/in/vineet-agarwal-540abc/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/60 backdrop-blur-sm shadow-md hover:shadow-xl hover:scale-110 hover:-rotate-6 transition-all duration-300 text-fg hover:text-accent"
            >
              <FaLinkedin size={22} />
            </a>
            <a 
              href="https://github.com/vineetagarwal54" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/60 backdrop-blur-sm shadow-md hover:shadow-xl hover:scale-110 hover:rotate-6 transition-all duration-300 text-fg hover:text-accent"
            >
              <FaGithub size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer