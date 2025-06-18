import React from 'react';
import InnovationGif from '../assets/Innovation.gif';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <section className="min-h-screen px-4 md:px-20 py-24 bg-black text-white font-orbitron relative overflow-hidden">
      {/* Grid Background + Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-hacker-grid bg-[length:40px_40px] opacity-60" />
      <div className="absolute w-64 h-64 bg-purple-500 blur-3xl opacity-20 rounded-full top-1/3 left-10 z-0" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left - Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
            <img
              src={InnovationGif}
              alt="Hackathon Illustration"
              className="w-[300px] md:w-[400px] object-contain"
            />
          </div>
        </div>

        {/* Right - AutoTyped Heading + Content */}
        <div className="w-full md:w-1/2 text-cyan-200">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            <TypeAnimation
                      sequence={[
                        'About FLUXWave',
                        1000,
                        '',
                        500,
                      ]}
                      wrapper="p"
                      speed={50}
                      repeat={Infinity}
                      className="text-2xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent
                      "
                    />
          </h2>

          <div className="space-y-6 text-base md:text-lg font-light">
            <p>
              🚀 <strong>What is the FLUXWave?</strong><br />
              FLUXWave is an online hackathon with 3 thrilling rounds, where coders solve challenges from anywhere.
            </p>
            <p>
              🧠 <strong>Domains:</strong><br />
              Focus: Real-world software problems — Web, Mobile, Tools, and more.
              <br />
              Open Innovation — build in any area you're passionate about.
            </p>
            <p>
              💬 <strong>Why it matters?</strong><br />
              It’s your chance to build fast, learn faster, collaborate with peers, and showcase your skills to the tech world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
