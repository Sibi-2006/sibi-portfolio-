import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black border-t border-primary/20 py-8 px-4">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center space-y-4">
        <div className="flex space-x-6">
          <a 
            href="https://github.com/Sibi-2006" 
            target="_blank" 
            rel="noreferrer"
            className="text-primary hover:text-white transition-all duration-300"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/sibiraj-r-147936336" 
            target="_blank" 
            rel="noreferrer"
            className="text-primary hover:text-white transition-all duration-300"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Sibiraj R. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
