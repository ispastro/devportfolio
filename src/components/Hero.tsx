import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import ParticlesBackground from './ParticlesBackground';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-10 lg:px-20 bg-[#1E1E1E] text-[#ABB2BF] font-mono relative overflow-hidden text-center py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <div className="z-10 max-w-4xl w-full space-y-8">
        {/* Greeting */}
        <div className="space-y-3 mb-8">
          <p className="text-[#E5C07B] font-medium text-lg animate-fadeIn">
            <span className="inline-block animate-wave mr-2">👋</span> Hello there
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#61AFEF] drop-shadow-[0_0_6px_#61AFEF]">
            I'm Haile Asaye<span className="text-[#C678DD]">.</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-[#98C379] mt-2">
            <Typewriter
              words={['Backend Developer', 'Laravel API Architect']}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-[#C678DD] text-lg font-medium">
            "Engineering Reliable Systems with Clean Logic."
          </p>
        </div>

        {/* Summary */}
        <p className="text-[#ABB2BF] text-base md:text-lg max-w-2xl mx-auto">
          I specialize in backend development—building scalable, secure, and maintainable systems
          using Laravel, RESTful APIs, and well-architected databases. This portfolio showcases my technical growth and real-world projects.
        </p>

        {/* Call to Actions */}
        <div className="flex justify-center flex-wrap gap-4 mt-8">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#C678DD] hover:bg-[#C678DD]/80 text-[#282C34] font-semibold rounded-xl shadow-md hover:shadow-[#C678DD]/30 transition-all flex items-center gap-2"
          >
            Projects <ArrowRight size={18} />
          </a>

          <a
            href="/haile-asaye-cv.pdf"
            className="px-6 py-3 border border-[#61AFEF]/40 text-[#61AFEF] hover:bg-[#61AFEF]/10 font-medium rounded-xl flex items-center gap-2 transition-all"
          >
            Download CV <Download size={18} />
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8 text-[#ABB2BF]">
          <a
            href="https://github.com/ispastro"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C678DD] transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>

          <a
            href="https://linkedin.com/in/haile-asaye21"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C678DD] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>

          <a
            href="mailto:haileasaye51@gmail.com"
            className="hover:text-[#C678DD] transition-colors"
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
