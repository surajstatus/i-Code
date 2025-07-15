// ProjectsSection.js
import React, { useState, useEffect, useRef } from 'react';
import { Github, ChevronLeft, ChevronRight, ExternalLink, Sparkles, Zap, Star, Eye } from 'lucide-react';

const ProjectsSection = ({ projects, currentProject, setCurrentProject, nextProject, prevProject }) => {
  // const [activeIndex, setActiveIndex] = useState(currentProject || 0);
  const [activeIndex, setActiveIndex] = useState(1); // start at real first slide

  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef(null);

  const mockProjects = projects || [
    {
      id: 1,
      title: "AI-Powered Dashboard",
      description: "Revolutionary analytics platform with real-time AI insights and predictive modeling capabilities that transform raw data into actionable intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tech: ["React", "Node.js", "Python", "TensorFlow", "AWS"],
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "3D Interactive Portfolio",
      description: "Immersive 3D web experience showcasing creative projects with WebGL animations and interactive particle systems.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
      tech: ["Three.js", "React", "GSAP", "WebGL", "Blender"],
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Neural Network Visualizer",
      description: "Educational tool for visualizing neural networks in real-time with interactive training sessions and dynamic architecture modifications.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
      tech: ["D3.js", "Python", "PyTorch", "React", "FastAPI"],
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "Blockchain Explorer",
      description: "Advanced blockchain analytics platform with real-time transaction tracking and smart contract analysis capabilities.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      tech: ["React", "Web3.js", "Solidity", "Node.js", "MongoDB"],
      github: "#",
      demo: "#"
    },
    {
      id: 5,
      title: "VR Social Platform",
      description: "Next-generation social platform with virtual reality integration and real-time 3D avatar interactions.",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=800&h=600&fit=crop",
      tech: ["Unity", "C#", "WebXR", "React", "Socket.io"],
      github: "#",
      demo: "#"
    }
  ];

  // const displayProjects = mockProjects;

  const displayProjects = [
    mockProjects[mockProjects.length - 1], // duplicate last item at start
    ...mockProjects,
    mockProjects[0] // duplicate first item at end
  ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!isHovered && !isDragging) {
  //       setActiveIndex((prev) => (prev + 1) % displayProjects.length);
  //     }
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [isHovered, isDragging, displayProjects.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered && !isDragging) {
        setActiveIndex(prev => prev + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, isDragging]);



  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setDragStart(e.touches ? e.touches[0].clientX : e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    setDragOffset(currentX - dragStart);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (Math.abs(dragOffset) > 50) {
      if (dragOffset > 0) {
        setActiveIndex((prev) => (prev - 1 + displayProjects.length) % displayProjects.length);
      } else {
        setActiveIndex((prev) => (prev + 1) % displayProjects.length);
      }
    }
    setDragOffset(0);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
    if (setCurrentProject) setCurrentProject(index);
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + displayProjects.length) % displayProjects.length);
    if (prevProject) prevProject();
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % displayProjects.length);
    if (nextProject) nextProject();
  };

  // const getCardTransform = (index) => {
  //   const diff = index - activeIndex;
  //   const absDistance = Math.abs(diff);
  //   if (absDistance > 2 && absDistance < displayProjects.length - 2) return null;
  //   const direction = diff > 0 ? 1 : -1;
  //   if (absDistance === 0) {
  //     return { translateX: dragOffset, scale: 1, zIndex: 10, opacity: 1, rotateY: dragOffset * 0.1, blur: 0 };
  //   } else if (absDistance === 1 || absDistance === displayProjects.length - 1) {
  //     return { translateX: direction * 300 + dragOffset * 0.3, scale: 0.85, zIndex: 5, opacity: 0.7, rotateY: direction * 25 + dragOffset * 0.05, blur: 2 };
  //   } else {
  //     return { translateX: direction * 450 + dragOffset * 0.1, scale: 0.7, zIndex: 2, opacity: 0.4, rotateY: direction * 45 + dragOffset * 0.02, blur: 4 };
  //   }
  // };

  const getCardTransform = (index) => {
    const total = displayProjects.length;
    const normalizedIndex = (index - activeIndex + total) % total;

    let diff = normalizedIndex;
    if (diff > total / 2) diff -= total;

    const absDistance = Math.abs(diff);
    const direction = diff > 0 ? 1 : -1;

    if (absDistance > 2) return null;

    if (absDistance === 0) {
      return { translateX: dragOffset, scale: 1, zIndex: 10, opacity: 1, rotateY: dragOffset * 0.1, blur: 0 };
    } else if (absDistance === 1) {
      return {
        translateX: direction * 300 + dragOffset * 0.3,
        scale: 0.85,
        zIndex: 5,
        opacity: 0.7,
        rotateY: direction * 25 + dragOffset * 0.05,
        blur: 2
      };
    } else {
      return {
        translateX: direction * 450 + dragOffset * 0.1,
        scale: 0.7,
        zIndex: 2,
        opacity: 0.4,
        rotateY: direction * 45 + dragOffset * 0.02,
        blur: 4
      };
    }
  };



  return (
    <section id="projects"
      ref={containerRef}
      className="relative z-10 py-12 md:py-20 px-4 overflow-hidden min-h-screen flex flex-col justify-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-blue-900/20">
        {/* Dynamic Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

        {/* Interactive Cursor Light */}
        <div
          className="absolute w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl pointer-events-none transition-all duration-300 opacity-0 md:opacity-100"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
            transform: isHovered ? 'scale(2)' : 'scale(1)'
          }}
        />

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-float-random opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative w-full">
        {/* Title Section */}
        <div className="text-center mb-8 md:mb-16 relative">
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-4 md:mb-6">
            <Sparkles className="text-yellow-400 animate-spin-slow" size={24} />
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-shift">
              Featured Projects
            </h2>
            <Zap className="text-yellow-400 animate-bounce" size={24} />
          </div>

          <p className="text-base md:text-xl opacity-80 max-w-3xl mx-auto px-4">
            Swipe through my latest work showcasing cutting-edge development
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative h-[500px] md:h-[600px] lg:h-[700px] perspective-1000">
          {/* Cards */}
          <div className="relative w-full h-full">
            {displayProjects.map((project, index) => {
              const transform = getCardTransform(index);
              if (!transform) return null; // Skip cards that are too far away
              const isActive = index === activeIndex;

              return (
                <div
                  key={`${project.id}-${index}`}
                  className="absolute top-1/2 left-1/2 w-[280px] md:w-[350px] lg:w-[400px] h-[350px] md:h-[350px] lg:h-[550px] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out cursor-pointer"
                  style={{
                    transform: `
          translateX(calc(-50% + ${transform.translateX}px))
          translateY(-50%)
          scale(${transform.scale})
          rotateY(${transform.rotateY}deg)
        `,
                    zIndex: transform.zIndex,
                    opacity: transform.opacity,
                    filter: `blur(${transform.blur}px)`
                  }}
                  onClick={() => !isActive && goToSlide(index)}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  onMouseDown={handleTouchStart}
                  onMouseMove={handleTouchMove}
                  onMouseUp={handleTouchEnd}

                >
                  {/* Card Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-3xl blur-xl animate-pulse-slow" />

                  {/* Main Card */}
                  <div className="relative w-full h-full bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden group transform-gpu">
                    {/* Project Image */}
                    <div className="relative h-[40%] md:h-[45%] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Floating Icons */}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                          <Eye className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                          <Star className="w-4 h-4 text-yellow-400" />
                        </div>
                      </div>

                      {/* Active Indicator */}
                      {isActive && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-400 to-pink-400 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                          Featured
                        </div>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                      <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent line-clamp-2">
                        {project.title}
                      </h3>

                      <p className="text-sm md:text-base opacity-80 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-purple-500/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs border border-purple-400/30"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="bg-purple-500/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs border border-purple-400/30">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      {isActive && (
                        <div className="flex gap-2 pt-2">
                          <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg text-sm font-semibold transform hover:scale-105 transition-all duration-200">
                            <Github className="inline w-4 h-4 mr-1" />
                            Code
                          </button>
                          <button className="flex-1 border border-purple-400 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-400 hover:text-white transition-all duration-200">
                            <ExternalLink className="inline w-4 h-4 mr-1" />
                            Demo
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Card Accents */}
                    <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-purple-400/30 to-transparent rounded-tl-3xl" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-pink-400/30 to-transparent rounded-br-3xl" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons - Hidden on Mobile */}
          <button
            onClick={goToPrevious}
            className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-xl p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20 z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-xl p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20 z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {displayProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex
                ? 'bg-gradient-to-r from-purple-400 to-pink-400 scale-125'
                : 'bg-white/30 hover:bg-white/50'
                }`}
            >
              {index === activeIndex && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping" />
              )}
            </button>
          ))}
        </div>

        {/* Swipe Instruction for Mobile */}
        <div className="block md:hidden text-center mt-4 opacity-60">
          <p className="text-sm">← Swipe to explore projects →</p>
        </div>
      </div>

      {/* Advanced CSS Animations */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-gpu {
          transform: translateZ(0);
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @keyframes float-random {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-15px); }
          75% { transform: translateY(-25px) translateX(5px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float-random { animation: float-random 4s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-gradient-shift { 
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }
        
        /* Mobile touch improvements */
        @media (max-width: 768px) {
          .perspective-1000 {
            perspective: 800px;
          }
        }
        
        /* Smooth scrolling for touch devices */
        * {
          -webkit-overflow-scrolling: touch;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
