import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#1A1F2E] to-[#12151F] text-white relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="z-10 max-w-3xl space-y-6 py-20">
        <div className="space-y-2 mb-6">
          <p className="text-[#FFB347] font-medium animate-fadeIn">
            <span className="inline-block animate-wave mr-2">👋</span>
            <span className="typed-text">Hi there</span>
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
           i'm Haile Asaye
          <span className="text-[#FFB347]">.</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-[#94A3B8] mt-2">
            <Typewriter
              words={['Backend Developer', 'Laravel API Architect']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
          <p className="text-lg md:text-xl text-[#FFB347] font-medium mt-3">
            "Engineering Reliable Systems with Clean Logic."
          </p>
        </div>

        <p className="text-[#CBD5E1] text-lg max-w-2xl mx-auto">
          I'm deeply focused on backend development — building scalable, maintainable,
          and secure systems with Laravel, REST APIs, and solid database design.
          This portfolio showcases my backend learning journey and practical projects.
        </p>

        <div className="flex justify-center flex-wrap gap-4 mt-8">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#FFB347] hover:bg-[#FFA726] text-black font-semibold rounded-lg flex items-center gap-2 transition-all animate-glow"
          >
            See My Backend Projects <ArrowRight size={18} />
          </a>
          <a
            href="#"
            className="px-6 py-3 bg-transparent hover:bg-[#FF6B6B]/10 text-[#FF6B6B] border border-[#FF6B6B]/50 font-medium rounded-lg flex items-center gap-2 transition-all"
          >
            Download Backend CV <Download size={18} />
          </a>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <a
            href="https://github.com/ispastro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#FFB347] transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/haile-asaye21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#FFB347] transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:haileasaye51@gmail.com"
            className="text-white hover:text-[#FFB347] transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
