import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { FaRocket } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const navigate = useNavigate();

  const iconRef = useRef();
  const titleRef = useRef();
  const buttonRef = useRef();
  const taglineRef = useRef();
  const timelineRef = useRef();

  useEffect(() => {
    // Initial fade-in animations
    gsap.set([iconRef.current, titleRef.current, buttonRef.current, taglineRef.current], {
      opacity: 0,
      y: 20,
    });

    gsap.to(iconRef.current, { y: 0, opacity: 1, duration: 1, ease: 'power1.out' });
    gsap.to(titleRef.current, { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power1.out' });
    gsap.to(taglineRef.current, { y: 0, opacity: 1, duration: 1, delay: 0.6, ease: 'power1.out' });
    gsap.to(buttonRef.current, { y: 0, opacity: 1, duration: 1, delay: 1.2, ease: 'power1.out' });

    // Infinite scrolling text animation
    gsap.to(timelineRef.current, {
      xPercent: -50,
      ease: 'linear',
      duration: 8,
      repeat: -1,
    });
  }, []);

  return (
    <section className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center text-center overflow-hidden px-4 font-orbitron">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-hacker-grid bg-[length:40px_40px] animate-moveGrid animate-glow opacity-40" />

      {/* Glow Blob */}
      <div className="absolute w-40 h-40 bg-cyan-400 blur-3xl opacity-60 rounded-full z-[1] top-[25%]" />

      {/* Rocket Icon */}
      <FaRocket
        ref={iconRef}
        className="text-cyan-400 text-7xl mb-6 z-10"
      />

      {/* Title */}
      <h1
        ref={titleRef}
        className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-xl z-10"
      >
        FLUXWave
      </h1>

      {/* Type Animation */}
      <div className="mt-4 text-lg md:text-xl text-cyan-200 max-w-xl z-10 font-light">
        <TypeAnimation
          sequence={[
            "⚡ Adrenaline-charged missions await,",
            2000,
            "🔥 Solve high-stakes problems at full throttle,",
            2000,
            "🏆 Winners don’t wait — they build.",
            2000,
          ]}
          speed={80}
          repeat={Infinity}
          wrapper="p"
        />
      </div>

      {/* Tagline */}
      <p
        ref={taglineRef}
        className="mt-4 text-base md:text-lg text-cyan-300 max-w-xl z-10 italic font-light"
      >
        "Ride the surge of creativity"
      </p>

      {/* Register Button */}
      <div className="text-center py-10">
        <button
          ref={buttonRef}
          onClick={() => navigate('/zeroth')}
          className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-orbitron px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Register Now
        </button>
      </div>

      {/* Timeline Ticker */}
      <div className="absolute bottom-6 w-full px-4 z-10">
        <div className="border-2 border-cyan-400 rounded-full overflow-hidden shadow-[0_0_20px_#22d3ee]">
          <div
            ref={timelineRef}
            className="whitespace-nowrap flex gap-12 py-2 px-4 text-sm md:text-base text-cyan-200 font-semibold tracking-widest"
          >
            {/* Repeated content for seamless loop */}
            <span>🚀 FLUXWave 2K25</span>
            <span>💻 SHIP YOUR IDEAS</span>
            <span>🏆 WIN EXCITING PRIZES</span>
            <span>📝 ENROLL NOW FOR FREE</span>
            <span>🚀 FLUXWave 2K25</span>
            <span>💻 SHIP YOUR IDEAS</span>
            <span>🏆 WIN EXCITING PRIZES</span>
            <span>📝 ENROLL NOW FOR FREE</span>
            <span>🚀 FLUXWave 2K25</span>
            <span>💻 SHIP YOUR IDEAS</span>
             <span>🏆 WIN EXCITING PRIZES</span>
              <span>🚀 FLUXWave 2K25</span>
            <span>💻 SHIP YOUR IDEAS</span>
            <span>🏆 WIN EXCITING PRIZES</span>
            <span>📝 ENROLL NOW FOR FREE</span>
            <span>🚀 FLUXWave 2K25</span>
            <span>💻 SHIP YOUR IDEAS</span>
            <span>🏆 WIN EXCITING PRIZES</span>
            <span>📝 ENROLL NOW FOR FREE</span>
            <span>🚀 FLUXWave 2K25</span>
            <span>💻 SHIP YOUR IDEAS</span>
             <span>🏆 WIN EXCITING PRIZES</span>
              <span>🚀 FLUXWave 2K25</span>
            <span>💻 SHIP YOUR IDEAS</span>
            <span>🏆 WIN EXCITING PRIZES</span>
            <span>📝 ENROLL NOW FOR FREE</span>
            <span>🚀 FLUXWave 2K25</span>
            <span>💻 SHIP YOUR IDEAS</span>
            <span>🏆 WIN EXCITING PRIZES</span>
            <span>📝 ENROLL NOW FOR FREE</span>
            <span>🚀 FLUXWave 2K25</span>
            <span>💻 SHIP YOUR IDEAS</span>
             <span>🏆 WIN EXCITING PRIZES</span>
              <span>🚀 FLUXWave 2K25</span>
            <span>💻 SHIP YOUR IDEAS</span>
            <span>🏆 WIN EXCITING PRIZES</span>
            <span>📝 ENROLL NOW FOR FREE</span>
            <span>🚀 FLUXWave 2K25</span>
            <span>💻 SHIP YOUR IDEAS</span>
            <span>🏆 WIN EXCITING PRIZES</span>
            <span>📝 ENROLL NOW FOR FREE</span>
            <span>🚀 FLUXWave 2K25</span>
            <span>💻 SHIP YOUR IDEAS</span>
             <span>🏆 WIN EXCITING PRIZES</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
