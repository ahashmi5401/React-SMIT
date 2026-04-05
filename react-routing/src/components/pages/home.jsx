import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();

  return (
    <div className="relative min-h-[calc(100dvh-4rem)] flex flex-col justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 px-5 sm:px-8 md:px-12 lg:px-16 py-12 md:py-0">

      {/* Availability Status */}
      <div className="flex items-center gap-2.5 mb-8 md:mb-10">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
        </span>
        <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
          Available for Projects
        </span>
      </div>

      {/* Hero Title */}
      <h1 className="font-black tracking-tighter text-white leading-[0.88] mb-7 md:mb-8
        text-[clamp(3rem,12vw,9rem)]">
        FRONT-END <br />
        <span className="text-zinc-700 italic">ENGINEER_</span>
      </h1>

      {/* Description */}
      <p className="max-w-[min(90%,36rem)] text-[clamp(0.9rem,2.2vw,1.125rem)] text-zinc-400 leading-relaxed mb-10 md:mb-12">
        Building high-performance web interfaces with{' '}
        <span className="text-white font-medium">React 19</span> and modern
        architectural patterns. Focused on speed, accessibility, and clean code.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col xs:flex-row gap-4 items-stretch xs:items-center">
        <button
          onClick={() => navigate('/work')}
          className="px-8 py-4 bg-white text-black font-bold text-[11px] uppercase tracking-widest rounded-full
            hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg shadow-white/5
            xs:w-auto text-center"
        >
          View Projects
        </button>

        <button
        onClick={() => window.open('/Muhammad_Ayan_Hashmi_Resume.pdf', '_blank')}
          className="px-8 py-4 xs:px-0 text-zinc-500 hover:text-white font-bold text-[11px] uppercase
            tracking-widest transition-colors cursor-pointer text-center"
        >
          Read Resume
        </button>
      </div>

      {/* Background Decoration — desktop only */}
      <div
        aria-hidden="true"
        className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 -translate-x-4
          text-[clamp(10rem,22vw,22rem)] font-black text-zinc-900/20 select-none -z-10 tracking-tighter
          pointer-events-none"
      >
        01
      </div>
    </div>
  );
};

export default Home;