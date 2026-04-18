import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-8 border-t border-border/60 py-10">
      <div className="shell flex flex-col items-center justify-between gap-5 md:flex-row">
        <p className="text-sm text-fg/60">
          &copy; {new Date().getFullYear()} Vineet Agarwal. Built with care.
        </p>

        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/vineet-agarwal-540abc/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full text-fg/70 transition-colors duration-200 hover:bg-secondary/60 hover:text-accent"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://github.com/vineetagarwal54"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full text-fg/70 transition-colors duration-200 hover:bg-secondary/60 hover:text-accent"
          >
            <FaGithub size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
