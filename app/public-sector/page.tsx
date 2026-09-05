import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Public Sector Technology Staffing | Skill Inventions',
  description:
    'Skill Inventions supports public-sector technology staffing, AI/data delivery, and M/WBE partnership opportunities for agencies, authorities, universities, and prime vendors.',
};

const publicSectorServices = [
  ['AI & Data Talent', 'AI engineers, data engineers, analysts, data scientists, LLM engineers, MLOps, BI developers, and automation specialists.'],
  ['IT Staff Augmentation', 'Cloud, DevOps, infrastructure, cybersecurity, QA/SDET, ERP, full-stack, mobile, and architecture professionals.'],
  ['Consulting Pods', 'Small delivery teams for analytics modernization, cloud migration, security readiness, workflow automation, and platform delivery.'],
  ['Prime-Vendor Support', 'M/WBE-certified subcontracting support for agencies, integrators, MSPs, and public-sector technology vendors.'],
];

const readinessSteps = [
  ['Map the opportunity', 'Identify the agency, contract vehicle, role category, compliance needs, timeline, and decision stakeholders.'],
  ['Assemble the response', 'Build role matrices, rate cards, capability language, resumes, certifications, and delivery assumptions.'],
  ['Deliver with controls', 'Launch resources with documentation standards, reporting cadence, issue escalation, and human accountability.'],
];

export default function PublicSectorPage() {
  return (
    <main className="min-h-screen bg-[#f7f8f4] text-foreground">
      <header className="border-b border-border bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-[92rem] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a href="/" className="grid h-11 w-52 place-items-center overflow-hidden">
            <img
              src="/skill-inventions-logo.svg"
              alt="Skill Inventions logo"
              className="h-full w-full object-contain"
            />
          </a>
          <div className="flex items-center gap-2">
            <Button nativeButton={false} render={<a href="/" />} variant="ghost" className="rounded-full">
              Main Site
            </Button>
            <Button
              nativeButton={false}
              render={<a href="mailto:hello@skillinventions.com?subject=Public%20Sector%20M%2FWBE%20Opportunity" />}
              className="rounded-full bg-[#2037d8] text-white hover:bg-[#172db8]"
            >
              Discuss Opportunity
            </Button>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-[#08111f] text-white">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#00a7d8,#c8ff1a,#2037d8,#e0ab24)]" />
        <div className="mx-auto grid max-w-[92rem] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <Badge className="mb-4 rounded-lg bg-[#c8ff1a] text-zinc-950">
              Public Sector / M/WBE Technology Partner
            </Badge>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              AI, data, and IT staffing support for public-sector delivery.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
              Skill Inventions helps agencies, authorities, public institutions,
              prime vendors, and MSPs access specialized technology professionals
              through a certified M/WBE delivery partner.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button
                nativeButton={false}
                render={<a href="mailto:hello@skillinventions.com?subject=Public%20Sector%20Staffing%20Request" />}
                size="lg"
                className="rounded-lg bg-[#c8ff1a] text-zinc-950 shadow-lg shadow-lime-400/15 hover:bg-[#d6ff45]"
              >
                Request Public-Sector Talent
                <ArrowRight data-icon="inline-end" className="size-4" />
              </Button>
              <Button
                nativeButton={false}
                render={<a href="mailto:hello@skillinventions.com?subject=Prime%20Vendor%20M%2FWBE%20Partnership" />}
                size="lg"
                variant="outline"
                className="rounded-lg border-white/24 bg-white/8 text-white hover:bg-white/14"
              >
                Partner With an M/WBE Supplier
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-white/12 bg-white/[0.06] p-5 shadow-2xl shadow-black/25">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c8ff1a]">
              48-hour shortlist proposition
            </p>
            <h2 className="mt-3 text-2xl font-semibold">From requirement to qualified slate.</h2>
            <p className="mt-3 text-sm leading-6 text-white/66">
              Share the role family, stack, agency context, location, duration,
              and start date. We respond with aligned talent options and a clear
              delivery path instead of a generic resume dump.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {['AI/Data', 'Cloud/Infra', 'Cybersecurity'].map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/[0.06] p-3">
                  <CheckCircle2 className="mb-2 size-4 text-[#c8ff1a]" />
                  <p className="text-sm font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-[92rem] px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Badge variant="outline" className="mb-2 rounded-lg">
                Where Skill Inventions fits
              </Badge>
              <h2 className="text-2xl font-semibold">Focused public-sector technology support.</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
              The goal is simple: make it easier for public buyers and prime
              vendors to access specialized technology talent while improving
              M/WBE participation on qualified opportunities.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {publicSectorServices.map(([title, copy]) => (
              <article key={title} className="rounded-lg border border-border bg-[#f7f8f4] p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-[#2037d8]">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[92rem] px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--si-violet)]">
                Operating approach
              </p>
              <h2 className="mt-2 text-2xl font-semibold">A practical path from opportunity to delivery.</h2>
            </div>
            <div className="grid gap-3">
              {readinessSteps.map(([title, copy], index) => (
                <article key={title} className="flex gap-3 rounded-lg border border-border bg-[#f7f8f4] p-4">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-[#2037d8] text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold">{title}</h3>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
