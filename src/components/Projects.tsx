import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-10 lg:px-20 bg-[#0f172a] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 drop-shadow-[0_0_8px_cyan] mb-6">
          About Me
        </h2>
        <p className="text-lg text-slate-300 leading-relaxed">
          I’m a passionate backend developer focused on building secure, scalable, and professional APIs using Laravel and PHP. 
          With hands-on experience in RESTful APIs, role-based systems, and secure authentication, I enjoy turning complex problems 
          into elegant backend solutions. Whether it’s crafting database schemas, handling real-world user roles, or integrating frontend needs, 
          I love diving deep into backend architecture and clean logic.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left text-slate-300">
          <div>
            <h3 className="text-cyan-300 text-xl font-semibold mb-2">Key Strengths</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>REST API Design (Laravel, Core PHP)</li>
              <li>Authentication (JWT, Sanctum, Sessions)</li>
              <li>Role-Based Access & Middleware</li>
              <li>Database Relationships & Migrations</li>
              <li>Backend-Ready for React/Redux Frontends</li>
            </ul>
          </div>
          <div>
            <h3 className="text-cyan-300 text-xl font-semibold mb-2">Currently Exploring</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Advanced Laravel Queues & Events</li>
              <li>Clean Architecture & Service Layers</li>
              <li>Testing (Feature, Unit)</li>
              <li>Core PHP Optimization</li>
              <li>DevOps Basics (Deployment, CI/CD)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
