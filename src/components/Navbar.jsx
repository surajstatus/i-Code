// Navbar.js
import React from 'react';
import { ChevronLeft, ChevronRight, Menu, X, Download, Sun, Moon, Palette } from 'lucide-react';

const Navbar = ({ theme, setTheme, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-opacity-80 border-b border-opacity-20 border-white transition-all duration-300">
      {/* Navigation content */}
      {/* Theme Toggle and Mobile Menu Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div
              className={`text-4xl font-bold font-stalinist bg-clip-text text-transparent transition-all duration-500
    ${theme === 'blossom'
                  ? 'bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-300'
                  : 'bg-gradient-to-r from-blue-400 via-cyan-400 to-white'
                }`}
            >
              i-Code
            </div>

          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-purple-400 transition-colors duration-200">Home</a>
            <a href="#about" className="hover:text-purple-400 transition-colors duration-200">About</a>
            <a href="#projects" className="hover:text-purple-400 transition-colors duration-200">Projects</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors duration-200">Contact</a>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
              <Download className="inline w-4 h-4 mr-2" />
              Resume
            </button>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setTheme(theme === 'snow' ? 'blossom' : 'snow')}
              className="p-2 rounded-lg hover:bg-opacity-20 hover:bg-white transition-all duration-200"
            >
              {
                theme === 'blossom' ? <Palette className="w-5 h-5" /> :
                  <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-opacity-20 hover:bg-white transition-all duration-200"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden absolute top-16 left-0 right-0 backdrop-blur-md bg-opacity-95 border-b border-opacity-20 border-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="px-4 py-4 space-y-2">
          <a href="#home" className="block py-2 hover:text-purple-400 transition-colors duration-200">Home</a>
          <a href="#about" className="block py-2 hover:text-purple-400 transition-colors duration-200">About</a>
          <a href="#projects" className="block py-2 hover:text-purple-400 transition-colors duration-200">Projects</a>
          <a href="#contact" className="block py-2 hover:text-purple-400 transition-colors duration-200">Contact</a>
          <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
            <Download className="inline w-4 h-4 mr-2" />
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
