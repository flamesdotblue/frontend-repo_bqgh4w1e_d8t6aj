import { Instagram, Mail, Twitter, Linkedin, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/60 py-14 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-5">
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Use cases</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#use-cases" className="hover:text-white">Study prep</a></li>
              <li><a href="#use-cases" className="hover:text-white">Upskilling</a></li>
              <li><a href="#enterprise-faq" className="hover:text-white">Recruitment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Enterprise</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#enterprise-faq" className="hover:text-white">Aame for enterprise – FAQ</a></li>
              <li><a href="#enterprise-faq" className="hover:text-white">Enterprise guide – FAQ</a></li>
              <li><a href="#enterprise-faq" className="hover:text-white">Security – FAQ</a></li>
              <li><a href="#enterprise-faq" className="hover:text-white">ROI calculator – FAQ</a></li>
              <li><a href="#enterprise-faq" className="hover:text-white">Client profile</a></li>
              <li><a href="#enterprise-faq" className="hover:text-white">Want Demo? – FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Resources</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#resources" className="hover:text-white">AIM Aame</a></li>
              <li><a href="#resources" className="hover:text-white">Pricing</a></li>
              <li><a href="#resources" className="hover:text-white">Career</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Support</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#support" className="hover:text-white">Help centre – Articles & FAQ</a></li>
              <li><a href="#support" className="hover:text-white">Contact us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#legal" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#legal" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#legal" className="hover:text-white">Data Processing Agreement</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 grid items-center gap-6 sm:grid-cols-2">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>Certifications: ISO 27001 • SOC 2 Type II • GDPR-ready</span>
          </div>
          <div className="flex items-center justify-start gap-4 sm:justify-end">
            <a href="#" aria-label="Instagram" className="text-white/70 transition hover:text-white"><Instagram className="h-5 w-5" /></a>
            <a href="mailto:hello@example.com" aria-label="Mail" className="text-white/70 transition hover:text-white"><Mail className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="text-white/70 transition hover:text-white"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="LinkedIn" className="text-white/70 transition hover:text-white"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>

        <div className="mt-6 text-xs text-white/50">© {new Date().getFullYear()} Aame. All rights reserved.</div>
      </div>
    </footer>
  );
}
