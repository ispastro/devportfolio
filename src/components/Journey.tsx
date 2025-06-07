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
      icon: <Code className="text-cyan-500" size={24} />
    },
    {
      id: 2,
      date: "June 2020",
      title: "Object-Oriented Programming",
      description: "Mastered OOP principles in PHP, including classes, inheritance, and polymorphism.",
      icon: <BookOpen className="text-cyan-500\" size={24} />
    },
    {
      id: 3,
      date: "January 2021",
      title: "Laravel Framework",
      description: "Started building web applications with Laravel, focusing on MVC architecture.",
      icon: <Server className="text-cyan-500" size={24} />
    },
    {
      id: 4,
      date: "July 2021",
      title: "Database Migrations & Eloquent ORM",
      description: "Learned database design, migrations, and Laravel's Eloquent ORM for efficient data handling.",
      icon: <Database className="text-cyan-500\" size={24} />
    },
    {
      id: 5,
      date: "January 2022",
      title: "RESTful API Development",
      description: "Built RESTful APIs with Laravel, implementing authentication, validation, and resource controllers.",
      icon: <Code className="text-cyan-500" size={24} />
    }
  ];

  const currentlyLearning = "Laravel Policies & Advanced Authorization";

  return (
    <section id="journey" className="py-20 px-4 md:px-10 lg:px-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Learning Journey
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto my-4"></div>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            My path from basic PHP to Laravel mastery has been a journey of continuous growth and learning.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] h-full w-1 bg-slate-200 dark:bg-slate-700"></div>
          
          {/* Timeline Content */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={milestone.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] w-6 h-6 rounded-full bg-cyan-500 border-4 border-white dark:border-slate-800 z-10"></div>
                
                {/* Content container */}
                <div className={`relative md:w-1/2 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:mr-auto' : 'md:pl-12 md:ml-auto'}`}>
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-3">
                      <Calendar size={18} className="text-cyan-500 mr-2" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">{milestone.date}</span>
                    </div>
                    
                    <div className="flex items-center mb-3">
                      {milestone.icon}
                      <h3 className="text-xl font-semibold ml-2 text-slate-900 dark:text-white">
                        {milestone.title}
                      </h3>
                    </div>
                    
                    <p className="text-slate-700 dark:text-slate-300">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
            Currently Learning
          </h3>
          <div className="inline-block px-4 py-2 bg-cyan-500 text-white font-medium rounded-full">
            {currentlyLearning}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;