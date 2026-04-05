import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    title: "Smart EMS",
    tag: "Enterprise",
    year: "2025",
    desc: "Real-time energy management system with predictive analytics dashboard.",
    color: "from-cyan-500/10",
  },
  {
    title: "Webify Engine",
    tag: "Social",
    year: "2025",
    desc: "High-throughput content delivery engine powering social interactions at scale.",
    color: "from-violet-500/10",
  },
  {
    title: "Sentec Portal",
    tag: "AI/ML",
    year: "2024",
    desc: "Intelligent sensor data portal with ML-driven anomaly detection pipelines.",
    color: "from-emerald-500/10",
  },
];

const tagColors = {
  Enterprise: "border-cyan-900 text-cyan-500 group-hover:border-cyan-400 group-hover:text-cyan-400",
  Social:     "border-violet-900 text-violet-500 group-hover:border-violet-400 group-hover:text-violet-400",
  "AI/ML":    "border-emerald-900 text-emerald-500 group-hover:border-emerald-400 group-hover:text-emerald-400",
};

const Work = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  return (
    <div className="animate-in slide-in-from-bottom-6 duration-1000 px-5 sm:px-8 md:px-0">

      {/* Header */}
      <div className="flex items-end justify-between mb-10 md:mb-14">
        <div>
          <p className="text-[9px] font-mono tracking-[0.35em] text-zinc-600 uppercase mb-2">
            Portfolio / Archives
          </p>
          <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-500 italic underline decoration-zinc-800 underline-offset-8">
            Selected_Archives
          </h2>
        </div>
        <span className="font-mono text-[10px] text-zinc-700 tabular-nums">
          {projects.length} Projects
        </span>
      </div>

      {/* Project List */}
      <div className="flex flex-col border-t border-zinc-900">
        {projects.map((proj, i) => (
          <div
            key={i}
            onClick={() =>
              navigate(`/work/${proj.title.toLowerCase().replace(/\s+/g, '-')}`)
            }
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="group relative border-b border-zinc-900 cursor-pointer overflow-hidden
              px-0 py-8 sm:py-10 md:py-12
              transition-all duration-500"
          >
            {/* Hover glow */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${proj.color} to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            {/* Index line — thin accent on hover */}
            <div
              className={`absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b
                ${i === 0 ? 'from-cyan-500' : i === 1 ? 'from-violet-500' : 'from-emerald-500'}
                to-transparent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top`}
            />

            <div className="relative pl-0 sm:pl-4">
              {/* Top row: number + title */}
              <div className="flex items-baseline gap-4 sm:gap-6 mb-3">
                <span className="font-mono text-[10px] text-zinc-700 shrink-0">
                  0{i + 1}
                </span>
                <h3
                  className={`font-black tracking-tighter transition-all duration-300
                    text-[clamp(2rem,7vw,4rem)]
                    ${hovered === i ? 'text-white italic' : 'text-zinc-500'}
                    leading-none`}
                >
                  {proj.title}
                </h3>
              </div>

              {/* Description — visible on hover, hidden at rest */}
              <div
                className={`overflow-hidden transition-all duration-400 pl-8 sm:pl-10
                  ${hovered === i ? 'max-h-10 opacity-100 mb-4' : 'max-h-0 opacity-0 mb-0'}`}
              >
                <p className="text-[11px] sm:text-xs text-zinc-500 font-mono leading-relaxed">
                  {proj.desc}
                </p>
              </div>

              {/* Bottom row: tag + year + arrow */}
              <div className="flex items-center gap-4 sm:gap-8 pl-8 sm:pl-10">
                <span
                  className={`px-3 py-1 border text-[9px] sm:text-[10px] rounded-full
                    uppercase font-bold tracking-widest bg-black/50 transition-colors duration-300
                    ${tagColors[proj.tag]}`}
                >
                  {proj.tag}
                </span>
                <span className="font-mono text-[10px] text-zinc-700 group-hover:text-zinc-500 transition-colors">
                  {proj.year}
                </span>

                {/* Arrow — slides in on hover */}
                <span
                  className={`ml-auto font-mono text-[10px] transition-all duration-300
                    ${hovered === i ? 'opacity-100 translate-x-0 text-zinc-400' : 'opacity-0 -translate-x-2'}`}
                >
                  VIEW →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="mt-10 md:mt-14 text-zinc-700 text-[10px] font-mono text-center uppercase tracking-widest">
        Full technical logs available on{' '}
        <a
          href="#"
          className="text-zinc-500 hover:text-cyan-400 border-b border-zinc-800 hover:border-cyan-400/50 transition-all"
        >
          GitHub_Remote
        </a>
      </p>
    </div>
  );
};

export default Work;