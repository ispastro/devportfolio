import React from 'react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-16 lg:px-28 bg-[#1E1E1E] text-[#ABB2BF] font-mono tracking-wide leading-relaxed"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5C07B] drop-shadow-[0_0_8px_#E5C07B]">
            About <span className="italic text-[#61AFEF]">Me</span>
          </h2>
          <p className="text-md md:text-lg text-[#98C379] mt-2">
            A classic story of grit, code, and quiet ambition.
          </p>
          <div className="w-24 h-1 mt-6 bg-[#C678DD] mx-auto rounded-full" />
        </div>

        <div className="space-y-10 text-lg">
          <p>
            My journey into tech didn’t start in a glossy lab or an Ivy League classroom.
            It began with a second-hand Android phone and{' '}
            <span className="text-[#61AFEF] font-semibold">Termux</span> —
            a mobile terminal emulator that sparked a revolution inside me.
            With nothing but curiosity, I turned limitations into stepping stones.
          </p>

          <p>
            I’m a{' '}
            <span className="font-semibold text-[#E5C07B]">
              self-taught Full-Stack Developer
            </span>{' '}
            with a formal background in{' '}
            <span className="text-[#61AFEF] font-medium">Information Systems</span>{' '}
            from Addis Ababa University. But most of what I know, I learned by building things I believed in — line by line, bug by bug.
          </p>

          <p>
            Today, I focus on building{' '}
            <span className="text-[#98C379] font-medium">scalable and secure web applications</span>{' '}
            using technologies like{' '}
            <span className="text-[#61AFEF] font-medium">
              PHP, Laravel, MySQL, and REST APIs
            </span>. My passion lies in creating tools that empower people — not just impress machines.
          </p>

          <blockquote className="relative pl-6 italic border-l-4 border-[#61AFEF] bg-[#282C34] py-4 rounded-md shadow-sm text-[#ABB2BF]">
            <span className="text-xl">
              "I don't code for claps — I code for change, for confidence, and for the kid still using Termux."
            </span>
          </blockquote>

          <p>
            My work ethic is grounded in continuous learning. Whether it's exploring backend architecture,
            experimenting with new APIs, or reading clean code philosophies — I treat every day as version 1.0.
          </p>

          <p className="text-center text-sm text-[#5C6370] mt-12">
            → Let’s build something timeless.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
