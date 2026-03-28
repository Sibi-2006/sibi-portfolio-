import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { OrbitAnimation } from '../components/OrbitAnimation';
import resumePDF from '../Resume/Sibiraj R.pdf';

export const Hero: React.FC = () => {
  const fullText = "Sibiraj";
  const [displayText, setDisplayText] = React.useState("");
  const greeting = "Hi, I'm";

  React.useEffect(() => {
    let index = 0;
    setDisplayText(""); // Reset just in case

    const typeNextChar = () => {
      if (index <= fullText.length) {
        setDisplayText(fullText.substring(0, index));
        index++;
        setTimeout(typeNextChar, 100 + Math.random() * 100);
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
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight min-h-[1.2em]">
            {greeting}
            <span className="text-primary italic relative ml-3">
              {displayText}
              <span className="inline-block w-[4px] h-[0.9em] bg-primary ml-2 align-middle animate-blink" />
            </span>
          </h1>
          <p className="text-gray-400 py-4 max-w-lg text-lg sm:text-2xl leading-relaxed font-medium">
            Full Stack MERN Developer | Building Scalable Digital Solutions
          </p>
          <p className="text-gray-500 mb-10 max-w-lg text-base sm:text-lg">
            Dedicated to transforming complex ideas into elegant, high-impact digital products. Specialist in React, Node.js, and modern cloud architectures.
          </p>

          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <Link
              to="projects"
              smooth
              duration={500}
              offset={-80}
              className="group relative inline-flex items-center justify-center px-8 py-4 font-black text-black transition-all duration-300 bg-primary rounded-xl cursor-pointer hover:bg-white hover:scale-105 shadow-[0_0_20px_rgba(0,191,255,0.4)]"
            >
              Explore My Work
              <span className="group-hover:translate-x-2 transition-transform duration-300 ml-3 text-xl">→</span>
            </Link>

            <a
              href={resumePDF}
              download="Sibiraj_R_Resume.pdf"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-black text-primary transition-all duration-300 border-2 border-primary/40 bg-primary/5 rounded-xl cursor-pointer hover:bg-primary/20 hover:border-primary hover:scale-105 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            >
              Download CV
              <span className="ml-3 text-xl group-hover:translate-y-1 transition-transform duration-300">↓</span>
            </a>
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
