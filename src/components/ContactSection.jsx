// ContactSection.js
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="relative z-10 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate on your next project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-purple-300">Let's Connect</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-purple-400" />
                <span>surajvishwakarma2801@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-purple-400" />
                <span>+91 (932) 096-2340</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-purple-400" />
                <span>Mumbai, IN</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <button
                onClick={() => window.open("https://github.com/surajstatus/", "_blank")}
                className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all">
                <Github className="w-6 h-6" />
              </button>
              <button
                onClick={() => window.open("https://www.linkedin.com/in/surajstatus/", "_blank")}
                className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all">
                <Linkedin className="w-6 h-6" />
              </button>
              <button
                onClick={() => window.open("https://www.instagram.com/surajstatus_/", "_blank")}
                className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all">
                <Instagram className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white bg-opacity-20 backdrop-blur-md rounded-lg px-4 py-3 placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white bg-opacity-20 backdrop-blur-md rounded-lg px-4 py-3 placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full bg-white bg-opacity-20 backdrop-blur-md rounded-lg px-4 py-3 placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-purple-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

  );
};

export default ContactSection;
