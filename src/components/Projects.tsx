import React, { useState } from 'react';
import { 
  SiLaravel, SiPhp, SiMysql, SiReact, SiBootstrap, SiTypescript,
 
} from 'react-icons/si';

type Project = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  demoLink?: string;
  image: string;
  learned: string;
};

const techIconMap: Record<string, JSX.Element> = {
  Laravel: <SiLaravel className="text-[#ff2d20]" />,
  PHP: <SiPhp className="text-[#8993be]" />,
  MySQL: <SiMysql className="text-[#00758f]" />,
  React: <SiReact className="text-[#61dafb]" />,
  Bootstrap: <SiBootstrap className="text-[#563d7c]" />,
  TypeScript: <SiTypescript className="text-[#3178c6]" />,
};

const Projects: React.FC = () => {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "JobMatch",
      description: "A Laravel API-based job matching platform that connects service seekers with blue-collar workers using role-based access, job listings, and applications.",
      techStack: ["Laravel", "MySQL", "REST API", "JWT Auth"],
      githubLink: "https://github.com/ispastro/JobMatch",
      image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      learned: "Built scalable RESTful APIs, role middleware, and applied Laravel best practices for authentication and authorization."
    },
    


    {
      id: 1,
      title: "TaskManager",
      description: "A Laravel API-based task management platform that task creation, filtering, validation, task listings, and applications.",
      techStack: ["Laravel", "MySQL", "REST API", "JWT Auth"],
      githubLink: "https://github.com/ispastro/backend",
      image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      learned: "Built scalable RESTful APIs, role middleware, and applied Laravel best practices for authentication and authorization."
    },
    
    {
      id: 1,
      title: "novapad",
      description: "note taking app that helps users organize their thoughts and ideas.",
      techStack: ["Laravel", "MySQL", "REST API", "JWT Auth"],
      githubLink: "https://github.com/ispastro/novapad",
      image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      learned: "built with the core PHP and oop principles applied  with MVC artictecture and  and posgress database via remote supabase."
    },
    
    {
      id: 1,
      title: "HealthConsult",
      description: "A Laravel API-based health consultation platform that connects patients with healthcare professionals using role-based access, appointment scheduling, and video consultations.",
      techStack: ["Laravel", "MySQL", "REST API", "JWT Auth"],
      githubLink: "https://github.com/ispastro/Health_consultancy",
      image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      learned: "Built scalable RESTful APIs, role middleware, and applied Laravel best practices for authentication and authorization."
    },
    
  ]);

  return (
    <section 
      id="projects" 
      className="py-20 px-4 md:px-10 lg:px-20 bg-[#1E1E1E] text-[#ABB2BF] font-mono"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#E5C07B] drop-shadow-[0_0_8px_#E5C07B]">
            Backend Projects
          </h2>
          <p className="mt-4 text-lg text-[#ABB2BF] max-w-2xl mx-auto">
            These backend-focused projects demonstrate my practical experience building robust APIs and handling server-side logic.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#282C34] border border-[#C678DD]/10 rounded-xl shadow-md hover:shadow-[#C678DD]/30 transition-all hover:-translate-y-1"
            >
              <div className="h-44 overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#61AFEF]">
                  {project.title}
                </h3>
                <p className="text-[#ABB2BF] text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="flex items-center px-3 py-1 text-xs bg-[#2c313a] text-[#ABB2BF] border border-[#3e4451] rounded-full"
                    >
                      {techIconMap[tech] || tech}
                    </span>
                  ))}
                </div>

                <div className="border-t border-[#3e4451] pt-4 mt-4">
                  <h4 className="flex items-center text-[#61AFEF] font-medium text-sm mb-2">
                
                  </h4>
                  <p className="text-[#ABB2BF] text-sm">
                    {project.learned}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-6 pt-4 border-t border-[#3e4451] text-sm">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#ABB2BF] hover:text-[#98C379] transition-colors"
                  >
                   View on GitHub
                  </a>

                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[#ABB2BF] hover:text-[#98C379] transition-colors"
                    >
                      view on github
                   
                    </a>

                    
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;