import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'; // <- Home icon
import gsap from 'gsap';
import Hero from './Hero';

const Navbar = () => {
  const navRef = useRef();
  const linkRefs = useRef([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState('');

  const sectionLinks = [
    { name: 'About', section: 'about' },
    { name: 'Timeline', section: 'timeline' },
    { name: 'Rewards', section: 'rewards' },
    { name: 'Guide', section: 'guide' },
    { name: 'Contact Us', section: 'contact-us' },
  ];

  const roundLinks = [
  
    { name: 'First', path: '/first' },
    { name: 'Second', path: '/second' },
  ];

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );

    linkRefs.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: -5 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.9 + i * 0.1,
            ease: 'power2.out',
          }
        );
      }
    });
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      let current = '';

      sections.forEach((section) => {
        const top = section.offsetTop - 100;
        if (window.scrollY >= top) {
          current = section.getAttribute('data-section');
        }
      });

      setActiveLink(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleSectionClick = (section) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const target = document.querySelector(`[data-section="${section}"]`);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const target = document.querySelector(`[data-section="${section}"]`);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleHomeClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav
  ref={navRef}
  className="fixed top-0 left-0 w-full z-[999] flex items-center justify-center py-4 shadow-md pt-5
  bg-black bg-opacity-90 bg-transparent backdrop-blur-md border-b border-cyan-400"
>

      {/* Home Icon */}
      <div className="absolute left-6">
        <button
          onClick={handleHomeClick}
          className="text-cyan-300 hover:text-white transition-all duration-300 text-xl md:text-2xl"
        >
          <FaHome />
        </button>
      </div>

      <ul className="flex space-x-6 md:space-x-12 font-orbitron text-cyan-300 text-sm md:text-base uppercase">
        {sectionLinks.map((link, i) => (
          <li
            key={link.section}
            ref={(el) => (linkRefs.current[i] = el)}
            onClick={() => handleSectionClick(link.section)}
            className={`relative group cursor-pointer tracking-wider ${
              activeLink === link.section ? 'text-white' : ''
            }`}
          >
            <span
              className={`transition duration-300 ${
                activeLink === link.section ? 'text-white' : 'group-hover:text-white'
              }`}
            >
              {link.name}
            </span>
            <span
              className={`absolute left-0 bottom-0 h-[2px] bg-cyan-400 transition-all duration-300 ${
                activeLink === link.section ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            ></span>
          </li>
        ))}

        {roundLinks.map((link, i) => (
          <li
            key={link.path}
            ref={(el) => (linkRefs.current[sectionLinks.length + i] = el)}
            className={`relative group cursor-pointer tracking-wider ${
              location.pathname === link.path ? 'text-white' : ''
            }`}
          >
            <Link
              to={link.path}
              className={`transition duration-300 ${
                location.pathname === link.path ? 'text-white' : 'group-hover:text-white'
              }`}
            >
              {link.name}
            </Link>
            <span
              className={`absolute left-0 bottom-0 h-[2px] bg-cyan-400 transition-all duration-300 ${
                location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            ></span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
