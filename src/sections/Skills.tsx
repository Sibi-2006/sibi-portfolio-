import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

// Icons from assets
import htmlImg from '../assets/html.jpg';
import cssImg from '../assets/css.jpg';
import jsImg from '../assets/js.png';
import reactImg from '../assets/react.png';
import nodeImg from '../assets/node.png';
import expressImg from '../assets/express.png';
import mongodbImg from '../assets/mongodb.png';
import gitImg from '../assets/git.svg';
import githubImg from '../assets/github.png';
import figmaImg from '../assets/figma.jpg';
import restapiImg from '../assets/restapi.png';

const skillIcons: Record<string, string> = {
  'HTML': htmlImg,
  'CSS': cssImg,
  'JavaScript': jsImg,
  'React': reactImg,
  'Node.js': nodeImg,
  'Express.js': expressImg,
  'MongoDB': mongodbImg,
  'Tailwind CSS': cssImg, // Fallback to CSS or generic
  'Git': gitImg, // Generic placeholder if needed
  'GitHub': githubImg,
  'Figma': figmaImg,
  'REST APIs': restapiImg
};

export const Skills: React.FC = () => {
  return (
    <div id="skills" className="w-full min-h-screen bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center w-full h-full">

        {/* Section Header */}
        <div className="pb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-black bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent uppercase tracking-tighter mb-4"
          >
            Technical Arsenal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto"
          >
            A comprehensive showcase of my proficiency across various technologies in the modern web ecosystem.
          </motion.p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-10">
          {SKILLS.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`relative overflow-hidden group p-8 rounded-[2.5rem] bg-zinc-900/40 backdrop-blur-xl border border-white/10 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,191,255,0.08)]
                ${category.prominent ? 'md:col-span-2 lg:col-span-1 shadow-[0_0_30px_rgba(0,191,255,0.05)] border-primary/20' : ''}`}
            >
              <h3 className={`text-2xl sm:text-3xl font-bold mb-10 tracking-tight flex items-center gap-3 ${category.prominent ? 'text-primary' : 'text-white'}`}>
                {category.category}
                <span className="w-12 h-[2px] bg-primary/30" />
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
                {category.items.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="relative flex flex-col gap-3 group/skill"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-zinc-800/80 rounded-2xl border border-white/5 p-2 group-hover/skill:border-primary/50 transition-all duration-300">
                          {skillIcons[skill.name] && (
                            <img
                              src={skillIcons[skill.name]}
                              alt={skill.name}
                              className="w-full h-full object-contain grayscale group-hover/skill:grayscale-0 group-hover/skill:scale-110 transition-all duration-300"
                            />
                          )}
                        </div>
                        <span className="text-lg font-semibold text-zinc-100 group-hover/skill:text-primary transition-colors">{skill.name}</span>
                      </div>
                      <span className="text-sm font-medium text-primary/80">{skill.level}%</span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="w-full h-1.5 bg-zinc-800/50 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full relative shadow-[0_0_10px_rgba(0,191,255,0.3)]"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-primary/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
