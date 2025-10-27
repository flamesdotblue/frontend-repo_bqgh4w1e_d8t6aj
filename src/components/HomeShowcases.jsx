import { Brain, Youtube, FileText, Globe, Building2, Shield, Calculator, Users } from 'lucide-react';

function ChatCard({ title, points, sources }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
      <div className="mb-3 flex items-center gap-2 text-white/90">
        <Brain className="h-4 w-4" />
        <span className="text-sm font-semibold">{title}</span>
      </div>
      <div className="space-y-3 text-sm text-white/80">
        {points.map((p, idx) => (
          <div key={idx} className="rounded-lg bg-black/30 p-3">
            <div className="mb-1 text-xs text-white/60">Assistant</div>
            <div>{p}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-white/70">
        {sources.includes('youtube') && (
          <span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-2 py-1"><Youtube className="h-3 w-3"/>YouTube</span>
        )}
        {sources.includes('papers') && (
          <span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-2 py-1"><FileText className="h-3 w-3"/>Research papers</span>
        )}
        {sources.includes('web') && (
          <span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-2 py-1"><Globe className="h-3 w-3"/>Web search</span>
        )}
        {sources.includes('company') && (
          <span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-2 py-1"><Building2 className="h-3 w-3"/>Target company</span>
        )}
        {sources.includes('exam') && (
          <span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-2 py-1"><Users className="h-3 w-3"/>Exam papers</span>
        )}
      </div>
    </div>
  );
}

function FAQItem({ q, a, icon: Icon }) {
  return (
    <details className="group rounded-xl border border-white/10 bg-white/5 p-4 open:bg-white/10">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-white">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="h-4 w-4 text-white/80" />}
          <span className="text-sm font-medium text-white/90">{q}</span>
        </div>
        <span className="text-white/50 transition group-open:rotate-180">▾</span>
      </summary>
      <p className="mt-2 text-sm leading-relaxed text-white/80">{a}</p>
    </details>
  );
}

export default function HomeShowcases() {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-40 bg-gradient-to-b from-white/10 to-transparent blur-2xl" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Professional Upskilling */}
        <div id="use-cases" className="py-16">
          <h2 className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
            PROFESSIONAL UPSKILLING
          </h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Skill and job‑role tailored learning paths generated in a conversational flow.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <ChatCard
              title="Data Analyst – Job‑role pathway"
              points={[
                'I analyzed your target role at ACME and drafted a 6‑week pathway with weekly projects.',
                'Week 1: SQL fundamentals with hands‑on queries. Week 2: Excel/Sheets analytics. Week 3: Python data wrangling...'
              ]}
              sources={["youtube", "papers", "web", "company"]}
            />
            <ChatCard
              title="Frontend Engineer – Skills map"
              points={[
                'Mapped your current skills to a React + TypeScript stack and suggested three micro‑projects.',
                'Curated 12 videos and 5 papers with summaries to match your timeline.'
              ]}
              sources={["youtube", "papers", "web", "company"]}
            />
          </div>
        </div>

        {/* Student Preparation */}
        <div className="py-16">
          <h2 className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
            STUDENT PREPARATION
          </h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Competitive prep courses built from videos, research, web, and past papers.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <ChatCard
              title="GATE – Adaptive study plan"
              points={[
                'Generated a 10‑week plan prioritized by previous year difficulty weights.',
                'Daily practice sets with explanations and linked concept refreshers.'
              ]}
              sources={["youtube", "papers", "web", "exam"]}
            />
            <ChatCard
              title="SAT – Targeted revision"
              points={[
                'Focused drills for reading comprehension and algebra based on your last mock.',
                'Auto‑assembled practice from trusted sources with step‑by‑step solutions.'
              ]}
              sources={["youtube", "web", "exam"]}
            />
          </div>
        </div>

        {/* Professor Assistance */}
        <div className="py-16">
          <h2 className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
            PROFESSOR ASSISTANCE
          </h2>
          <p className="mt-2 max-w-2xl text-white/70">
            University‑ready AI presentation and course assets, built via chat.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <ChatCard
              title="Lecture deck – 12 slides"
              points={[
                'Outlined a cohesive deck with objectives, key concepts, activities, and assessments.',
                'Export options: PPTX, PDF, and speaker notes summary.'
              ]}
              sources={["youtube", "papers", "web"]}
            />
            <ChatCard
              title="Syllabus augmentation"
              points={[
                'Aligned course outcomes with accreditation rubrics and added assessment matrix.',
                'Suggested open datasets and lab prompts with rubrics.'
              ]}
              sources={["web", "papers"]}
            />
          </div>
        </div>

        {/* Enterprise FAQs */}
        <div id="enterprise-faq" className="py-16">
          <h3 className="text-2xl font-semibold text-white md:text-3xl">Aame for Enterprise – FAQs</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <FAQItem q="Aame for enterprise" a="Centralized admin, SSO, org policy controls, and analytics across teams." icon={Building2} />
            <FAQItem q="Enterprise guide" a="Best‑practice templates for rollout, workspace structure, and access controls." icon={FileText} />
            <FAQItem q="Security" a="Data encryption in transit and at rest, role‑based access, audit logs." icon={Shield} />
            <FAQItem q="ROI calculator" a="Estimate productivity lift from content generation, course assembly, and assessment automation." icon={Calculator} />
            <FAQItem q="Client profile" a="Showcase how similar organizations deploy Aame for training and research." icon={Users} />
            <FAQItem q="Want a demo?" a="Book a guided walkthrough tailored to your needs and data landscape." icon={Building2} />
          </div>
        </div>

        {/* Anchors for footer navs */}
        <div id="resources" className="py-8" />
        <div id="support" className="py-8" />
        <div id="legal" className="py-8" />
      </div>
    </section>
  );
}
