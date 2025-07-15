import React from 'react';

const AnimatedGlowText = ({ theme }) => {
  const isDarkMode = theme === 'snow'; // Match your theme logic

  return (
    <div className="relative group">
      {/* Main glowing text */}
      <h1 className={`text-4xl lg:text-5xl font-bold relative z-10 transition-all duration-1000 whitespace-nowrap
        ${isDarkMode
          ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400'
          : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'}
      `}>
        i-Code
      </h1>

      {/* Floating particles */}
      <div className="absolute inset-0 -m-12">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full animate-float ${
              isDarkMode ? 'bg-cyan-400' : 'bg-blue-500'
            }`}
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + (i % 3)}s`,
              boxShadow: isDarkMode
                ? '0 0 20px rgba(34, 211, 238, 0.6)'
                : '0 0 15px rgba(59, 130, 246, 0.4)'
            }}
          />
        ))}
      </div>

      {/* Rotating rings */}
      <div className="absolute inset-0 -m-16">
        <div className="absolute inset-0 border-2 border-dashed rounded-full animate-spin-slow opacity-40"
             style={{
               borderColor: isDarkMode ? 'rgba(168, 85, 247, 0.4)' : 'rgba(147, 51, 234, 0.3)',
               animationDuration: '20s'
             }}>
          <div className={`absolute -top-2 left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 ${
            isDarkMode ? 'bg-purple-400' : 'bg-purple-600'
          }`}
            style={{
              boxShadow: isDarkMode
                ? '0 0 20px rgba(168, 85, 247, 0.8)'
                : '0 0 15px rgba(147, 51, 234, 0.6)'
            }}/>
        </div>

        <div className="absolute inset-4 border-2 border-dotted rounded-full animate-spin-reverse opacity-50"
             style={{
               borderColor: isDarkMode ? 'rgba(34, 211, 238, 0.5)' : 'rgba(59, 130, 246, 0.4)',
               animationDuration: '15s'
             }}>
          <div className={`absolute -top-1.5 left-1/2 w-3 h-3 rounded-full transform -translate-x-1/2 ${
            isDarkMode ? 'bg-cyan-400' : 'bg-blue-500'
          }`}
            style={{
              boxShadow: isDarkMode
                ? '0 0 15px rgba(34, 211, 238, 0.8)'
                : '0 0 12px rgba(59, 130, 246, 0.6)'
            }}/>
        </div>
      </div>

      {/* Pulsing energy waves */}
      {/* <div className="absolute inset-0 -m-8">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-lg border-2 animate-pulse-wave"
            style={{
              borderColor: isDarkMode
                ? `rgba(236, 72, 153, ${0.3 - i * 0.1})`
                : `rgba(219, 39, 119, ${0.2 - i * 0.05})`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s',
              transform: `scale(${1 + i * 0.1})`
            }}
          />
        ))}
      </div> */}

      {/* Corner glows */}
      <div className="absolute inset-0 -m-6">
        <div className={`absolute top-0 left-0 w-8 h-8 rounded-full animate-corner-glow ${
          isDarkMode ? 'bg-gradient-to-br from-cyan-400 to-transparent' : 'bg-gradient-to-br from-blue-500 to-transparent'
        }`}/>
        <div className={`absolute top-0 right-0 w-8 h-8 rounded-full animate-corner-glow ${
          isDarkMode ? 'bg-gradient-to-bl from-purple-400 to-transparent' : 'bg-gradient-to-bl from-purple-600 to-transparent'
        }`} style={{ animationDelay: '0.5s' }}/>
        <div className={`absolute bottom-0 right-0 w-8 h-8 rounded-full animate-corner-glow ${
          isDarkMode ? 'bg-gradient-to-tl from-pink-400 to-transparent' : 'bg-gradient-to-tl from-pink-600 to-transparent'
        }`} style={{ animationDelay: '1s' }}/>
        <div className={`absolute bottom-0 left-0 w-8 h-8 rounded-full animate-corner-glow ${
          isDarkMode ? 'bg-gradient-to-tr from-indigo-400 to-transparent' : 'bg-gradient-to-tr from-indigo-600 to-transparent'
        }`} style={{ animationDelay: '1.5s' }}/>
      </div>

      {/* Scanning line */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-0 left-0 w-full h-1 animate-scan ${
          isDarkMode
            ? 'bg-gradient-to-r from-transparent via-cyan-400 to-transparent'
            : 'bg-gradient-to-r from-transparent via-blue-500 to-transparent'
        }`}
          style={{
            boxShadow: isDarkMode
              ? '0 0 20px rgba(34, 211, 238, 0.8)'
              : '0 0 15px rgba(59, 130, 246, 0.6)'
          }}/>
      </div>

      {/* Reflection */}
      <div className="absolute inset-0 top-full opacity-20 transform scale-y-[-1]">
        <h1 className={`text-4xl lg:text-5xl font-bold ${
          isDarkMode
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400'
            : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'
        }`}>
          i-Code
        </h1>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes pulse-wave {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.5; }
          100% { transform: scale(1.2); opacity: 0; }
        }

        @keyframes corner-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes scan {
          0% { transform: translateY(0) scaleX(0); }
          50% { transform: translateY(100px) scaleX(1); }
          100% { transform: translateY(200px) scaleX(0); }
        }

        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 15s linear infinite; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-pulse-wave { animation: pulse-wave 3s ease-out infinite; }
        .animate-corner-glow { animation: corner-glow 2s ease-in-out infinite; }
        .animate-scan { animation: scan 4s ease-in-out infinite; }

        h1 {
          filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.5));
        }

        .group:hover h1 {
          filter: drop-shadow(0 0 20px rgba(168, 85, 247, 0.8));
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default AnimatedGlowText;
