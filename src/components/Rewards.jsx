import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const rewards = [
  {
    title: '🥇 1st Prize',
    desc: 'Trophy + Certificate + Special Recognition + Surprise Gift!',
  },
  {
    title: '🥈 2nd Prize',
    desc: 'Trophy + Certificate + Surprise Gift!',
  },
  {
    title: '🥉 3rd Prize',
    desc: 'Certificate + Surprise Gift!',
  },
  {
    title: '📜 Participation Certificate',
    desc: 'All participants will receive digital certificates.',
  },
];

const specialAwards = [
  '🧠 Most Innovative Idea',
  '🔧 Best Use of Tech Stack',
  '💡 Most Impactful for Society',
  '🔥 Best UI/UX Design',
];

const Rewards = () => {
  const containerRef = useRef([]);

  useEffect(() => {
    containerRef.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
        }
      );
    });
  }, []);

  return (
    <section className="min-h-screen bg-black text-white font-orbitron px-6 py-20 relative">
      {/* Grid and Glow BG */}
      <div className="absolute inset-0 bg-hacker-grid bg-[length:40px_40px] opacity-40 z-0" />
      <div className="absolute w-32 h-32 bg-cyan-400 blur-3xl opacity-60 rounded-full top-[10%] left-[10%] z-0" />
      <div className="absolute w-40 h-40 bg-purple-500 blur-3xl opacity-40 rounded-full bottom-[5%] right-[10%] z-0" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-12">
          🏆 Rewards & Recognitions
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {rewards.map((reward, index) => (
            <div
              key={index}
              ref={(el) => (containerRef.current[index] = el)}
              className="p-6 rounded-lg bg-white/5 backdrop-blur-md border border-cyan-400/20 hover:bg-white/10 transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-cyan-300 mb-2">{reward.title}</h2>
              <p className="text-cyan-100">{reward.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-6">
          🎁 Creative Awards Beyond Winning
        </h2>

        <div className="space-y-4 max-w-xl mx-auto">
          {specialAwards.map((award, i) => (
            <p
              key={i}
              ref={(el) => (containerRef.current[rewards.length + i] = el)}
              className="text-cyan-200 text-lg bg-white/5 py-2 px-4 rounded-md backdrop-blur-sm border border-cyan-400/10 hover:bg-white/10 transition duration-300"
            >
              {award}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rewards;
