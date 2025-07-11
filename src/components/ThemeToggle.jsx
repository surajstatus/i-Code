// src/components/ThemeToggle.jsx
import React from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="fixed top-4 right-4 z-50 p-2 bg-black/20 backdrop-blur-md rounded-full text-white hover:scale-110 transition"
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;

