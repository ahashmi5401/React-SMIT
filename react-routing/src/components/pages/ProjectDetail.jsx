import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto animate-in fade-in duration-1000 px-4">
      {/* Minimal Header Nav */}
      <nav className="flex justify-between items-center mb-20">
        <button 
          onClick={() => navigate('/work')}
          className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium cursor-pointer"
        >
          <span className="text-lg">←</span> All Projects
        </button>
        <div className="h-[1px] flex-1 mx-8 bg-zinc-900" />
        <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest">Case_01</span>
      </nav>

      {/* Main Hero: Clean Typography */}
      <header className="mb-24">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8">
          Smart <span className="text-zinc-700">Enterprise</span> <br /> 
          Management System
        </h1>
        <div className="flex flex-wrap gap-4 items-center">
          <span className="px-4 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs rounded-full">React 19</span>
          <span className="px-4 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs rounded-full">Firebase</span>
          <span className="px-4 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs rounded-full">Tailwind v4</span>
        </div>
      </header>

      {/* Featured Image: Modern Card Style */}
      <div className="relative aspect-video rounded-3xl overflow-hidden mb-24 border border-zinc-800 bg-zinc-950 group shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-zinc-800 font-bold uppercase tracking-[0.5em] text-sm group-hover:tracking-[0.7em] transition-all duration-700">
            Preview_Locked
          </span>
        </div>
      </div>

      {/* Content Grid: Clean & Readable */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-32">
        <div className="md:col-span-8">
          <h2 className="text-white text-xl font-semibold mb-6">The Challenge</h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-10">
            Managing enterprise data requires a fine balance between accessibility and security. 
            The goal was to build a system where complex role-based permissions didn't compromise 
            the user experience.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
              <h3 className="text-white text-sm font-bold mb-3 uppercase tracking-wider">01. Security</h3>
              <p className="text-zinc-500 text-sm">Triple-tier RBAC ensures that sensitive company data remains visible only to authorized nodes.</p>
            </div>
            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
              <h3 className="text-white text-sm font-bold mb-3 uppercase tracking-wider">02. Velocity</h3>
              <p className="text-zinc-500 text-sm">Optimized with React 19 concurrent features for near-instant data synchronization.</p>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="md:col-span-4 space-y-12">
          <div className="space-y-4">
            <button className="w-full py-4 bg-white text-black font-bold text-sm rounded-xl hover:bg-cyan-400 transition-all cursor-pointer shadow-lg shadow-cyan-500/5 active:scale-95">
              Live Preview
            </button>
            <button className="w-full py-4 bg-zinc-900 border border-zinc-800 text-zinc-300 font-bold text-sm rounded-xl hover:border-zinc-500 transition-all cursor-pointer">
              Source Code
            </button>
          </div>

          <div className="space-y-6 pt-10 border-t border-zinc-900">
            <div>
              <p className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest mb-1">Services</p>
              <p className="text-zinc-300 text-sm">UI/UX Design, Front-end Dev</p>
            </div>
            <div>
              <p className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest mb-1">Year</p>
              <p className="text-zinc-300 text-sm">2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Next Project Tease */}
      <footer className="border-t border-zinc-900 py-20 text-center">
        <p className="text-zinc-600 text-sm mb-4">Next Project</p>
        <button className="text-4xl md:text-6xl font-bold text-white hover:text-cyan-400 transition-colors cursor-pointer">
          Webify Social Engine →
        </button>
      </footer>
    </div>
  );
};

export default ProjectDetail;