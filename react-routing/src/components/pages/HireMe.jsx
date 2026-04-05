import React, { useState, useEffect, useRef } from 'react';

const services = [
  { id: '01', label: 'Enterprise Systems', detail: 'React 19, Firebase, Triple-Tier RBAC [cite: 7, 18]' },
  { id: '02', label: 'Performance Engineering', detail: 'Vite 7, 95+ Lighthouse, 30% Load reduction [cite: 7, 14]' },
  { id: '03', label: 'Data Visualization', detail: 'Python, NumPy, Real-time Damage Metrics [cite: 8, 27]' },
  { id: '04', label: 'Component Architecture', detail: 'Atomic Design, 15+ Reusable Library ' },
];

const stats = [
  { value: '95+', label: 'Performance Score ' },
  { value: '15+', label: 'Reusable Components ' },
  { value: '100%', label: 'Remote Ready [cite: 12]' },
];

const TICKER_TEXT = 'AYAN HASHMI · FRONTEND ENGINEER · REACT 19 SPECIALIST · SYSTEM ARCHITECT · ';

export default function HireMe() {
  const [form, setForm] = useState({ name: '', email: '', budget: '', message: '' });
  const [focused, setFocused] = useState(null);
  const [sent, setSent] = useState(false);
  const [tickerX, setTickerX] = useState(0);
  const tickerRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    let x = 0;
    const speed = 0.6;
    const animate = () => {
      x -= speed;
      const w = tickerRef.current?.scrollWidth / 2 || 600;
      if (Math.abs(x) >= w) x = 0;
      setTickerX(x);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const inputBase = 'w-full bg-transparent border-b text-white text-sm font-mono py-3 outline-none transition-all duration-300 placeholder-zinc-800';

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      
      {/* ── Top Ticker: Terminal Style ── */}
      <div className="border-b border-zinc-900 py-4 bg-zinc-950/50 backdrop-blur-sm sticky top-0 z-40">
        <div
          ref={tickerRef}
          className="flex whitespace-nowrap"
          style={{ transform: `translateX(${tickerX}px)` }}
        >
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-[9px] font-mono tracking-[0.4em] text-zinc-500 uppercase mr-0">
              {TICKER_TEXT}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        
        {/* ── Hero: Massive Brutalist Text ── */}
        <div className="mb-24">
          <p className="font-mono text-[9px] tracking-[0.5em] text-cyan-500 uppercase mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-cyan-500/30"></span> 
            Status: Ready_For_Deployment [cite: 12]
          </p>

          <h1 className="font-black tracking-tighter leading-[0.8] mb-12 text-[clamp(4rem,14vw,10rem)]">
            HIRE<br />
            <span className="text-zinc-900 stroke-zinc-800 stroke-1 italic">AYAN_</span>
          </h1>

          <div className="flex flex-wrap gap-x-16 gap-y-8 mt-12 border-t border-zinc-900 pt-10">
            {stats.map((s) => (
              <div key={s.label} className="group">
                <p className="text-3xl md:text-5xl font-black text-white tracking-tighter group-hover:text-cyan-400 transition-colors duration-500">
                  {s.value}
                </p>
                <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-[0.2em] mt-2 italic">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Main Content Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* LEFT: Capabilities */}
          <div className="space-y-16">
            <div>
              <p className="font-mono text-[10px] tracking-[0.4em] text-zinc-700 uppercase mb-8 underline decoration-zinc-900 underline-offset-8">
                Capabilities_v1.0
              </p>
              <div className="flex flex-col border-t border-zinc-900">
                {services.map((s) => (
                  <div key={s.id} className="group py-6 border-b border-zinc-900 flex items-start gap-6 hover:bg-zinc-950/30 transition-all px-2">
                    <span className="font-mono text-[10px] text-cyan-900 group-hover:text-cyan-500 transition-colors mt-1">[{s.id}]</span>
                    <div>
                      <p className="text-sm font-bold tracking-widest text-zinc-400 group-hover:text-white transition-colors uppercase italic">
                        {s.label}
                      </p>
                      <p className="text-[10px] font-mono text-zinc-600 mt-2 tracking-tighter uppercase">{s.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability Node */}
            <div className="bg-zinc-950 border border-zinc-900 p-8 rounded-sm relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-3xl group-hover:bg-cyan-500/10 transition-all" />
              <div className="flex items-center gap-3 mb-4">
                <span className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                <span className="font-mono text-[10px] tracking-[0.3em] text-white uppercase">Active Node</span>
              </div>
              <p className="text-[11px] text-zinc-500 font-mono leading-relaxed uppercase tracking-tight">
                Currently based in Karachi, PK. Available for remote engineering roles and complex system architecture[cite: 12].
              </p>
              <div className="mt-8 pt-6 border-t border-zinc-900">
                <p className="text-[9px] font-mono text-zinc-700 uppercase mb-2 italic underline underline-offset-4">Encrypted_Channel</p>
                <a href="mailto:ahashmi5401@gmail.com" className="text-sm font-bold tracking-widest text-zinc-300 hover:text-cyan-400 transition-colors ">
                  ahashmi5401@gmail.com →
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Transmission Form */}
          <div className="lg:sticky lg:top-32">
            {sent ? (
              <div className="py-20 text-center lg:text-left animate-in fade-in zoom-in-95 duration-500">
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-cyan-500 leading-none mb-6 italic">
                  LOGGED_ <br /> SUCCESS
                </h2>
                <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Awaiting manual verification. Check your inbox.</p>
                <button onClick={() => setSent(false)} className="mt-10 text-[10px] font-mono text-zinc-700 hover:text-white uppercase tracking-widest border-b border-zinc-800 pb-1 cursor-pointer">
                  Repeat_Transmission →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="relative">
                  <label className={`text-[9px] font-mono tracking-[0.4em] uppercase mb-4 block ${focused === 'name' ? 'text-cyan-500' : 'text-zinc-600'}`}>
                    Identifier_Name
                  </label>
                  <input
                    type="text" required placeholder="WHO IS SENDING?"
                    onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`${inputBase} ${focused === 'name' ? 'border-cyan-500' : 'border-zinc-900'}`}
                  />
                </div>

                <div className="relative">
                  <label className={`text-[9px] font-mono tracking-[0.4em] uppercase mb-4 block ${focused === 'email' ? 'text-cyan-500' : 'text-zinc-600'}`}>
                    Return_Path (Email)
                  </label>
                  <input
                    type="email" required placeholder="YOUR_NODE@EMAIL.COM"
                    onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`${inputBase} ${focused === 'email' ? 'border-cyan-500' : 'border-zinc-900'}`}
                  />
                </div>

                <div className="relative">
                  <label className={`text-[9px] font-mono tracking-[0.4em] uppercase mb-4 block ${focused === 'message' ? 'text-cyan-500' : 'text-zinc-600'}`}>
                    Project_Manifesto
                  </label>
                  <textarea
                    required rows={4} placeholder="WHAT ARE WE BUILDING?"
                    onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputBase} resize-none ${focused === 'message' ? 'border-cyan-500' : 'border-zinc-900'}`}
                  />
                </div>

                <button
                  type="submit"
                  className="group relative w-full py-5 bg-zinc-900 border border-zinc-800 text-white font-black text-[10px] uppercase tracking-[0.5em] overflow-hidden hover:bg-white hover:text-black transition-all duration-500 cursor-pointer"
                >
                  <span className="relative z-10 italic">Execute_Transmission_</span>
                  <div className="absolute inset-0 bg-cyan-400 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* ── Footer Metadata ── */}
        <div className="mt-40 pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 hover:opacity-100 transition-opacity">
          <p className="font-mono text-[9px] uppercase tracking-[0.4em]">AYAN_HASHMI_SYSTEM_V.4.0</p>
          <div className="flex gap-8">
            <a href="https://github.com/ahashmi5401" className="font-mono text-[9px] uppercase tracking-widest hover:text-cyan-400 ">GitHub</a>
            <a href="https://linkedin.com/in/ayan-hashmi" className="font-mono text-[9px] uppercase tracking-widest hover:text-cyan-400 ">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}