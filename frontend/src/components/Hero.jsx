import React from 'react';
import { Button } from './ui/button';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import { personalInfo } from '../mock';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    window.open(personalInfo.resumeUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-1000">
          <div className="inline-block">
            <span className="text-yellow-400 text-sm font-mono bg-yellow-400/10 px-4 py-2 rounded-full border border-yellow-400/20">
              Full Stack Developer
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight">
            {personalInfo.name.split(' ')[0]}{' '}
            <span className="text-yellow-400">{personalInfo.name.split(' ')[1]}</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
            Building scalable, high-performance web applications with{' '}
            <span className="text-yellow-400 font-medium">React</span>,{' '}
            <span className="text-yellow-400 font-medium">Node.js</span>, and{' '}
            <span className="text-yellow-400 font-medium">modern tech stack</span>
          </p>

          <div className="flex items-center justify-center gap-4 pt-8">
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-yellow-400 text-black hover:bg-yellow-500 transition-all duration-300 font-semibold px-8 py-6 text-lg hover:scale-105"
            >
              View My Work
            </Button>
            <Button
              onClick={handleResumeDownload}
              variant="outline"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 font-semibold px-8 py-6 text-lg hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-yellow-400 transition-all duration-300 animate-bounce"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
