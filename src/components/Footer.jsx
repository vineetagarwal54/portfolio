import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-32 py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright and Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-fg">
            <p className="text-secondary">&copy; {new Date().getFullYear()} Vineet Agarwal</p>
            <div className="flex items-center gap-4">
              <a href="/terms" className="hover:text-accent transition-colors">Terms & Conditions</a>
              <span className="text-border">•</span>
              <a href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/vineet-agarwal-540abc/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-accent transition-colors text-fg hover:text-accent-foreground"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="https://github.com/vineetagarwal54" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-accent transition-colors text-fg hover:text-accent-foreground"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer