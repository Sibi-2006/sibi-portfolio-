import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import neonImg from '../assets/NeonThreads.png';
import ssmsImg from '../assets/SSMS.png';
import elearningImg from '../assets/E-Learning.png';
import socialImg from '../assets/SocialLearning.png';

export const Projects: React.FC = () => {
  const projectImages = [neonImg, ssmsImg, elearningImg, socialImg];
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  return (
    <div
      id="projects"
      className="bg-black w-full text-white min-h-screen pt-24 pb-20 px-4 sm:px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-center w-full min-h-full">
        <div className="pb-16 text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
          >
            <p className="text-4xl sm:text-6xl font-black inline-block relative">
              My Projects
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-primary rounded-full"></span>
            </p>
          </motion.div>
          <p className="py-8 text-gray-400 max-w-2xl mx-auto text-lg">
            Tap on the cards to explore the technical architecture, features, and production builds of my recent works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 w-full max-w-6xl mx-auto">
          {PROJECTS.map(({ title, tech, description, url }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className={`relative group rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[420px] md:aspect-[16/10] bg-gray-900 border-2 ${activeIndex === index ? 'border-primary shadow-[0_0_40px_rgba(0,191,255,0.25)]' : 'border-gray-800'} hover:border-primary/60 transition-all duration-500 cursor-pointer`}
            >
              {/* Project Image */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={projectImages[index]} 
                  alt={title} 
                  className={`w-full h-full object-cover transition-transform duration-1000 ${activeIndex === index ? 'scale-110 blur-[2px]' : 'group-hover:scale-110'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Reveal Overlay */}
              <div className={`absolute inset-0 bg-black/95 backdrop-blur-md flex flex-col justify-center p-6 sm:p-10 transition-all duration-700 transform text-left overflow-y-auto
                ${activeIndex === index 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-full md:group-hover:opacity-100 md:group-hover:translate-y-0'}`}
              >
                <h3 className="text-2xl sm:text-4xl font-black text-[#00BFFF] mb-4 tracking-tight">{title}</h3>
                
                <div className="flex flex-wrap gap-2.5 mb-6">
                  {tech.map((t, idx) => (
                    <span 
                      key={idx} 
                      className="px-3.5 py-1.5 bg-[#00BFFF]/10 border border-[#00BFFF]/40 text-[#00BFFF] text-xs font-bold rounded-lg uppercase tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-gray-300 text-sm sm:text-lg leading-relaxed mb-10 font-medium">
                  {description}
                </p>

                <div className="mt-auto">
                  <a 
                    href={url} 
                    target="_blank" 
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()} 
                    className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-[#00BFFF] text-black font-black rounded-xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,191,255,0.4)]"
                  >
                    View Project 
                    <span className="group-hover/btn:translate-x-2 transition-transform duration-300 text-xl">→</span>
                  </a>
                </div>
              </div>

              {/* Title Tag (visible when not revealed) */}
              <div className={`absolute bottom-6 left-6 right-6 transition-all duration-500 transform
                ${activeIndex === index ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0 group-hover:opacity-0'}`}
              >
                <h4 className="text-2xl sm:text-3xl font-black text-white drop-shadow-2xl">
                    {title}
                </h4>
                <div className="h-1 w-12 bg-[#00BFFF] mt-2 rounded-full shadow-[0_0_10px_#00BFFF]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
