import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

type HeaderProps = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/10 dark:bg-slate-900/20 backdrop-blur-md shadow-md border-b border-white/10 dark:border-slate-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className="text-2xl font-bold tracking-wide text-slate-900 dark:text-white flex items-center gap-1"
          >
            <span className="text-cyan-400 animate-pulse font-mono">Haile</span>
            <span className="text-white dark:text-cyan-500 font-mono">.dev</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="relative text-slate-700 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-300 font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="ml-2 p-2 rounded-full border border-cyan-500 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:ring-2 ring-cyan-400/50 transition-all"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Buttons */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden bg-white dark:bg-slate-900 shadow-md absolute w-full transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col px-4 py-4 space-y-2">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={closeMenu}
              className="py-2 text-slate-700 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-300 font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
