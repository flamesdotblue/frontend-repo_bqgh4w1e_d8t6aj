import { Home, Layers, Building2, BookOpen, LifeBuoy, Scale, Instagram, Mail, Twitter, Linkedin } from 'lucide-react';

const navItems = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#use-cases', label: 'Use Cases', icon: Layers },
  { href: '#enterprise-faq', label: 'Enterprise', icon: Building2 },
  { href: '#resources', label: 'Resources', icon: BookOpen },
  { href: '#support', label: 'Support', icon: LifeBuoy },
  { href: '#legal', label: 'Legal', icon: Scale },
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

        <div className="mt-6 border-t border-white/10 pt-4">
          <div className="text-xs uppercase tracking-wide text-white/60 mb-3">Follow</div>
          <div className="flex items-center gap-3 text-white/70">
            <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram className="h-5 w-5" /></a>
            <a href="mailto:hello@example.com" aria-label="Mail" className="hover:text-white"><Mail className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </aside>
  );
}
