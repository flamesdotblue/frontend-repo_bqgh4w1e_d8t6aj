import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-slate-950 text-white">
      {/* Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Colorful gradient overlays to enhance contrast; don't block Spline interactions */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-fuchsia-500/20 via-cyan-400/10 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-emerald-500/20 via-cyan-400/10 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="backdrop-blur-[1px]">
          <h1 className="font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl">
            Vivid, playful, and interactive
          </h1>
          <p className="mt-4 max-w-xl text-sm/6 md:text-base/7 text-white/80">
            A bright hero with glassy gradients and smooth interactions. Explore vibrant use-cases below.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#use-cases" className="rounded-full bg-white px-5 py-2 text-sm font-medium text-slate-900 shadow hover:shadow-lg transition">
              Explore
            </a>
            <a href="#waitlist" className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur hover:bg-white/15 transition">
              Join waitlist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
