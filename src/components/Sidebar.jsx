import { Home, Layers, LogIn } from 'lucide-react';

const navItems = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#use-cases', label: 'Use Cases', icon: Layers },
  { href: '#waitlist', label: 'Waitlist / Login', icon: LogIn },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 h-full w-64 border-r border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="flex h-full flex-col px-4 py-6">
        <div className="mb-8">
          <div className="text-xl font-semibold tracking-tight text-white">Aame</div>
          <div className="text-xs text-white/60">AI for Education</div>
        </div>

        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white transition"
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
