import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Database, Globe } from 'lucide-react';
import heroimg from '../assets/hero.png';

const HeroSection = ({ scrollToSection }) => {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Profile Image */}
        <motion.div
          className="relative w-full max-w-md mx-auto transform"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-10 blur-xl opacity-40 animate-pulse"></div>
            <img
              src={heroimg}
              alt="Profile"
              className="relative w-full max-w-md mx-auto transform"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Hi, I'm Suraj
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-300">
              Full Stack Developer
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Passionate about creating innovative web applications with modern technologies.
              I specialize in React, Node.js, and cloud solutions.
            </p>
          </div>

          {/* Professional Highlights */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[{
              Icon: Code,
              color: 'text-blue-400',
              title: '1+ Years',
              desc: 'Experience'
            }, {
              Icon: Palette,
              color: 'text-purple-400',
              title: '5+ Projects',
              desc: 'Completed'
            }, {
              Icon: Database,
              color: 'text-green-400',
              title: 'Full Stack',
              desc: 'Developer'
            }, {
              Icon: Globe,
              color: 'text-pink-400',
              title: 'Global',
              desc: 'Remote Work'
            }].map(({ Icon, color, title, desc }, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3">
                  <Icon className={color} size={24} />
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-gray-400">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 font-semibold"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border border-white/30 px-8 py-3 rounded-full hover:bg-white/10 transition-all"
            >
              Get In Touch
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
