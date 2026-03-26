import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { OrbitAnimation } from '../components/OrbitAnimation';

export const Hero: React.FC = () => {
  const fullText = "Sibiraj";
  const [displayText, setDisplayText] = React.useState("");
  const greeting = "Hi, I'm";

  React.useEffect(() => {
    let index = 0;
    setDisplayText(""); // Reset just in case

    const typeNextChar = () => {
      if (index < fullText.length) {
        setDisplayText(fullText.substring(0, index + 1));
        index++;
        setTimeout(typeNextChar, 100 + Math.random() * 100); // Varied typing speed for realism
      }
    };

    const initialDelay = setTimeout(typeNextChar, 800);
    return () => clearTimeout(initialDelay);
  }, [fullText]);

  return (
    <div
      id="home"
      className="min-h-screen w-full bg-black flex items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-6 md:flex-row text-center md:text-left gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center h-full flex-1 z-10"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight min-h-[1.2em]">
            {greeting}
            <span className="text-primary italic relative ml-3">
              {displayText}
              <span className="inline-block w-[4px] h-[0.9em] bg-primary ml-2 align-middle animate-blink" />
            </span>
          </h2>
          <p className="text-gray-400 py-4 max-w-lg text-lg sm:text-2xl leading-relaxed">
            Full Stack MERN Developer | Building Web & Mobile Apps
          </p>
          <p className="text-gray-500 mb-10 max-w-lg text-base sm:text-lg">
            A passionate developer focused on creating performant, scalable, and user-friendly digital experiences. From concept to code, I bring ideas to life using the MERN stack.
          </p>

          <div className="flex justify-center md:justify-start">
            <Link
              to="projects"
              smooth
              duration={500}
              offset={-80}
              className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-black transition-all duration-300 bg-primary rounded-xl cursor-pointer hover:bg-white hover:scale-110 shadow-[0_0_20px_rgba(0,191,255,0.4)]"
            >
              Explore My Work
              <span className="group-hover:translate-x-2 transition-transform duration-300 ml-3 text-xl">→</span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 flex justify-center items-center py-10"
        >
          <OrbitAnimation />
        </motion.div>
      </div>
    </div>
  );
};
