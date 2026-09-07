import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';

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
    title: 'Enterprise infrastructure, integration, and workforce enablement moving in one process.',
    description:
      'Stakeholders do not need another catalog of tools. They need a clear operating path: assess the current stack, design the ecosystem, deploy with accountable teams, and measure adoption, reliability, and business impact.',
    highlights: ['Process-led modernization', 'Measured delivery governance', 'Technology and talent synchronized'],
    processFlow: [
      {
        phase: '01',
        title: 'Gap Assessment',
        copy: 'Map current platforms, integrations, team capability, risk points, release friction, and business priorities.',
        kpi: 'Baseline readiness score',
        outcome: 'A shared view of what must be stabilized, modernized, automated, or staffed first.',
      },
      {
        phase: '02',
        title: 'Ecosystem Design',
        copy: 'Define the target architecture, data flows, security controls, delivery roles, and enablement plan.',
        kpi: 'Roadmap acceptance',
        outcome: 'A practical blueprint that connects cloud, applications, data, security, QA, and talent needs.',
      },
      {
        phase: '03',
        title: 'Synchronized Deployment',
        copy: 'Launch platform work and role-ready professionals together with runbooks, owners, checks, and reporting rhythm.',
        kpi: 'Cycle time to release',
        outcome: 'Cleaner delivery execution without separating technology change from the people operating it.',
      },
      {
        phase: '04',
        title: 'Continuous Scale',
        copy: 'Track adoption, reliability, automation coverage, skill readiness, and improvement actions after launch.',
        kpi: 'Reliability and adoption lift',
        outcome: 'A system that keeps improving as business demand, tooling, and team structure evolve.',
      },
    ],
    kpis: [
      ['Reliability', 'Uptime, incident frequency, recovery time, release defects, monitoring coverage'],
      ['Adoption', 'Active users, workflow usage, training completion, role readiness, support demand'],
      ['Efficiency', 'Cloud spend, automation rate, manual handoffs removed, delivery cycle time'],
      ['Risk', 'Security gaps, access issues, audit evidence, data-quality exceptions, compliance readiness'],
    ],
    mastery: {
      title: 'How Skill Inventions mastered this operating art',
      copy:
        'Since 2013, Skill Inventions has worked through mobile, cloud, SaaS, data, cybersecurity, and AI shifts. The lesson is consistent: durable technology change happens when architecture, people, documentation, release discipline, and measurement move together.',
      principles: [
        ['Stack reality first', 'Start with the platforms, integrations, constraints, and people already inside the organization.'],
        ['Process before tooling', 'Define ownership, checkpoints, documentation, and success measures before selecting or adding tools.'],
        ['Talent tied to outcomes', 'Map engineers, analysts, architects, QA, security, and delivery roles to the work that must actually ship.'],
        ['Evidence over activity', 'Track reliability, adoption, efficiency, and risk so stakeholders see progress beyond status meetings.'],
      ],
    },
    industries: [
      'Healthcare and life sciences',
      'Financial services',
      'Public sector and M/WBE programs',
      'Retail and e-commerce',
      'Logistics and supply chain',
      'Telecommunications',
      'Construction and field operations',
      'Professional services',
    ],
    evidenceTracks: [
      ['Case studies', 'Modernization journeys, integration recoveries, AI/data enablement, and delivery-bench outcomes can be packaged as client-approved proof points.'],
      ['Whitepapers', 'Thought leadership on Technology Ecosystem operating models, AI talent delivery, cloud readiness, data trust, and verification workflows.'],
      ['Playbooks', 'Reusable stakeholder guides for gap assessment, platform modernization, synchronized deployment, and continuous scale.'],
    ],
    services: [
      ['Application engineering', 'Java, .NET, Python, Android, iOS, React, APIs, integrations, and full-stack delivery.'],
      ['Enterprise systems', 'SAP, Salesforce, PeopleSoft, JD Edwards, BAAN, SQL platforms, and modernization support.'],
      ['Delivery tooling', 'GitHub, Bitbucket, Jira, Azure DevOps, Selenium, Playwright, Cucumber, Copilot, and Cursor.'],
      ['Design and experience', 'UI/UX, product design, Figma, Adobe, Miro, Webflow, and conversion-focused web delivery.'],
    ],
    outcomes: ['A visible process stakeholders can sponsor and measure', 'Technology changes supported by the right operating roles', 'Cleaner handoffs between engineering, data, security, and product teams'],
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
      'Skill Inventions helps teams strengthen cybersecurity posture while Platform Intelligence adds document, resume, credential, and decision-support verification.',
    highlights: ['Endpoint and cloud security', 'IAM and compliance support', 'Platform Intelligence verification layer'],
    services: [
      ['Cybersecurity engineering', 'Endpoint security, EDR, hardening, vulnerability response, SOC support, and threat review.'],
      ['Identity and access', 'IDM/IAM, Microsoft 365, policy controls, audit readiness, and secure operating standards.'],
      ['Platform Intelligence', 'Resume, credential, timeline, AI-language, visual forensics, and semantic coherence screening.'],
      ['Document Verification System', 'KYC, claims, tenant, vendor, and provider credential checks against the SOP your team already uses.'],
    ],
    outcomes: ['Earlier risk signals', 'Human-reviewed decision support', 'Cleaner compliance and verification workflows'],
  },
} as const;

type CapabilitySlug = keyof typeof capabilityPages;

const siteNavGroups = [
  {
    title: 'Capabilities',
    items: [
      ['Technology Ecosystem', 'Process-led platform, integration, KPI, and workforce enablement framework', '/capabilities/technology-ecosystem'],
      ['AI Talent Solutions', '48-hour shortlists for AI, data, cloud, automation, and delivery roles', '/capabilities/ai-talent-solutions'],
      ['Cloud & Platform Engineering', 'Infrastructure modernization, automation, reliability, and cloud operations', '/capabilities/cloud-platform-engineering'],
      ['Data & AI Delivery', 'Data pipelines, BI, analytics, AI integration, and governed automation', '/capabilities/data-ai-delivery'],
      ['Security & Trust', 'Cybersecurity, identity, compliance, verification, and human-review workflows', '/capabilities/security-trust'],
    ],
  },
  {
    title: 'Platform Intelligence',
    items: [
      ['Resume Verification', 'Resume, credential, and document forensics for decision support', '/platform-intelligence'],
      ['Document Verification', 'Verify documents against your SOP', '/#dvs'],
      ['Developers', 'API and integration access', 'mailto:hello@skillinventions.com?subject=Platform%20Intelligence%20Developer%20Access'],
      ['Demo Login', 'Request demo access', 'mailto:hello@skillinventions.com?subject=Platform%20Intelligence%20Demo%20Login'],
      ['Support', 'Platform support contact', 'mailto:hello@skillinventions.com?subject=Platform%20Intelligence%20Support'],
    ],
  },
  {
    title: 'Talent',
    items: [
      ['Employers', 'Request a curated shortlist', 'mailto:hello@skillinventions.com?subject=Talent%20shortlist%20request'],
      ['Jobseekers', 'Explore jobsearch automation', '/#jobsearch'],
      ['Vendors', 'Partnership and vendor conversations', 'mailto:hello@skillinventions.com?subject=Vendor%20partnership'],
    ],
  },
  {
    title: 'Company',
    items: [
      ['Public Sector / M/WBE', 'Technology staffing and consulting for agencies and primes', '/public-sector'],
      ['Contact', 'Reach Skill Inventions offices', '/contact'],
    ],
  },
];

const footerColumns = [
  {
    title: 'Capabilities',
    links: [
      ['Technology Ecosystem', '/capabilities/technology-ecosystem'],
      ['AI Talent Solutions', '/capabilities/ai-talent-solutions'],
      ['Cloud & Platform Engineering', '/capabilities/cloud-platform-engineering'],
      ['Data & AI Delivery', '/capabilities/data-ai-delivery'],
      ['Security & Trust', '/capabilities/security-trust'],
    ],
  },
  {
    title: 'Platform Intelligence',
    links: [
      ['Resume Verification', '/platform-intelligence'],
      ['Document Verification', '/#dvs'],
      ['Developers', 'mailto:hello@skillinventions.com?subject=Platform%20Intelligence%20Developer%20Access'],
      ['Demo Login', 'mailto:hello@skillinventions.com?subject=Platform%20Intelligence%20Demo%20Login'],
      ['Support', 'mailto:hello@skillinventions.com?subject=Platform%20Intelligence%20Support'],
    ],
  },
  {
    title: 'Talent Marketplace',
    links: [
      ['Employers', 'mailto:hello@skillinventions.com?subject=Talent%20shortlist%20request'],
      ['Jobseekers', '/#jobsearch'],
      ['Job Search', '/#jobsearch'],
      ['Vendors', 'mailto:hello@skillinventions.com?subject=Vendor%20partnership'],
      ['Public Sector', '/public-sector'],
    ],
  },
  {
    title: 'Trust & Company',
    links: [
      ['MWBE Certified', '/#contact'],
      ['E-Verify Employer', '/#contact'],
      ['Public Sector / M/WBE', '/public-sector'],
      ['Office Hubs', '/contact'],
      ['Contact', '/contact'],
    ],
  },
];

const officeLocations = [
  ['United States', 'Skill Inventions Inc.', '61-36, 170th Street, Suite M-2, Fresh Meadows, NY 11365'],
  ['India', 'Skill Inventions Pvt. Ltd.', 'Venkateshwara Nagar Colony, Sainathpuram, Dr. AS Rao Nagar, Hyderabad - 500062'],
  ['Canada', 'Skill Inventions Canada', '1500 W Georgia St Suite # 1300, Vancouver, British Columbia V6G 2Z6, CA'],
];

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
      <header className="sticky top-0 z-50 border-b border-border/70 bg-white/88 shadow-sm backdrop-blur-xl">
        <nav className="mx-auto flex max-w-[92rem] items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
          <a href="/" className="grid h-11 w-52 place-items-center overflow-hidden">
            <img src="/skill-inventions-logo.svg" alt="Skill Inventions logo" className="h-full w-full object-contain" />
          </a>
          <div className="hidden items-center gap-1 rounded-full border border-border/70 bg-white/76 p-1 text-sm shadow-sm lg:flex">
            {siteNavGroups.map((group) => (
              <div key={group.title} className="group relative">
                <button className="inline-flex h-9 items-center gap-1 rounded-full px-3 font-semibold text-muted-foreground transition hover:bg-[#2037d8] hover:text-white">
                  {group.title}
                  <ChevronDown className="size-3.5 transition group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-1/2 top-full z-50 w-[360px] -translate-x-1/2 pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="rounded-xl border border-border bg-white p-2 shadow-2xl shadow-black/12">
                    {group.items.map(([title, copy, href]) => (
                      <a
                        key={title}
                        href={href}
                        className="block rounded-lg p-3 transition hover:bg-[#eef8fc]"
                      >
                        <span className="block text-sm font-semibold text-foreground">{title}</span>
                        <span className="mt-1 block text-xs leading-5 text-muted-foreground">{copy}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button nativeButton={false} render={<a href="/" />} variant="ghost" className="hidden rounded-full sm:inline-flex">
              Home
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

      {'processFlow' in page && (
        <section className="overflow-hidden border-b border-border bg-[#f7f8f4]">
          <div className="mx-auto max-w-[92rem] px-4 py-10 sm:px-6 lg:px-8">
            <div className="mb-6 grid gap-4 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <Badge variant="outline" className="mb-2 rounded-lg border-[#2037d8]/25 bg-white">
                  Practice Operating Model
                </Badge>
                <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
                  Process flow, KPI, and outcome in one view.
                </h2>
              </div>
              <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
                Technology Ecosystem engagements are structured so stakeholders can track
                where the work is, what is being measured, and which business result each
                phase is meant to produce.
              </p>
            </div>

            <div className="relative rounded-2xl border border-[#2037d8]/15 bg-[#08111f] p-4 text-white shadow-2xl shadow-[#2037d8]/15 sm:p-6">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
              <div className="relative grid gap-5 xl:grid-cols-[1fr_240px_1fr] xl:items-center">
                <div className="grid gap-4">
                  {page.processFlow.slice(0, 2).map((step) => (
                    <ProcessNode key={step.phase} step={step} />
                  ))}
                </div>

                <div className="relative mx-auto grid size-56 place-items-center rounded-full border border-[#c8ff1a]/35 bg-[#2037d8]/35 shadow-[0_0_80px_rgba(32,55,216,0.55)]">
                  <div className="absolute size-44 rounded-full border border-dashed border-white/24" />
                  <div className="absolute size-28 rounded-full border border-[#c8ff1a]/45 bg-[#c8ff1a]/10" />
                  <div className="relative max-w-32 text-center">
                    <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#c8ff1a]">
                      Skill Inventions
                    </p>
                    <p className="mt-2 text-lg font-semibold leading-5">Technology Ecosystem</p>
                    <p className="mt-2 text-[11px] leading-4 text-white/58">Process + people + platform</p>
                  </div>
                </div>

                <div className="grid gap-4">
                  {page.processFlow.slice(2).map((step) => (
                    <ProcessNode key={step.phase} step={step} />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {page.kpis.map(([title, copy]) => (
                <div key={title} className="rounded-lg border border-border bg-white p-4 shadow-sm">
                  <p className="text-sm font-semibold text-[#2037d8]">{title}</p>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {!('processFlow' in page) && (
        <section className="border-b border-border bg-[#f7f8f4]">
          <div className="mx-auto max-w-[92rem] px-4 py-10 sm:px-6 lg:px-8">
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
      )}

      {'mastery' in page && (
        <section className="border-b border-border bg-white">
          <div className="mx-auto grid max-w-[92rem] gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div className="rounded-xl bg-[#08111f] p-5 text-white shadow-xl shadow-black/15">
              <Badge className="mb-4 rounded-lg bg-[#c8ff1a] text-zinc-950">
                Practice Framework
              </Badge>
              <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
                {page.mastery.title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-white/68">{page.mastery.copy}</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {page.mastery.principles.map(([title, copy]) => (
                <article key={title} className="rounded-lg border border-border bg-[#f7f8f4] p-4 shadow-sm">
                  <CheckCircle2 className="mb-3 size-5 text-[#2037d8]" />
                  <h3 className="text-sm font-semibold">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {'industries' in page && (
        <section className="border-b border-border bg-[#eef8fc]">
          <div className="mx-auto max-w-[92rem] px-4 py-10 sm:px-6 lg:px-8">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Badge variant="outline" className="mb-2 rounded-lg border-[#2037d8]/25 bg-white">
                  Industry Coverage
                </Badge>
                <h2 className="text-2xl font-semibold">Built for technology environments with real operating pressure.</h2>
              </div>
              <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                The same framework adapts across regulated, customer-facing, field, and enterprise environments where systems, people, and data have to work together.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {page.industries.map((industry) => (
                <div key={industry} className="rounded-lg border border-[#2037d8]/14 bg-white p-4 text-sm font-semibold shadow-sm">
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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

      {'evidenceTracks' in page && (
        <section className="border-b border-border bg-[#f7f8f4]">
          <div className="mx-auto grid max-w-[92rem] gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2037d8]">Evidence assets</p>
              <h2 className="mt-2 text-2xl font-semibold leading-tight">Case studies and whitepapers should prove the framework, not decorate the page.</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                As client-approved material becomes available, this section can hold downloadable proof around process, KPI movement, and delivery outcomes.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {page.evidenceTracks.map(([title, copy]) => (
                <article key={title} className="rounded-lg border border-border bg-white p-4 shadow-sm">
                  <h3 className="text-sm font-semibold text-[#2037d8]">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {'processFlow' in page && (
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
      )}

      <footer id="contact" className="border-t border-[#2037d8]/20 bg-[#08111f] text-white">
        <div className="mx-auto max-w-[92rem] px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 border-b border-white/10 pb-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <span className="grid h-11 w-48 place-items-center overflow-hidden">
                <img src="/skill-inventions-logo-footer.svg" alt="Skill Inventions logo" className="h-full w-full object-contain" />
              </span>
              <div>
                <p className="text-sm font-semibold">We Deliver IT</p>
                <p className="mt-1 max-w-xl text-xs leading-5 text-white/58">
                  Secure technology delivery, trusted AI, and cross-border talent across the US, Canada, and India.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-200">
                <span className="size-1.5 rounded-full bg-emerald-300" />
                All Systems Operational
              </span>
              <span className="grid h-12 w-16 place-items-center" title="New York State MWBE Certified">
                <img src="/mwbe-certified-transparent.png" alt="New York State MWBE Certified logo" className="max-h-12 max-w-full object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.3)]" />
              </span>
              <span className="grid h-14 w-44 place-items-center" title="E-Verify participating employer">
                <img src="/e-verify-transparent.png" alt="E-Verify participating employer logo" className="max-h-12 max-w-full object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.3)]" />
              </span>
            </div>
          </div>

          <div className="grid gap-7 py-7 sm:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#c8ff1a]">{column.title}</h3>
                <ul className="mt-3 space-y-2">
                  {column.links.map(([label, href]) => (
                    <li key={label}>
                      <a href={href} className="text-sm text-white/62 transition hover:text-white">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid gap-3 border-t border-white/10 py-5 lg:grid-cols-3">
            {officeLocations.map(([region, office, address]) => (
              <div key={region} className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#c8ff1a]">{region}</p>
                <p className="mt-1 text-sm font-semibold text-white">{office}</p>
                <p className="mt-1 text-xs leading-5 text-white/58">{address}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-t border-white/10 pt-5 text-xs text-white/50 lg:flex-row lg:items-center lg:justify-between">
            <p>© 2026 Skill Inventions Inc. All rights reserved.</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {['Privacy Policy', 'Terms of Service', 'Regional Data Disclosure', 'Cookie Settings'].map((link) => (
                <a key={link} href="/" className="transition hover:text-white">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ProcessNode({
  step,
}: {
  step: {
    phase: string;
    title: string;
    copy: string;
    kpi: string;
    outcome: string;
  };
}) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-white/12 bg-white/[0.075] p-4 shadow-xl shadow-black/15 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#c8ff1a]/50 hover:bg-white/[0.11]">
      <div className="absolute -right-8 -top-8 size-24 rounded-full bg-[#c8ff1a]/10 blur-2xl transition group-hover:bg-[#c8ff1a]/20" />
      <div className="relative flex items-start gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-[#c8ff1a] font-mono text-sm font-bold text-zinc-950">
          {step.phase}
        </span>
        <div>
          <h3 className="text-base font-semibold">{step.title}</h3>
          <p className="mt-1 text-xs leading-5 text-white/62">{step.copy}</p>
        </div>
      </div>
      <div className="relative mt-4 grid gap-2 sm:grid-cols-2">
        <div className="rounded-lg border border-[#c8ff1a]/30 bg-[#c8ff1a]/10 p-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#c8ff1a]">KPI</p>
          <p className="mt-1 text-xs font-semibold leading-5">{step.kpi}</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-black/18 p-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/46">Outcome</p>
          <p className="mt-1 text-xs font-semibold leading-5 text-white/78">{step.outcome}</p>
        </div>
      </div>
    </article>
  );
}
