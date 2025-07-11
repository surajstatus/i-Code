import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const skills = [
    { skill: 'React.js', level: 95 },
    { skill: 'Node.js & Express', level: 65 },
    { skill: 'JavaScript', level: 92 },
    { skill: 'Database Design', level: 88 },
    { skill: 'UI/UX Design', level: 85 },
  ];

  return (
    <section id="about" className="relative z-10 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* My Story */}
          <motion.div
            className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-purple-300">My Story</h3>
            <p className="text-lg opacity-90 leading-relaxed mb-6">
              I'm a passionate full-stack developer with over 2 years of experience creating
              digital solutions that combine beautiful design with powerful functionality.
              My journey started with a curiosity about how things work, and it has evolved
              into a career dedicated to building innovative web applications.
            </p>
            <p className="text-lg opacity-90 leading-relaxed">
              I specialize in React.js, Node.js, and modern web technologies, always staying
              up-to-date with the latest trends and best practices in the industry.
            </p>
          </motion.div>

          {/* Skills & Expertise */}
          <motion.div
            className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Skills & Expertise</h3>
            <div className="space-y-4">
              {skills.map((item, index) => (
                <motion.div
                  key={index}
                  className="space-y-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{item.skill}</span>
                    <span className="text-sm">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 bg-opacity-20 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
