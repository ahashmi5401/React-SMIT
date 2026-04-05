import React from 'react';
import Navbar from './components/ui/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Work from './components/pages/Work';
import HireMe from './components/pages/HireMe';
import ProjectDetail from './components/pages/ProjectDetail';
import { Route , Routes } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-cyan-500/30 selection:text-cyan-900">
      
      {/* Static Navbar */}
      <Navbar />

      {/* Main Content Wrapper */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 space-y-32 py-20">
        
        {/* Section 01: Home */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/work/:projectId' element={<ProjectDetail />}></Route>
          <Route path='/work' element={<Work />} />
          <Route path='/hire-me' element={<HireMe />} />
        </Routes>

        {/* Simple Footer */}
        <footer className="pt-20 pb-10 border-t border-zinc-900/50 flex justify-between items-center text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">
          <p>© 2026 // Ayan Hashmi</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </footer>

      </main>

      {/* Technical Background Elements (Fixed) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-0">
        {/* Top-Left Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full" />
        
        {/* Bottom-Right Glow */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full" />
        
        {/* Fine Grid Pattern (Optional Engineer Detail) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

    </div>
  );
}

export default App;