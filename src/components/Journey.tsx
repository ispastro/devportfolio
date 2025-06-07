import React from 'react';
import { Calendar, Code, BookOpen, Server, Database } from 'lucide-react';

type Milestone = {
  id: number;
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const Journey: React.FC = () => {
  const milestones: Milestone[] = [
    {
      id: 1,
      date: "January 2020",
      title: "Started Learning PHP",
      description: "Began my programming journey with basic PHP syntax and concepts.",
      icon: <Code className="text-[#C678DD]" size={20} />
    },
    {
      id: 2,
      date: "June 2020",
      title: "Object-Oriented Programming",
      description: "Mastered OOP principles in PHP, including classes, inheritance, and polymorphism.",
      icon: <BookOpen className="text-[#C678DD]" size={20} />
    },
    {
      id: 3,
      date: "January 2021",
      title: "Laravel Framework",
      description: "Started building web applications with Laravel, focusing on MVC architecture.",
      icon: <Server className="text-[#C678DD]" size={20} />
    },
    {
      id: 4,
      date: "July 2021",
      title: "Database Migrations & Eloquent ORM",
      description: "Learned database design, migrations, and Laravel's Eloquent ORM for efficient data handling.",
      icon: <Database className="text-[#C678DD]" size={20} />
    },
    {
      id: 5,
      date: "January 2022",
      title: "RESTful API Development",
      description: "Built RESTful APIs with Laravel, implementing authentication, validation, and resource controllers.",
      icon: <Code className="text-[#C678DD]" size={20} />
    }
  ];

  const currentlyLearning = "Laravel Policies & Advanced Authorization";

  return (
    <section id="journey" className="py-20 px-4 md:px-10 lg:px-20 bg-[#1E1E1E] text-[#ABB2BF] font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#E5C07B] drop-shadow-[0_0_8px_#E5C07B]">
            Learning Journey
          </h2>
          <p className="mt-4 text-lg text-[#ABB2BF] max-w-2xl mx-auto">
            My path from basic PHP to Laravel mastery has been a journey of continuous growth and learning.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] h-full w-0.5 bg-[#C678DD]/30"></div>
          
          {/* Timeline Content */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={milestone.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] w-4 h-4 rounded-full bg-[#C678DD] border-4 border-[#282C34] z-10"></div>
                
                {/* Content container */}
                <div className={`relative md:w-1/2 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:mr-auto' : 'md:pl-12 md:ml-auto'}`}>
                  <div className="bg-[#282C34] border border-[#C678DD]/10 rounded-xl p-6 shadow-md hover:shadow-[#C678DD]/30 transition-all hover:-translate-y-1">
                    <div className="flex items-center mb-3">
                      <Calendar size={16} className="text-[#98C379] mr-2" />
                      <span className="text-sm text-[#98C379]">{milestone.date}</span>
                    </div>
                    
                    <div className="flex items-center mb-3">
                      {milestone.icon}
                      <h3 className="text-xl font-semibold ml-2 text-[#61AFEF]">
                        {milestone.title}
                      </h3>
                    </div>
                    
                    <p className="text-[#ABB2BF] text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 bg-[#282C34] border border-[#C678DD]/10 rounded-xl p-6 shadow-md text-center">
          <h3 className="text-xl font-semibold mb-3 text-[#61AFEF]">
            Currently Learning
          </h3>
          <div className="inline-block px-4 py-2 bg-[#C678DD]/10 text-[#98C379] border border-[#C678DD]/20 rounded-full text-sm">
            {currentlyLearning}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;