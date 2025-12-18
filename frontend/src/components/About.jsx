import React from 'react';
import { Code2, Zap, Users, Trophy } from 'lucide-react';
import { personalInfo } from '../mock';

const About = () => {
  const stats = [
    { icon: Code2, label: 'Years Experience', value: '6+' },
    { icon: Zap, label: 'Projects Completed', value: '20+' },
    { icon: Users, label: 'Happy Clients', value: '15+' },
    { icon: Trophy, label: 'Technologies', value: '25+' }
  ];

  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-yellow-400 text-sm font-mono uppercase tracking-wider">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Who I Am</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Bio */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="text-gray-400 leading-relaxed">
              Throughout my career, I've had the privilege of working with leading companies like <span className="text-yellow-400 font-semibold">Reliance (Jio World Drive)</span> and innovative startups, where I've contributed to building products that serve millions of users.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I'm passionate about writing clean, maintainable code and staying up-to-date with the latest technologies and best practices in web development.
            </p>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="bg-yellow-400/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-400/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Strengths */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Frontend Excellence</h3>
            <p className="text-gray-400 text-sm">
              Expert in React, Next.js, and Redux-Saga for building responsive, performant user interfaces with excellent UX.
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Backend Mastery</h3>
            <p className="text-gray-400 text-sm">
              Proficient in Node.js, Express, and database design for creating scalable APIs and microservices architectures.
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Performance Optimization</h3>
            <p className="text-gray-400 text-sm">
              Skilled in optimizing application performance, reducing load times, and ensuring smooth user experiences at scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
