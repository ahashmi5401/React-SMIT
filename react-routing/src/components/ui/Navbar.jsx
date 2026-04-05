import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  let navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const activeStyle =
    'text-cyan-400 border-b-2 border-cyan-400 pb-1 transition-all';
  const normalStyle =
    'text-zinc-500 hover:text-zinc-200 transition-all duration-300 pb-1';

  const links = [
    { to: '/', label: '01_Home' },
    { to: '/about', label: '02_About' },
    { to: '/work', label: '03_Work' },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-zinc-900 px-5 sm:px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">

          {/* Logo */}
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 group cursor-pointer relative z-50 shrink-0"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center font-black text-black text-xs group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              AH
            </div>
            <span className="text-white font-bold tracking-tighter text-lg uppercase">
              Ayan<span className="text-cyan-500">.Archive</span>
            </span>
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => isActive ? activeStyle : normalStyle}
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Desktop Hire Button */}
          <button
          onClick={() => navigate('hire-me')}
           className="hidden md:block px-5 py-2 border border-zinc-800 text-zinc-400 text-[9px] font-bold uppercase rounded-full hover:bg-white hover:text-black transition-all cursor-pointer tracking-widest shrink-0">
            Ready_To_Hire
          </button>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setIsOpen(prev => !prev)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="md:hidden relative z-50 p-2 -mr-1 text-zinc-400 hover:text-white transition-colors focus:outline-none"
          >
            <div className="w-6 flex flex-col gap-[5px]">
              <span className={`block h-0.5 bg-current rounded transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-0.5 bg-current rounded transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Overlay — rendered outside nav so it covers full viewport */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center gap-10
          font-mono text-xs uppercase tracking-[0.3em] font-bold md:hidden
          transition-all duration-500
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `text-2xl tracking-widest ${isActive ? 'text-cyan-400' : 'text-zinc-400 hover:text-white'} transition-colors`
            }
          >
            {label}
          </NavLink>
        ))}

        <NavLink 
        to="/hire-me"
       className="mt-6 px-8 py-3 border border-zinc-700 text-zinc-400 text-[10px] font-bold uppercase rounded-full hover:bg-white hover:text-black transition-all tracking-widest cursor-pointer inline-block"
>
  Ready_To_Hire
</NavLink>
      </div>
    </>
  );
};

export default Navbar;