// ToastMessage.jsx
import React from 'react';

const ToastMessage = ({ message, show }) => {
  return (
    <div className={`fixed top-[40%] left-1/2 transform -translate-x-1/2 transition-opacity duration-500 z-[999] ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="bg-black/90 text-white px-6 py-3 rounded-lg shadow-lg backdrop-blur-md border border-purple-500">
        {message}
      </div>
    </div>
  );
};

export default ToastMessage;
