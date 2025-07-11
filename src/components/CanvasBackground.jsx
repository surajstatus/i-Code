// src/components/CanvasBackground.jsx
import React, { useCallback } from 'react';
import { Particles } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const CanvasBackground = ({ isDarkMode }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = isDarkMode
    ? {
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: { value: '#0f172a' } },
        particles: {
          number: { value: 100 },
          color: { value: '#ffffff' },
          shape: { type: 'circle' },
          opacity: { value: 0.7 },
          size: { value: { min: 2, max: 5 } },
          move: {
            enable: true,
            direction: 'bottom',
            speed: 1,
            outModes: { default: 'out' },
          },
        },
      }
    : {
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: { value: '#fff0f5' } },
        particles: {
          number: { value: 30 },
          shape: {
            type: 'image',
            image: [
              {
                src: 'https://cdn-icons-png.flaticon.com/512/765/765326.png',
                width: 32,
                height: 32,
              },
              {
                src: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
                width: 32,
                height: 32,
              },
            ],
          },
          size: { value: 16 },
          move: {
            enable: true,
            speed: 1,
            direction: 'bottom',
            outModes: { default: 'out' },
          },
        },
      };

  return <Particles id="tsparticles" init={particlesInit} options={options} />;
};

export default CanvasBackground;

