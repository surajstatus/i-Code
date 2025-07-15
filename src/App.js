// App.js
import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ParticleCanvas from './components/ParticleCanvas';

const App = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [theme, setTheme] = useState('snow');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  //herosection visibility state
    const [isVisible, setIsVisible] = useState({
    'hero-image': false,
    'hero-content': false,
  });
  useEffect(() => {
    // Simulate visibility after a delay (e.g., for animation)
    const timer = setTimeout(() => {
      setIsVisible({
        'hero-image': true,
        'hero-content': true,
      });
    }, 500); // Adjust the delay as needed
    return () => clearTimeout(timer);
  }, []);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  // Sample projects data
  const projects = [
    // ... (projects data remains unchanged)
    {
      id: 1,
      title: "Food Ordering App",
      description: "MERN-stack Food ordering System with React, Node.js, and MongoDB",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "https://movieticketsbooking.netlify.app/"
    },
    {
      id: 2,
      title: "Notes App",
      description: "Collaborative task management tool with real-time updates",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      tech: ["React", "Firebase", "Material-UI"],
      github: "#",
      demo: "https://makeyoursnote.netlify.app/"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Interactive weather application with geolocation and forecasts",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      tech: ["React", "OpenWeather API", "Chart.js"],
      github: "#",
      demo: ""
    },
    {
      id: 4,
      title: "MovieBooking App",
      description: "Movies Booking platform with real-time review and ratings",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop",
      tech: ["React", "Socket.io", "Express", "PostgreSQL"],
      github: "#",
      demo: "https://movieticketsbooking.netlify.app/"
    }
  ];

    const themeClasses = {
    // light: 'bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900',
    snow: 'bg-gradient-to-br from-indigo-950 via-purple-950 to-black text-white',
    blossom: 'bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 text-gray-800'
    
  };
  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [projects.length]);
  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };
  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className={`min-h-screen transition-all duration-700 ${themeClasses[theme]} relative overflow-hidden`}>
      <ParticleCanvas theme={theme} />
      <Navbar 
        theme={theme} 
        setTheme={setTheme} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <HeroSection isVisible={isVisible} scrollToSection={scrollToSection} />
      <ProjectsSection 
        projects={projects} 
        currentProject={currentProject} 
        setCurrentProject={setCurrentProject} 
        nextProject={nextProject} 
        prevProject={prevProject} 
      />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
