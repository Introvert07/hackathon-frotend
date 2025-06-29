import React from 'react';

const rounds = [
  {
    title: 'Round 0 — Team Formation',
    description: 'Form a team of 3–4 members from any year,  Submit idea name.',
    date: '📅 Last Date: 8 July, 11:59 PM',
  },
  {
    title: 'Round 1 — PPT Submission',
    description: 'Submit a PPT explaining your idea and approach.',
    date: '📅 Last Date: 12 July, 11:59 PM',
  },
  {
    title: 'Round 2 — Prototype Submission',
    description:
      'Submit your GitHub repo (preferred) or ZIP of the project with a demo video. Deployed project is a bonus.',
    date: '📅 Last Date: 24 July, 11:59 PM',
  },
  {
    title: 'Round 3 — Final Interview',
    description: 'Team interview based on project, clarity, and teamwork.',
    date: '📅 Interview Date: 27 July',
  },
];

const Timeline = () => {
  return (
    <section className="min-h-screen bg-black  text-white font-orbitron px-4 py-20 relative">
      {/* Grid BG + Glow */}
      <div className="absolute inset-0 bg-hacker-grid bg-[length:40px_40px] opacity-40 z-0" />
      <div className="absolute w-32 h-32 bg-cyan-400 blur-3xl opacity-60 rounded-full top-[15%] left-[15%] z-0" />
      <div className="absolute w-40 h-40 bg-purple-500 blur-3xl opacity-40 rounded-full bottom-[10%] right-[10%] z-0" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          Timeline
        </h1>

        <div className="space-y-10 ">
          {rounds.map((round, index) => (
            <div
              key={index}
              className="border-l-4  border-cyan-400 pl-6 hover:bg-white/5 hover:scale-[1.02] transition-all duration-300 rounded-md py-4 backdrop-blur-sm"
            >
              <h2 className="text-2xl  md:text-3xl font-bold text-cyan-300 mb-2 ">
                {round.title}
              </h2>
              <p className="text-cyan-100">{round.description}</p>
              <p className="text-sm text-cyan-400 mt-2 italic">{round.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
