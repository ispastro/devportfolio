import React from 'react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
};

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "What MVC Really Means in Laravel",
      excerpt: "Understanding the Model-View-Controller architecture in Laravel and how it improves application structure and maintainability.",
      date: "May 15, 2023",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      title: "How I Built an Auth System from Scratch",
      excerpt: "A deep dive into building a secure authentication system using Laravel's built-in features and custom extensions.",
      date: "March 22, 2023",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      title: "Lessons from Building SkillLink",
      excerpt: "Key insights and challenges faced while developing a job-matching platform with Laravel and real-time features.",
      date: "January 10, 2023",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <section id="blog" className="py-20 px-4 md:px-10 lg:px-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Blog & Reflections
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto my-4"></div>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Sharing my thoughts, experiences, and insights from my journey as a Laravel developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-slate-50 dark:bg-slate-800 rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar size={16} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                  {post.title}
                </h3>
                
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  {post.excerpt}
                </p>
                
                <a 
                  href="#" 
                  className="inline-flex items-center text-cyan-500 hover:text-cyan-600 font-medium transition-colors"
                >
                  Read More <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="px-6 py-3 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 font-medium rounded-lg transition-all"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;