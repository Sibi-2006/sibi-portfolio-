import React from 'react';
import { motion } from 'framer-motion';
import htmlImg from '../assets/html.jpg';
import cssImg from '../assets/css.jpg';
import jsImg from '../assets/js.png';
import reactImg from '../assets/react.png';
import nodeImg from '../assets/node.png';
import expressImg from '../assets/express.png';
import mongodbImg from '../assets/mongodb.png';
import profileImg from '../assets/profile.jpeg';

export const OrbitAnimation: React.FC = () => {
  const icons = [
    { src: htmlImg, label: 'HTML' },
    { src: cssImg, label: 'CSS' },
    { src: jsImg, label: 'JavaScript' },
    { src: reactImg, label: 'React' },
    { src: nodeImg, label: 'Node.js' },
    { src: expressImg, label: 'Express' },
    { src: mongodbImg, label: 'MongoDB' },
  ];

  return (
    <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] flex items-center justify-center">
      {/* Central Profile Image */}
      <div className="relative z-20 w-32 h-32 sm:w-44 sm:h-44 rounded-full p-1 bg-gradient-to-tr from-primary to-cyan-300 shadow-[0_0_30px_rgba(0,191,255,0.4)]">
        <div className="w-full h-full rounded-full bg-black overflow-hidden border-2 border-black">
          <img
            src={profileImg}
            alt="Sibiraj R"
            className="w-full h-full object-cover scale-110"
          />
        </div>
      </div>

      {/* Single Orbit Line (Static) */}
      <div className="absolute w-[80%] h-[80%] border border-primary/20 rounded-full" />

      {/* Orbiting Icons */}
      <div className="absolute w-[80%] h-[80%]">
        {icons.map((item, idx) => {
          const angle = (360 / icons.length) * idx;

          return (
            <motion.div
              key={idx}
              className="absolute w-full h-full top-0 left-0 origin-center"
              animate={{ rotate: [angle, angle + 360] }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            >
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 bg-white rounded-xl shadow-lg hover:scale-125 transition-transform"
                animate={{ rotate: [-angle, -(angle + 360)] }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Background Glows */}
      <div className="absolute w-60 h-60 bg-primary/10 blur-[120px] rounded-full z-0" />
    </div>
  );
};
