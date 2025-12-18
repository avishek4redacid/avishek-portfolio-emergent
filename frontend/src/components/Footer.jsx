import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Left: Logo & Copyright */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-white mb-2">
              {personalInfo.name.split(' ')[0]}{' '}
              <span className="text-yellow-400">{personalInfo.name.split(' ')[1]}</span>
            </div>
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-start">
              © {currentYear} • Built with <Heart className="w-4 h-4 text-yellow-400 mx-1" /> and React
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="flex items-center space-x-8">
            {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
