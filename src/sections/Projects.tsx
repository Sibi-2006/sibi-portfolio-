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
      className="bg-black w-full text-white min-h-screen pt-24 pb-20 px-4"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center w-full min-h-full">
        <div className="pb-12 text-center">
          <p className="text-4xl sm:text-5xl font-bold inline border-b-4 border-primary">
            My Projects
          </p>
          <p className="py-6 text-gray-400 max-w-lg mx-auto">
            Click on the cards to explore the technical details and features of my work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-6xl mx-auto">
          {PROJECTS.map(({ title, tech, description, url }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className={`relative group rounded-2xl overflow-hidden aspect-[16/10] bg-gray-900 border ${activeIndex === index ? 'border-primary ring-2 ring-primary/20' : 'border-gray-800'} hover:border-primary transition-all duration-500 cursor-pointer`}
            >
              {/* Project Image */}
              <img 
                src={projectImages[index]} 
                alt={title} 
                className={`w-full h-full object-cover transition-transform duration-700 ${activeIndex === index ? 'scale-110' : 'group-hover:scale-110'}`}
              />

              {/* Reveal Overlay */}
              <div className={`absolute inset-0 bg-black/90 backdrop-blur-sm flex flex-col justify-center p-6 sm:p-10 transition-all duration-500 transform text-left
                ${activeIndex === index 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-full md:group-hover:opacity-100 md:group-hover:translate-y-0'}`}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">{title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {tech.map((t, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-xs font-semibold rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                  {description}
                </p>

                <div className="mt-auto">
                  <a 
                    href={url} 
                    target="_blank" 
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()} // Prevent card toggle when clicking button
                    className="inline-flex items-center px-6 py-3 bg-primary text-black font-bold rounded-lg hover:bg-white hover:scale-105 transition-all duration-300"
                  >
                    View Project <span className="ml-2">→</span>
                  </a>
                </div>
              </div>

              {/* Title Tag (visible when not revealed) */}
              <div className={`absolute top-4 left-4 bg-black/60 backdrop-blur shadow-lg p-2 px-4 rounded-lg transition-opacity duration-300 pointer-events-none
                ${activeIndex === index ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`}
              >
                <span className="text-primary font-bold">{title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
