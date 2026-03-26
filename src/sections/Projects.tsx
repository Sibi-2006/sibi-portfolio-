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
      className="bg-black w-full text-white min-h-screen pt-24 pb-20 px-6 sm:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="pb-16 text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl font-black inline-block relative">
              My Projects
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-[#00BFFF] rounded-full shadow-[0_0_15px_#00BFFF]"></span>
            </h2>
          </motion.div>
          <p className="py-8 text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium">
             Click on the cards to explore the technical architecture, features, and production builds of my recent works.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 w-full">
          {PROJECTS.map(({ title, tech, description, url }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className={`relative group w-full rounded-3xl overflow-hidden min-h-[400px] h-[450px] bg-gray-900 border-2 transition-all duration-500 cursor-pointer ${activeIndex === index ? 'border-primary shadow-[0_0_40px_rgba(0,191,255,0.3)]' : 'border-gray-800 hover:border-[#00BFFF]/50'}`}
            >
              {/* Project Image Wrapper */}
              <div className="absolute inset-0 w-full h-full z-0">
                <img 
                  src={projectImages[index]} 
                  alt={title} 
                  className={`w-full h-full object-cover transition-transform duration-1000 ${activeIndex === index ? 'scale-110 blur-[4px]' : 'group-hover:scale-110 group-hover:blur-[2px]'}`}
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent" />
              </div>

              {/* Reveal Overlay - Scrollable for full content */}
              <div className={`absolute inset-0 bg-black/95 backdrop-blur-md flex flex-col p-8 sm:p-12 z-20 transition-all duration-700 transform text-left overflow-y-auto
                ${activeIndex === index 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-full lg:group-hover:opacity-100 lg:group-hover:translate-y-0'}`}
              >
                <h3 className="text-3xl sm:text-4xl font-black text-[#00BFFF] mb-6 tracking-tight mt-auto lg:mt-0">{title}</h3>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {tech.map((t, idx) => (
                    <span 
                      key={idx} 
                      className="px-4 py-1.5 bg-[#00BFFF]/10 border border-[#00BFFF]/40 text-[#00BFFF] text-xs font-black rounded-lg uppercase tracking-widest"
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
                    className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-[#00BFFF] text-black font-black rounded-xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(0,191,255,0.4)]"
                  >
                    View Project 
                    <span className="group-hover/btn:translate-x-2 transition-transform duration-300 text-2xl">→</span>
                  </a>
                </div>
              </div>

              {/* Title Tag */}
              <div className={`absolute bottom-8 left-8 right-8 z-10 transition-all duration-500 transform
                ${activeIndex === index ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0 lg:group-hover:opacity-0 lg:group-hover:translate-y-4'}`}
              >
                <h4 className="text-3xl sm:text-4xl font-black text-white drop-shadow-[0_5px_20px_rgba(0,0,0,1)]">
                    {title}
                </h4>
                <div className="h-1.5 w-16 bg-[#00BFFF] mt-3 rounded-full shadow-[0_0_15px_#00BFFF]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
;
