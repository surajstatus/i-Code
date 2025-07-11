import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/Hexagon.json';

const ParticleCanvas = ({ theme }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const createParticles = () => {
      particlesRef.current = [];
      const particleCount = theme === 'blossom' ? 15 : theme === 'snow' ? 20 : 0;

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (theme === 'snow' ? 3 : 4) + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: Math.random() * 0.8 + 0.2,
          opacity: Math.random() * 0.6 + 0.3,
          color: theme === 'blossom'
            ? `hsl(${Math.random() * 60 + 300}, 60%, 75%)`
            : '#ffffff',
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 1
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.rotation += particle.rotationSpeed;

        if (particle.y > canvas.height + 10) {
          particle.y = -20;
          particle.x = Math.random() * canvas.width;
        }

        if (particle.x > canvas.width + 10) {
          particle.x = -10;
        } else if (particle.x < -10) {
          particle.x = canvas.width + 10;
        }

        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.translate(particle.x, particle.y);
        ctx.rotate((particle.rotation * Math.PI) / 180);

        if (theme === 'blossom') {
          ctx.beginPath();
          for (let i = 0; i < 5; i++) {
            const angle = (i * 72) * Math.PI / 180;
            const x = Math.cos(angle) * particle.size;
            const y = Math.sin(angle) * particle.size;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [theme]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
        <Lottie
          animationData={animationData}
          loop
          autoplay
          style={{ width: '100%', height: '100%', opacity: 0.2, filter: 'blur(4px)', gradient: 'linear-gradient(to bottom, rgba(228, 13, 13, 0.1), rgb(195, 255, 0))' }}
        />
      </div>
    </>
  );
};

export default ParticleCanvas;
