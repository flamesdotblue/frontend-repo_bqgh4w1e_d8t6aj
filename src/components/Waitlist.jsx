import { Mail } from 'lucide-react';
import { useCallback } from 'react';

export default function Waitlist() {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = (data.get('name') || '').toString();
    const email = (data.get('email') || '').toString();
    const age = (data.get('age') || '').toString();
    const interestedFor = (data.get('interestedFor') || '').toString();
    const occupation = (data.get('occupation') || '').toString();

    const subject = encodeURIComponent('Aame Waitlist Signup');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nAge: ${age}\nInterested For: ${interestedFor}\nOccupation: ${occupation}`
    );

    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  }, []);

  return (
    <section id="waitlist" className="relative py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-40 bg-gradient-to-b from-fuchsia-500/20 via-sky-400/20 to-transparent blur-2xl" />
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
          <Mail className="h-3.5 w-3.5" />
          Join the waitlist
        </div>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Be first to try Aame</h2>
        <p className="mt-2 text-white/70">Sign up and well reach out with early access and updates.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs text-white/60" htmlFor="name">Name</label>
              <input id="name" name="name" required className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-white/20" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="mb-1 block text-xs text-white/60" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-white/20" placeholder="jane@company.com" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="mb-1 block text-xs text-white/60" htmlFor="age">Age</label>
              <input id="age" name="age" type="number" min="10" max="120" className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-white/20" placeholder="24" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-xs text-white/60" htmlFor="interestedFor">Interested For</label>
              <input id="interestedFor" name="interestedFor" className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-white/20" placeholder="GATE, Upskilling, Professor tools..." />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs text-white/60" htmlFor="occupation">Occupation</label>
            <input id="occupation" name="occupation" className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-white/20" placeholder="Student, Working Professional, Professor..." />
          </div>

          <div className="pt-2">
            <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-black shadow/30 shadow-white/10 transition hover:bg-white/90">
              Join Waitlist
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
