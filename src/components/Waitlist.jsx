import React, { useState } from 'react';

export default function Waitlist() {
  const [status, setStatus] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    setStatus('Thanks for joining!');
  }

  return (
    <section id="waitlist" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-[1px]">
        <div className="relative rounded-[14px] bg-slate-950/80 p-6 ring-1 ring-white/10">
          {/* Ambient gradient glow */}
          <div className="pointer-events-none absolute -inset-20 -z-[1] blur-3xl opacity-60" style={{
            background:
              'radial-gradient(60% 80% at 20% 10%, rgba(217,70,239,0.25), transparent 60%), radial-gradient(70% 60% at 80% 30%, rgba(34,197,94,0.25), transparent 60%), radial-gradient(50% 70% at 50% 90%, rgba(34,211,238,0.25), transparent 60%)'
          }} />

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white">Join the waitlist</h3>
            <p className="mt-1 text-sm text-white/80">Get early access and updates.</p>
          </div>

          <form onSubmit={onSubmit} className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:border-white/30 focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:border-white/30 focus:outline-none"
              required
            />
            <select
              name="interestedFor"
              className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:border-white/30 focus:outline-none md:col-span-2"
            >
              <option value="chat">Conversational UI</option>
              <option value="creative">Creative tools</option>
              <option value="automation">Automation flows</option>
            </select>
            <button
              type="submit"
              className="md:col-span-2 mt-2 inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-500 px-4 py-2 text-sm font-medium text-slate-900 shadow hover:shadow-lg transition"
            >
              Notify me
            </button>
          </form>
          {status && <p className="mt-3 text-sm text-emerald-300">{status}</p>}
        </div>
      </div>
    </section>
  );
}
