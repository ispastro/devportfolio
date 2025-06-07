import React from 'react';
import {
  SiPhp, SiJavascript, SiTypescript, SiMysql, SiHtml5, SiCss3,
  SiLaravel, SiReact, SiTailwindcss, SiBootstrap, SiJquery,
  SiGit, SiVscodium, SiComposer, SiXampp
} from 'react-icons/si';
import { FaCheck } from 'react-icons/fa';

const skillMap: Record<string, JSX.Element> = {
  PHP: <SiPhp className="text-[#8993be]" />,
  JavaScript: <SiJavascript className="text-[#f0db4f]" />,
  TypeScript: <SiTypescript className="text-[#3178c6]" />,
  SQL: <SiMysql className="text-[#00758f]" />,
  HTML: <SiHtml5 className="text-[#e44d26]" />,
  CSS: <SiCss3 className="text-[#264de4]" />,
  Laravel: <SiLaravel className="text-[#ff2d20]" />,
  React: <SiReact className="text-[#61dafb]" />,
  'Tailwind CSS': <SiTailwindcss className="text-[#38bdf8]" />,
  Bootstrap: <SiBootstrap className="text-[#563d7c]" />,
  jQuery: <SiJquery className="text-[#0769ad]" />,
  Git: <SiGit className="text-[#f1502f]" />,
  'VS Code': <SiVscodium className="text-[#007acc]" />,
  Composer: <SiComposer className="text-[#885630]" />,
  XAMPP: <SiXampp className="text-[#fb7a24]" />,
};

type SkillCategory = {
  title: string;
  skills: string[];
};

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    { title: 'Languages', skills: ['PHP', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'] },
    { title: 'Frameworks', skills: ['Laravel', 'React', 'Tailwind CSS', 'Bootstrap', 'jQuery'] },
    { title: 'Tools', skills: ['Git', 'VS Code', 'Composer', 'XAMPP', 'Termux'] },
    { title: 'Concepts', skills: ['MVC Architecture', 'RESTful APIs', 'OOP', 'Authentication', 'Database Design'] }
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 md:px-10 lg:px-20 bg-[#1E1E1E] text-[#ABB2BF] font-mono"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#E5C07B] drop-shadow-[0_0_8px_#E5C07B]">
            Skills & Expertise
          </h2>
          <p className="mt-4 text-lg text-[#ABB2BF] max-w-2xl mx-auto">
            My technical toolbox includes languages, frameworks, and patterns I use to build secure and scalable systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#282C34] border border-[#C678DD]/10 rounded-xl p-6 shadow-md hover:shadow-[#C678DD]/30 transition-all hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#61AFEF] border-b border-[#C678DD]/30 pb-2">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center space-x-3 text-[#ABB2BF]">
                    {skillMap[skill] || <FaCheck className="text-[#98C379]" />}
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
