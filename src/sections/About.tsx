import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';
import { FaGraduationCap, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

export const About: React.FC = () => {
  return (
    <div
      id="about"
      className="w-full min-h-screen bg-black text-white pt-24 pb-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-primary">
            About Me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
          {/* Left Content: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-xl text-gray-300 leading-relaxed">
              I'm a passionate fresher MERN Stack Developer dedicated to building real-world projects that solve problems. I'm constantly pushing my boundaries, whether it's mastering complex Data Structures and Algorithms or crafting seamless user experiences.
            </p>
            <p className="text-xl text-gray-400 leading-relaxed">
              Beyond the screen, I find my balance as a calisthenics trainer, seeking physical excellence. When I'm not coding or training, you'll find me dominating in Free Fire or enjoying a peaceful sunset at the beach.
            </p>
            <p className="text-lg text-primary italic">
              "Efficiency in code, discipline in life."
            </p>
          </motion.div>

          {/* Right Content: Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4"
          >
            {[
              { icon: <FaEnvelope />, label: 'Email', value: CONTACT_INFO.email, link: `mailto:${CONTACT_INFO.email}` },
              { icon: <FaPhone />, label: 'Phone', value: CONTACT_INFO.phone, link: `tel:${CONTACT_INFO.phone}` },
              { icon: <FaMapMarkerAlt />, label: 'Location', value: CONTACT_INFO.location },
              { icon: <FaGraduationCap />, label: 'Education', value: `${CONTACT_INFO.education.degree} - ${CONTACT_INFO.education.institution} (${CONTACT_INFO.education.period})` },
            ].map((info, index) => (
              <div 
                key={index}
                className="flex items-center p-4 bg-gray-900 border border-primary/30 rounded-xl hover:border-primary/60 transition-all duration-300 group"
              >
                <div className="text-primary text-2xl mr-4 group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{info.label}</p>
                  {info.link ? (
                    <a href={info.link} className="text-gray-200 hover:text-primary transition-colors truncate block max-w-[250px] sm:max-w-none">
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-gray-200 block">{info.value}</span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
