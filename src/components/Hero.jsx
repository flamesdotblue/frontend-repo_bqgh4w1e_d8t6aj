import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* soft vignette and gradient glow overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-start px-6 pt-32 pb-20 md:pt-40">
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
          Inspired by modern, fluid curves
        </div>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          AI For Education
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
          Aame helps learners, professionals, and universities create high‑quality, personalized learning experiences powered by multi‑source AI research.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <a
            href="#download"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black shadow/30 shadow-white/10 transition hover:bg-white/90"
          >
            Get Aame
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#use-cases"
            className="text-sm text-white/70 hover:text-white"
          >
            Explore use cases
          </a>
        </div>
      </div>
      {/* flowing curve accent */}
      <div className="relative">
        <div className="pointer-events-none mx-auto h-24 max-w-6xl rounded-full bg-gradient-to-r from-fuchsia-500/20 via-sky-400/20 to-emerald-400/20 blur-2xl" />
      </div>
    </section>
  );
}
