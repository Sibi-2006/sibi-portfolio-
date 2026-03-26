import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: 1, link: 'home', name: 'Home' },
    { id: 2, link: 'about', name: 'About' },
    { id: 3, link: 'projects', name: 'Projects' },
    { id: 4, link: 'skills', name: 'Skills' },
    { id: 5, link: 'education', name: 'Education' },
    { id: 6, link: 'contact', name: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`flex justify-between items-center w-full h-20 px-4 text-white fixed top-0 z-50 transition-all duration-300 border-b border-primary/30 ${scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-primary/10' : 'bg-black'}`}>
      <div>
        <h1 className="text-2xl font-bold ml-2 cursor-pointer hover:text-primary transition-colors">
          Sibiraj R
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, name }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:text-primary transition-colors duration-200"
          >
            <Link
              to={link}
              smooth
              duration={500}
              spy
              activeClass="text-primary font-bold"
              offset={-80}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} className="text-primary" /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black text-gray-300 transform transition-transform duration-300">
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-primary transition-colors duration-200"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
                spy
                activeClass="text-primary font-bold underline underline-offset-8"
                offset={-80}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
