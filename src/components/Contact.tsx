import React, { useState } from 'react';
import { Send, Github, Linkedin, Mail } from 'lucide-react';

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
    <section id="contact" className="py-20 px-4 md:px-10 lg:px-20 bg-[#1E1E1E] text-[#ABB2BF] font-mono">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#E5C07B] drop-shadow-[0_0_8px_#E5C07B]">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-[#ABB2BF] max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="bg-[#282C34] border border-[#C678DD]/10 rounded-xl shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#61AFEF] mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#2c313a] border border-[#3e4451] rounded-lg focus:ring-2 focus:ring-[#C678DD] focus:border-transparent text-[#ABB2BF]"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#61AFEF] mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#2c313a] border border-[#3e4451] rounded-lg focus:ring-2 focus:ring-[#C678DD] focus:border-transparent text-[#ABB2BF]"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-[#61AFEF] mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#2c313a] border border-[#3e4451] rounded-lg focus:ring-2 focus:ring-[#C678DD] focus:border-transparent text-[#ABB2BF]"
                placeholder="What's this about?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#61AFEF] mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-[#2c313a] border border-[#3e4451] rounded-lg focus:ring-2 focus:ring-[#C678DD] focus:border-transparent text-[#ABB2BF] resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#C678DD] hover:bg-[#d68aed] text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              Send Message <Send size={18} />
            </button>
          </form>

          <div className="flex space-x-4 mt-8 justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-[#2c313a] border border-[#3e4451] text-[#ABB2BF] hover:text-[#98C379] rounded-full transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-[#2c313a] border border-[#3e4451] text-[#ABB2BF] hover:text-[#61AFEF] rounded-full transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            
            <a
              href="mailto:haile@example.com"
              className="flex items-center justify-center w-12 h-12 bg-[#2c313a] border border-[#3e4451] text-[#ABB2BF] hover:text-[#E5C07B] rounded-full transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;