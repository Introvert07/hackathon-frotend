import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import gsap from 'gsap';

const Navbar = () => {
  const navRef = useRef();
  const linkRefs = useRef([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

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
    setMenuOpen(false);
  };

  const handleHomeClick = () => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-[999] bg-black bg-opacity-90 backdrop-blur-md border-b border-cyan-400 shadow-md"
    >
      <div className="max-w-7xl mx-auto pl-40 flex items-center justify-between content-center px-4 py-3">
      
        {/* Home Icon */}
        <div className="text-cyan-300  text-xl md:text-2xl">
          <button
            onClick={handleHomeClick}
            className="hover:text-white transition-all duration-300"
          >
            <FaHome />
          </button>
        </div>

        

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-cyan-300 text-2xl"
          >
            {menuOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } absolute top-full left-0 w-full flex-col items-center bg-black md:bg-transparent md:flex md:flex-row md:static md:space-x-12 space-y-4 md:space-y-0 px-4 py-4 md:py-0 font-orbitron text-cyan-300 text-sm md:text-base uppercase`}
        >
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
                  activeLink === link.section
                    ? 'text-white'
                    : 'group-hover:text-white'
                }`}
              >
                {link.name}
              </span>
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-cyan-400 transition-all duration-300 ${
                  activeLink === link.section
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }`}
              ></span>
            </li>
          ))}

          {roundLinks.map((link, i) => (
            <li
              key={link.path}
              ref={(el) =>
                (linkRefs.current[sectionLinks.length + i] = el)
              }
              onClick={() => setMenuOpen(false)}
              className={`relative group cursor-pointer tracking-wider ${
                location.pathname === link.path ? 'text-white' : ''
              }`}
            >
              <Link
                to={link.path}
                className={`transition duration-300 ${
                  location.pathname === link.path
                    ? 'text-white'
                    : 'group-hover:text-white'
                }`}
              >
                {link.name}
              </Link>
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-cyan-400 transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }`}
              ></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
