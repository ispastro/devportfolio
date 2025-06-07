import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-6 px-4 text-center">
      <div className="flex justify-center space-x-4 mb-4">
        <a
          href="https://github.com/ispastro"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href="https://linkedin.com/in/haile-asaye21"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:haileasaye51@gmail.com"
          className="hover:text-cyan-400 transition-colors"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
      </div>
      <p className="text-sm">&copy; {new Date().getFullYear()} Haile Asaye</p>
    </footer>
  );
};

export default Footer;
