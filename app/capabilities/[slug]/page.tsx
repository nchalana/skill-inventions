import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const capabilityPages = {
  'ai-talent-solutions': {
    eyebrow: 'Capability / AI Talent Solutions',
    title: 'AI, data, and cloud talent delivered with hiring speed and delivery discipline.',
    description:
      'Skill Inventions helps hiring managers move from open requirement to curated AI, data, cloud, and automation professionals without publishing hundreds of profiles.',
    highlights: ['48-hour shortlist motion', 'US, Canada, and India resource network', 'Role-ready delivery professionals'],
    services: [
      ['AI and ML engineering', 'AI engineers, ML engineers, LLM engineers, MLOps engineers, and generative AI builders.'],
      ['Data and analytics', 'Data engineers, analysts, BI developers, data scientists, and reporting specialists.'],
      ['Cloud and delivery', 'Cloud engineers, DevOps, SRE, platform engineers, QA/SDET, and full-stack teams.'],
      ['Hiring support', 'Staff augmentation, direct hire, RPO support, consulting pods, and public-sector partner needs.'],
    ],
    outcomes: ['Curated shortlist instead of resume volume', 'Better alignment by stack, region, rate, and start date', 'Faster hiring conversations with role-ready context'],
  },
  'technology-ecosystem': {
    eyebrow: 'Capability / Technology Ecosystem',
    title: 'A practical technology bench across cloud, apps, data, ERP, security, QA, and design.',
    description:
      'The Skill Inventions ecosystem covers the tools organizations already run, the platforms they are modernizing, and the AI workflows they are adding next.',
    highlights: ['Enterprise platforms', 'Modern engineering stacks', 'AI-enabled delivery tooling'],
    services: [
      ['Application engineering', 'Java, .NET, Python, Android, iOS, React, APIs, integrations, and full-stack delivery.'],
      ['Enterprise systems', 'SAP, Salesforce, PeopleSoft, JD Edwards, BAAN, SQL platforms, and modernization support.'],
      ['Delivery tooling', 'GitHub, Bitbucket, Jira, Azure DevOps, Selenium, Playwright, Cucumber, Copilot, and Cursor.'],
      ['Design and experience', 'UI/UX, product design, Figma, Adobe, Miro, Webflow, and conversion-focused web delivery.'],
    ],
    outcomes: ['One delivery partner across legacy and modern stacks', 'Talent matched to real operating environments', 'Cleaner handoffs between engineering, data, security, and product teams'],
  },
  'cloud-platform-engineering': {
    eyebrow: 'Capability / Cloud & Platform Engineering',
    title: 'Cloud, infrastructure, and platform reliability for systems that cannot drift.',
    description:
      'Skill Inventions supports modernization, automation, monitoring, infrastructure reliability, and day-to-day platform operations across cloud and hybrid environments.',
    highlights: ['AWS, Azure, and Google Cloud', 'Linux, Windows, networking, and firewalls', 'Automation-first operations'],
    services: [
      ['Infrastructure reliability', 'RHEL, Windows administration, DNS, IP networking, storage, hypervisors, containers, and incident RCA.'],
      ['Cloud modernization', 'Migration planning, workload readiness, cloud cost review, backup, recovery, and reliability guardrails.'],
      ['Automation and DevOps', 'Ansible, Bash, PowerShell, CI/CD, platform runbooks, monitoring, and release consistency.'],
      ['Security operations', 'Firewalls, IPsec, hardening, access controls, compliance readiness, and documentation standards.'],
    ],
    outcomes: ['More stable operating environments', 'Reduced manual administration load', 'Better troubleshooting across systems, services, paths, and logs'],
  },
  'data-ai-delivery': {
    eyebrow: 'Capability / Data & AI Delivery',
    title: 'Turn scattered data and AI ideas into governed delivery workflows.',
    description:
      'Skill Inventions brings data engineering, analytics, automation, and AI integration together so teams can move from reporting gaps to trusted workflows.',
    highlights: ['Data pipelines and BI', 'LLM and RAG integration', 'Governed automation'],
    services: [
      ['Data engineering', 'SQL, PostgreSQL, Supabase, warehouses, pipelines, data cleanup, and platform integrations.'],
      ['Business intelligence', 'Power BI, Tableau, dashboards, reporting models, analyst support, and executive-ready metrics.'],
      ['AI integration', 'LLM workflows, retrieval architecture, prompt operations, vector databases, and validation checkpoints.'],
      ['Specialized domains', 'Clinical, medical, financial, operational, and compliance-sensitive data analysis.'],
    ],
    outcomes: ['AI-ready knowledge flows', 'Faster reporting with fewer manual fixes', 'Automation with human review and audit context'],
  },
  'security-trust': {
    eyebrow: 'Capability / Security & Trust Infrastructure',
    title: 'Security, identity, verification, and human review before risk reaches production.',
    description:
      'Skill Inventions helps teams strengthen cybersecurity posture while WackoWave adds document, resume, credential, and decision-support verification.',
    highlights: ['Endpoint and cloud security', 'IAM and compliance support', 'WackoWave verification layer'],
    services: [
      ['Cybersecurity engineering', 'Endpoint security, EDR, hardening, vulnerability response, SOC support, and threat review.'],
      ['Identity and access', 'IDM/IAM, Microsoft 365, policy controls, audit readiness, and secure operating standards.'],
      ['WackoWave Platform Intelligence', 'Resume, credential, timeline, AI-language, visual forensics, and semantic coherence screening.'],
      ['Document Verification System', 'KYC, claims, tenant, vendor, and provider credential checks against the SOP your team already uses.'],
    ],
    outcomes: ['Earlier risk signals', 'Human-reviewed decision support', 'Cleaner compliance and verification workflows'],
  },
} as const;

type CapabilitySlug = keyof typeof capabilityPages;

export function generateStaticParams() {
  return Object.keys(capabilityPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = capabilityPages[slug as CapabilitySlug];

  if (!page) {
    return {};
  }

  return {
    title: `${page.eyebrow.replace('Capability / ', '')} | Skill Inventions`,
    description: page.description,
  };
}

export default async function CapabilityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = capabilityPages[slug as CapabilitySlug];

  if (!page) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f7f8f4] text-foreground">
      <header className="border-b border-border bg-white/92 backdrop-blur">
        <nav className="mx-auto flex max-w-[92rem] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a href="/" className="grid h-11 w-52 place-items-center overflow-hidden">
            <img src="/skill-inventions-logo.svg" alt="Skill Inventions logo" className="h-full w-full object-contain" />
          </a>
          <div className="flex items-center gap-2">
            <Button nativeButton={false} render={<a href="/" />} variant="ghost" className="rounded-full">
              Main Site
            </Button>
            <Button
              nativeButton={false}
              render={<a href="mailto:hello@skillinventions.com?subject=Capability%20discussion" />}
              className="rounded-full bg-[#2037d8] text-white hover:bg-[#172db8]"
            >
              Discuss Requirement
            </Button>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-[#08111f] text-white">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#00a7d8,#c8ff1a,#2037d8,#e0ab24)]" />
        <div className="mx-auto grid max-w-[92rem] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <Badge className="mb-4 rounded-lg bg-[#c8ff1a] text-zinc-950">{page.eyebrow}</Badge>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">{page.title}</h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/70">{page.description}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button
                nativeButton={false}
                render={<a href="mailto:hello@skillinventions.com?subject=Skill%20Inventions%20capability%20request" />}
                size="lg"
                className="rounded-lg bg-[#c8ff1a] text-zinc-950 shadow-lg shadow-lime-400/15 hover:bg-[#d6ff45]"
              >
                Start a Capability Request
                <ArrowRight data-icon="inline-end" className="size-4" />
              </Button>
              <Button
                nativeButton={false}
                render={<a href="/public-sector" />}
                size="lg"
                variant="outline"
                className="rounded-lg border-white/24 bg-white/8 text-white hover:bg-white/14"
              >
                Public Sector / M/WBE
              </Button>
            </div>
          </div>

          <div className="grid content-start gap-3 rounded-2xl border border-white/12 bg-white/[0.06] p-5 shadow-2xl shadow-black/25">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c8ff1a]">Built around outcomes</p>
            {page.highlights.map((highlight) => (
              <div key={highlight} className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.06] p-3">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#c8ff1a]" />
                <p className="text-sm font-semibold text-white">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-[92rem] px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Badge variant="outline" className="mb-2 rounded-lg">What We Cover</Badge>
              <h2 className="text-2xl font-semibold">Focused services, matched to real delivery needs.</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
              Each capability page keeps the public website simple while giving hiring managers,
              technology leaders, and partners a clear path to request the right support.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {page.services.map(([title, copy]) => (
              <article key={title} className="rounded-lg border border-border bg-[#f7f8f4] p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-[#2037d8]">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef8fc]">
        <div className="mx-auto grid max-w-[92rem] gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--si-violet)]">Expected value</p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight">Less browsing. More qualified conversations.</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {page.outcomes.map((outcome) => (
              <div key={outcome} className="rounded-lg border border-[#2037d8]/15 bg-white p-4 shadow-sm">
                <CheckCircle2 className="mb-3 size-5 text-[#2037d8]" />
                <p className="text-sm font-semibold leading-6">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
