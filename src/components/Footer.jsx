import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
        <p className="text-sm text-white/70">© 2025 Flames • Vibrant edition</p>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-white/80">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#use-cases" className="hover:text-white">Use cases</a>
          <a href="#waitlist" className="hover:text-white">Waitlist</a>
        </nav>
      </div>
    </footer>
  );
}
