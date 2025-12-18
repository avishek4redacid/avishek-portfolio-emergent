import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { experience } from '../mock';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-yellow-400 text-sm font-mono uppercase tracking-wider">Career Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Work Experience</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My professional journey building impactful products for diverse industries
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400/50 via-yellow-400/20 to-transparent"></div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-black z-10"></div>

                {/* Card */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-yellow-400/50 transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="bg-yellow-400/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors duration-300">
                          <Briefcase className="w-6 h-6 text-yellow-400" />
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.duration}
                        </div>
                      </div>
                      <CardTitle className="text-2xl text-white group-hover:text-yellow-400 transition-colors duration-300">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="flex items-center text-gray-400 mt-2">
                        <span className="font-semibold text-yellow-400">{exp.company}</span>
                        <span className="mx-2">•</span>
                        <span className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {exp.location}
                        </span>
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                      <div>
                        <div className="text-gray-400 text-xs font-semibold mb-2 uppercase">Key Contributions</div>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-gray-400 text-sm flex items-start">
                              <ChevronRight className="w-4 h-4 text-yellow-400 mr-1 mt-0.5 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
