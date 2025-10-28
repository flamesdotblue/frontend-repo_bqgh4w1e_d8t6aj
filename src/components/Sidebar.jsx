import React from 'react';
import { Home, Star, Mail } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-20 hidden h-full w-20 flex-col items-center justify-between border-r border-white/10 bg-slate-950/60 px-2 py-6 backdrop-blur md:flex">
      <div className="flex flex-col items-center gap-6">
        <a href="#home" className="group rounded-full p-2 text-white/70 hover:text-white">
          <Home size={20} />
        </a>
        <a href="#use-cases" className="group rounded-full p-2 text-white/70 hover:text-white">
          <Star size={20} />
        </a>
        <a href="#waitlist" className="group rounded-full p-2 text-white/70 hover:text-white">
          <Mail size={20} />
        </a>
      </div>
      <div className="text-[10px] tracking-wider text-white/40">FLAMES</div>
    </aside>
  );
}
