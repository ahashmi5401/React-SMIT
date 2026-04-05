import React from 'react';

const About = () => {
  // Resume se liye gaye actual skills
  const coreSkills = ["React 19", "JavaScript (ES6+)", "TypeScript", "Tailwind v4", "Firebase", "Vite 7"];
  const dataSkills = ["Python", "NumPy", "Pandas", "Scikit-Learn", "Data Visualization", "Power BI"];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 max-w-4xl px-4 md:px-0">
      {/* Header Section */}
      <header className="mb-12">
        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-cyan-500 mb-4 italic">
          02_Technical_Profile
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
          Muhammad Ayan Hashmi
        </h1>
        <p className="mt-4 text-zinc-500 font-mono text-sm">
          Computer Engineering @ SSUET // Based in Karachi, PK
        </p>
      </header>

      <div className="space-y-12 text-zinc-400 leading-relaxed text-lg">
        {/* Intro from Resume Experience */}
        <section className="max-w-2xl">
          <p>
            I am a <span className="text-white font-medium">Front End Developer</span> specializing in 
            building high-performance interfaces. Currently, I'm engineering responsive systems at 
            <span className="text-cyan-400"> Aykays Agency & Hex Software</span>, where I've achieved a 
            95+ Google Lighthouse score through optimized Vite 7 bundling and React 19 architectures.
          </p>
        </section>

        {/* Dynamic Skills Grid */}
        <div className="py-10 border-y border-zinc-900 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Core Web Stack */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-6 border-l-2 border-cyan-500 pl-4">
              Development_Core
            </h3>
            <div className="grid grid-cols-2 gap-y-4 gap-x-2">
              {coreSkills.map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-cyan-500 rounded-full" />
                  <span className="font-mono text-[11px] text-zinc-300 uppercase tracking-tighter">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Data Science / Al Stack */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-6 border-l-2 border-zinc-700 pl-4">
              Data_&_Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-y-4 gap-x-2">
              {dataSkills.map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-zinc-700 rounded-full" />
                  <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-tighter">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements / Education Split */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-[10px] tracking-widest text-zinc-500 italic">
              Major_Milestones
            </h3>
            <ul className="space-y-6">
              <li className="relative pl-6 border-l border-zinc-800">
                <p className="text-sm text-zinc-200 font-bold">SENTEC NED Hackathon</p>
                <p className="text-xs text-zinc-500">Collaborated on AI Disaster Management Portal (Oct. 2025)</p>
              </li>
              <li className="relative pl-6 border-l border-zinc-800">
                <p className="text-sm text-zinc-200 font-bold">SMIT Mini-Hackathon</p>
                <p className="text-xs text-zinc-500">12-Hour Rapid Prototyping Winner - Webify Social Engine</p>
              </li>
            </ul>
          </div>

          <div className="p-8 bg-zinc-900/30 rounded-2xl border border-zinc-800/50">
            <h3 className="text-cyan-400 font-bold mb-4 uppercase text-[10px] tracking-widest">The_Mission</h3>
            <p className="text-sm text-zinc-400 italic font-light leading-relaxed">
              "Transforming complex damage metrics and enterprise data into real-time, human-centric graphic 
              representations to bridge the gap between backend logic and intuitive UI."
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;