import React from 'react';
import AnimatedGlowText from './AnimatedGlowText';
import { Menu, X, Download, Moon, Palette } from 'lucide-react';

const Navbar = ({ theme, setTheme, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-opacity-80 border-b border-opacity-5 border-white transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center absolute mt-10 font-stalinist">
              <AnimatedGlowText theme={theme} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-purple-400 transition-colors duration-200">Home</a>
            <a href="#about" className="hover:text-purple-400 transition-colors duration-200">About</a>
            <a href="#projects" className="hover:text-purple-400 transition-colors duration-200">Projects</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors duration-200">Contact</a>
            <button
              onClick={() => {
                const resumeUrl = "/suraj-vishwakarma-resume.pdf";
                window.open(resumeUrl, "_blank", "noopener,noreferrer");
                const link = document.createElement("a");
                link.href = resumeUrl;
                link.download = "Suraj-Vishwakarma-Resume.pdf";
                link.click();
              }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200">

              <Download className="inline w-4 h-4 mr-2" />
              Resume
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'snow' ? 'blossom' : 'snow')}
              className="p-2 rounded-lg hover:bg-opacity-20 hover:bg-white transition-all duration-200"
            >
              {theme === 'blossom' ? <Palette className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-opacity-20 hover:bg-white transition-all duration-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Navigation */}
      <div
        className={`fixed top-20 left-0 h-full w-56 dark:bg-black z-50 transform transition-transform duration-300 ease-in-out
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}
      >


        <div className="flex flex-col space-y-4 p-4">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-base hover:text-purple-500">Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-base hover:text-purple-500">About</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-base hover:text-purple-500">Projects</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-base hover:text-purple-500">Contact</a>

          <button
            onClick={() => {
              const resumeUrl = "/suraj-vishwakarma-resume.pdf";
              window.open(resumeUrl, "_blank", "noopener,noreferrer");
              const link = document.createElement("a");
              link.href = resumeUrl;
              link.download = "Suraj-Vishwakarma-Resume.pdf";
              link.click();
            }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg text-white font-semibold">

            <Download className="inline w-4 h-4 mr-2" />
            Resume
          </button>

          <button
            onClick={() => {
              setTheme(theme === 'snow' ? 'blossom' : 'snow');
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-2 text-sm mt-4"
          >
            {theme === 'blossom' ? <Palette className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            Toggle Theme
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
