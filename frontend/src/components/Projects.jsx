import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { projects } from '../mock';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-yellow-400 text-sm font-mono uppercase tracking-wider">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Featured Projects</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A showcase of impactful projects I've built for leading companies and innovative startups
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-yellow-400/50 transition-all duration-300 group cursor-pointer overflow-hidden"
              onClick={() => setSelectedProject(project)}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <CardTitle className="text-2xl text-white group-hover:text-yellow-400 transition-colors duration-300">
                      {project.name}
                    </CardTitle>
                    <CardDescription className="text-gray-400 mt-2">
                      {project.role} • {project.duration}
                    </CardDescription>
                  </div>
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 hover:scale-110"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {/* Technologies */}
                  <div>
                    <div className="text-gray-400 text-xs font-semibold mb-2 uppercase">Tech Stack</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <div className="text-gray-400 text-xs font-semibold mb-2 uppercase">Key Achievements</div>
                    <ul className="space-y-1">
                      {project.highlights.slice(0, 2).map((highlight, index) => (
                        <li key={index} className="text-gray-400 text-sm flex items-start">
                          <ChevronRight className="w-4 h-4 text-yellow-400 mr-1 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full text-yellow-400 hover:bg-yellow-400/10 transition-colors duration-300 mt-2"
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/30 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.name}</h3>
                <p className="text-gray-400">
                  {selectedProject.role} • {selectedProject.duration}
                </p>
              </div>
              <a
                href={selectedProject.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-500 transition-colors"
              >
                <ExternalLink className="w-6 h-6" />
              </a>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.description}</p>

            <div className="space-y-6">
              <div>
                <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-yellow-400/10 text-yellow-400 border border-yellow-400/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((highlight, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <ChevronRight className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Button
              onClick={() => setSelectedProject(null)}
              className="w-full mt-6 bg-yellow-400 text-black hover:bg-yellow-500 transition-colors duration-300"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
