import React, { useState } from 'react';
import { Send, Github, Linkedin, Mail } from 'lucide-react';
import SolarSystem from './SolarSystem';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo - no actual message was sent)');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-10 lg:px-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto my-4"></div>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>
              
              <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>
              
              <div className="mb-5">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>
              
              <div className="mb-5">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                Send Message <Send size={18} />
              </button>
            </form>

            <div className="flex space-x-4 mt-8 justify-center">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 rounded-full transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 rounded-full transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              
              <a
                href="mailto:haile@example.com"
                className="flex items-center justify-center w-12 h-12 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-8 flex items-center justify-center">
            <SolarSystem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;