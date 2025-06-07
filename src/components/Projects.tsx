import React, { useState } from 'react';
import { Github, ExternalLink, BookOpen } from 'lucide-react';

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

const Projects: React.FC = () => {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "JobMatch",
      description: "A Laravel API-based job matching platform that connects service seekers with blue-collar workers using role-based access, job listings, and applications.",
      techStack: ["Laravel", "MySQL", "REST API", "JWT Auth"],
      githubLink: "https://github.com/yourusername/JobMatch",
      image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      learned: "Built scalable RESTful APIs, role middleware, and applied Laravel best practices for authentication and authorization."
    },
    {
      id: 2,
      title: "HealthConsultancy",
      description: "Backend for a professional health consultancy platform with doctor-patient profiles, secure login, and Redux-ready API endpoints.",
      techStack: ["Laravel", "MySQL", "Sanctum", "API Resources"],
      githubLink: "https://github.com/yourusername/HealthConsultancy",
      image: "https://images.pexels.com/photos/7089028/pexels-photo-7089028.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      learned: "Implemented patient/doctor roles, profile handling, and protected routes using Sanctum for frontend integration."
    },
    {
      id: 3,
      title: "TaskManager",
      description: "API-powered task management system designed for team collaboration, with tasks, user roles, and notification logic.",
      techStack: ["Laravel", "MySQL", "API", "Notifications"],
      githubLink: "https://github.com/yourusername/TaskManager",
      image: "https://images.pexels.com/photos/8867434/pexels-photo-8867434.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      learned: "Handled API route structuring, notification dispatch, and task-user assignment logic using Laravel features."
    },
    {
      id: 4,
      title: "Novapad",
      description: "A custom-built note-taking web app using Core PHP and MySQL, with CRUD functionality and authentication.",
      techStack: ["Core PHP", "MySQL", "Bootstrap", "Sessions"],
      githubLink: "https://github.com/yourusername/Novapad",
      image: "https://images.pexels.com/photos/3771071/pexels-photo-3771071.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      learned: "Deepened understanding of procedural PHP, session handling, and security fundamentals without a framework."
    }
  ]);

  return (
    <section id="projects" className="py-20 px-4 md:px-10 lg:px-20 bg-[#0f172a] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 drop-shadow-[0_0_8px_cyan] mb-6">
          Backend Projects
        </h2>
        <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
          These backend-focused projects demonstrate my practical experience building robust APIs and handling server-side logic using Laravel and PHP.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#1a1f2e] border border-cyan-500/10 rounded-xl shadow-md hover:shadow-cyan-500/20 transition-all hover:-translate-y-1"
            >
              <div className="h-44 overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">{project.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-cyan-500/10 text-cyan-200 border border-cyan-500/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="border-t border-cyan-500/10 pt-4 mt-4">
                  <h4 className="flex items-center text-cyan-400 font-medium text-sm mb-2">
                    <BookOpen size={16} className="mr-2" />
                    What I Learned
                  </h4>
                  <p className="text-slate-400 text-xs">
                    {project.learned}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-5 text-sm">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>

                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
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
