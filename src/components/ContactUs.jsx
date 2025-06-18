import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import fluxLogo from '../assets/flux-logo.png'; // ✅ Replace with actual path

const ContactUs = () => {
  return (
    <section className="min-h-screen bg-black text-white px-4 py-20 font-orbitron relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-hacker-grid bg-[length:40px_40px] opacity-30 z-0" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-6">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          We Are Team FLUX
        </h1>

        {/* Logo */}
        <img
          src={fluxLogo}
          alt="Flux Logo"
          className="max-w-[200px] object-contain drop-shadow-[0_0_30px_#22d3ee]"
        />

        {/* Typing Tagline */}
        <TypeAnimation
          sequence={['Specialized in Impossible Things', 1000, '', 500]}
          wrapper="p"
          speed={50}
          repeat={Infinity}
          className="text-cyan-300 text-lg md:text-xl italic tracking-wider"
        />

        {/* Contact Info */}
  <div className="mt-8 text-cyan-300">
  <p className="text-lg font-semibold mb-2">📞 Reach Out to Us:</p>
  <div className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-8 text-sm md:text-base">
    
    <div>
      <p>
        <span className="text-white font-bold">Mahesh Kushwah</span> — +91 87707 26065
      </p>
      <p className="text-gray-400 ml-1">5th Sem, ECE</p>
    </div>
    
    <div>
      <p>
        <span className="text-white font-bold">Nikhil Kushwah</span> — +91 79872 60228
      </p>
      <p className="text-gray-400 ml-1">5th Sem, EE</p>
    </div>

  </div>
</div>



        {/* Social Icons */}
        <div className="flex space-x-8 mt-6 text-2xl text-cyan-300">
          <a
            href="https://www.instagram.com/fluxsati/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/fluxsati/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Website */}
        <p className="mt-4 text-sm text-cyan-400 ">
          🌐 Visit:{' '}
          <a
            href="https://clubflux.netlify.app"
            className="underline hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            clubflux.netlify.app
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactUs;
