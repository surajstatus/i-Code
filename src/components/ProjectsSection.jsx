// ProjectsSection.js
import React from 'react';
import { Github, ChevronLeft, ChevronRight} from 'lucide-react';

const ProjectsSection = ({ projects, currentProject, setCurrentProject, nextProject, prevProject }) => {
  return (
    <section id="projects" className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              Explore my latest work showcasing modern web development practices and innovative solutions
            </p>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={project.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
                      <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2 mb-6 lg:mb-0">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-[65vh] object-cover rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <div className="lg:w-1/2 lg:pl-8">
                          <h3 className="text-3xl font-bold mb-4 text-purple-300">{project.title}</h3>
                          <p className="text-lg mb-6 opacity-90">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((tech, techIndex) => (
                              <span 
                                key={techIndex}
                                className="bg-purple-500 bg-opacity-20 px-3 py-1 rounded-full text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-4">
                            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
                              <Github className="inline w-4 h-4 mr-2" />
                              Code
                            </button>
                            <button className="border-2 border-purple-400 px-6 py-2 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-200">
                              Live Demo
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button 
              onClick={prevProject}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-md p-3 rounded-full hover:bg-opacity-30 transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextProject}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-md p-3 rounded-full hover:bg-opacity-30 transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Dot Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentProject ? 'bg-purple-400' : 'bg-white bg-opacity-30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default ProjectsSection;
