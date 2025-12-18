import React from 'react';
import { techStack } from '../mock';
import * as Icons from 'lucide-react';
import { Badge } from './ui/badge';

const TechStack = () => {
  const categories = [
    { title: 'Frontend', items: techStack.frontend, color: 'from-yellow-400/20 to-yellow-400/5' },
    { title: 'Backend', items: techStack.backend, color: 'from-yellow-400/15 to-yellow-400/5' },
    { title: 'Database', items: techStack.database, color: 'from-yellow-400/10 to-yellow-400/5' },
    { title: 'Tools & Others', items: techStack.tools, color: 'from-yellow-400/10 to-yellow-400/5' }
  ];

  return (
    <section id="tech-stack" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-yellow-400 text-sm font-mono uppercase tracking-wider">Technologies</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Tech Stack</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive set of modern technologies I use to build robust and scalable applications
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <div key={catIndex} className="">
              <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {category.items.map((tech, techIndex) => {
                  const IconComponent = Icons[tech.icon];
                  return (
                    <div
                      key={techIndex}
                      className={`bg-gradient-to-br ${category.color} border border-gray-800 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105 group cursor-pointer`}
                    >
                      <div className="flex flex-col items-center space-y-3">
                        <div className="bg-yellow-400/10 w-14 h-14 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors duration-300">
                          {IconComponent && <IconComponent className="w-7 h-7 text-yellow-400" />}
                        </div>
                        <div className="text-center">
                          <div className="text-white font-semibold text-sm mb-1">{tech.name}</div>
                          <Badge variant="secondary" className="bg-yellow-400/10 text-yellow-400 border-0 text-xs">
                            {tech.proficiency}%
                          </Badge>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-white mb-6">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Microservices', 'CI/CD', 'Agile/Scrum', 'Unit Testing', 'WebSocket', 'Payment Gateways', 'OAuth', 'JWT', 'API Design', 'Cloud Services'].map(
              (skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="border-yellow-400/30 text-gray-300 hover:bg-yellow-400/10 hover:text-yellow-400 transition-colors duration-300 px-4 py-2"
                >
                  {skill}
                </Badge>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
