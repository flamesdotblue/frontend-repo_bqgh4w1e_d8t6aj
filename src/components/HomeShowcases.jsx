import React from 'react';

const showcases = [
  {
    title: 'AI Chat Interfaces',
    desc: 'Delightful prompts, rich responses, and safe fallbacks. Built for clarity and speed.',
    tag: 'Chat'
  },
  {
    title: 'Creative Tools',
    desc: 'Curate, remix, and reframe ideas with colorful gradients and glassy UI.',
    tag: 'Create'
  },
  {
    title: 'Automation Flows',
    desc: 'Trigger pipelines, track progress, and get alerts in one sleek dashboard.',
    tag: 'Automate'
  },
];

function ChatCard({ title, desc, tag }) {
  return (
    <div className="group relative">
      {/* Vibrant gradient frame */}
      <div className="absolute -inset-[1.5px] rounded-2xl bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-emerald-400 opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative overflow-hidden rounded-2xl bg-slate-900/70 p-[1px]">
        {/* Inner surface */}
        <div className="relative rounded-[14px] bg-slate-950/80 p-6 shadow-lg ring-1 ring-white/10 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:shadow-xl">
          {/* Soft colorful glow background */}
          <div className="pointer-events-none absolute -inset-12 -z-[1] opacity-60 blur-3xl" style={{
            background:
              'radial-gradient(60% 80% at 20% 10%, rgba(217,70,239,0.30), transparent 60%), radial-gradient(70% 60% at 80% 30%, rgba(34,197,94,0.25), transparent 60%), radial-gradient(50% 70% at 50% 90%, rgba(34,211,238,0.25), transparent 60%)'
          }} />

          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
            {tag}
          </div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm text-white/80">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomeShowcases() {
  return (
    <section id="use-cases" className="relative mx-auto max-w-6xl px-6 py-20">
      <header className="mb-10">
        <h2 className="text-2xl font-semibold text-white">Use cases</h2>
        <p className="mt-2 max-w-2xl text-sm text-white/80">
          Vibrant gradients, playful motion, and crisp content. Hover a card to feel it lift.
        </p>
      </header>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {showcases.map((c) => (
          <ChatCard key={c.title} title={c.title} desc={c.desc} tag={c.tag} />
        ))}
      </div>
    </section>
  );
}
