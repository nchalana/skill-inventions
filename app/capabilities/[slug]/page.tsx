import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Network,
  Rocket,
  SearchCheck,
  TrendingUp,
} from 'lucide-react';

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
    heroImage: '/technology-ecosystem-bg.png',
    heroVisuals: [
      '/technology-ecosystem-workshop.png',
      '/technology-ecosystem-people.png',
      '/technology-ecosystem-kpi.png',
    ],
    processFlow: [
      {
        phase: '01',
        title: 'Gap Assessment',
        copy: 'Map platforms, people, risks, friction, and priorities.',
        kpi: 'Baseline readiness score',
        outcome: 'A shared view of what must be stabilized, modernized, automated, or staffed first.',
      },
      {
        phase: '02',
        title: 'Ecosystem Design',
        copy: 'Define architecture, data flows, controls, roles, and roadmap.',
        kpi: 'Roadmap acceptance',
        outcome: 'A practical blueprint that connects cloud, applications, data, security, QA, and talent needs.',
      },
      {
        phase: '03',
        title: 'Synchronized Deployment',
        copy: 'Launch platform work, role-ready teams, runbooks, and owners.',
        kpi: 'Cycle time to release',
        outcome: 'Cleaner delivery execution without separating technology change from the people operating it.',
      },
      {
        phase: '04',
        title: 'Continuous Scale',
        copy: 'Track adoption, reliability, automation, readiness, and improvements.',
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

const processAccentClasses = [
  'bg-[#2037d8]',
  'bg-[#00a7d8]',
  'bg-[#22a66b]',
  'bg-[#e0ab24]',
];

const processIcons = [SearchCheck, Network, Rocket, TrendingUp];

const processSummaryIcons = [Network, TrendingUp, CheckCircle2];

const kpiScorecard = [
  ['Reliability', '99.8%', 'Target uptime', 'Incidents, recovery, release defects', 'On track'],
  ['Adoption', '3x', 'Faster enablement', 'Usage, readiness, support demand', 'Improving'],
  ['Efficiency', '↓', 'Manual effort', 'Cloud spend, automation, cycle time', 'Optimize'],
  ['Risk', 'Live', 'Control review', 'Security gaps, access, audit evidence', 'Monitored'],
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

      <section className="relative overflow-hidden bg-[#eef8fc] text-foreground">
        {'heroImage' in page && (
          <img
            src={page.heroImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-y-0 right-0 h-full w-full object-cover object-bottom opacity-80 lg:w-[62%]"
          />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#f8fbff_0%,rgba(248,251,255,0.96)_42%,rgba(248,251,255,0.52)_74%,rgba(248,251,255,0.1)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(238,248,252,0.2),rgba(238,248,252,0.86))]" />
        <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#00a7d8,#c8ff1a,#2037d8,#e0ab24)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(32,55,216,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(32,55,216,0.045)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="relative mx-auto grid max-w-[92rem] gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <Badge className="mb-4 rounded-lg bg-[#c8ff1a] text-zinc-950">{page.eyebrow}</Badge>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">{page.title}</h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">{page.description}</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
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
                className="rounded-lg border-[#2037d8]/25 bg-white/78 text-[#2037d8] hover:bg-white"
              >
                Public Sector / M/WBE
              </Button>
            </div>
          </div>

          <div className="relative pb-5">
            {'heroVisuals' in page && (
              <div className="grid gap-3">
                <div className="relative overflow-hidden border border-white bg-white p-2 shadow-2xl shadow-[#2037d8]/18">
                  <img
                    src={page.heroVisuals[0]}
                    alt="Technology operating model workshop"
                    className="aspect-[16/9] w-full object-cover"
                  />
                  <div className="absolute left-5 top-5 bg-white/92 px-4 py-2 shadow-lg backdrop-blur">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#2037d8]">
                      Executive View
                    </p>
                    <p className="text-sm font-semibold">Operating control plane</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="overflow-hidden border border-white bg-white p-2 shadow-lg shadow-[#2037d8]/10">
                    <img
                      src={page.heroVisuals[1]}
                      alt="Stakeholder technology discussion"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden border border-white bg-white p-2 shadow-lg shadow-[#2037d8]/10">
                    <img
                      src={page.heroVisuals[2]}
                      alt="KPI and analytics review"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
            {'processFlow' in page && (
              <div className="absolute bottom-0 left-5 right-5 grid grid-cols-3 border border-[#2037d8]/12 bg-white/94 text-center shadow-xl shadow-[#2037d8]/12 backdrop-blur">
                {['Assess', 'Design', 'Measure'].map((item) => (
                  <div key={item} className="border-r border-[#2037d8]/12 px-3 py-3 last:border-r-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                      Control
                    </p>
                    <p className="mt-1 text-sm font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {'processFlow' in page && (
        <section className="overflow-hidden border-b border-border bg-white">
          <div className="mx-auto max-w-[92rem] px-4 py-7 sm:px-6 lg:px-8">
            <div className="mb-4 grid gap-4 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <Badge variant="outline" className="mb-2 rounded-lg border-[#2037d8]/25 bg-white">
                  Practice Operating Model
                </Badge>
                <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
                  Process flow, KPI, and outcome in one view.
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ['Process Flow', 'Assess → Design → Deploy → Scale'],
                  ['KPI Signal', 'Reliability · Adoption · Efficiency · Risk'],
                  ['Outcome View', 'Roadmap · Ownership · Business impact'],
                ].map(([label, value], index) => {
                  const Icon = processSummaryIcons[index] ?? CheckCircle2;

                  return (
                  <div key={label} className="group border border-[#2037d8]/16 bg-[#071223] p-4 text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#c8ff1a]/55 hover:bg-[#10214a] hover:shadow-xl hover:shadow-[#2037d8]/20">
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <span className="grid size-9 place-items-center rounded-full bg-[#c8ff1a] text-[#071223] transition duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#c8ff1a]/25">
                        <Icon className="size-4 transition duration-300 group-hover:-rotate-6" />
                      </span>
                      {index < 2 && <ArrowRight className="hidden size-4 text-[#c8ff1a] transition duration-300 group-hover:translate-x-1 sm:block" />}
                    </div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#c8ff1a]">{label}</p>
                    <p className="mt-2 text-sm font-semibold leading-5 text-white/86">{value}</p>
                  </div>
                  );
                })}
              </div>
            </div>

            <div className="border border-[#2037d8]/18 bg-white p-4 shadow-xl shadow-[#2037d8]/10">
              <div className="mb-4 border border-[#2037d8]/12 bg-[#f8fbff]">
                <div className="border-b border-[#2037d8]/12 bg-white px-4 py-2">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#2037d8]">
                    Engagement Pipeline
                  </p>
                </div>
                <div className="grid gap-0 md:grid-cols-[1fr_36px_1fr_36px_1fr] md:items-stretch">
                {[
                  ['Input', 'Current stack, people, risk, priorities'],
                  ['Method', 'Assess, design, deploy, scale'],
                  ['Output', 'Measured roadmap and accountable delivery'],
                ].map(([label, value], index) => (
                  <div key={label} className="contents">
                    <div className="group bg-white px-4 py-3 transition duration-300 hover:bg-[#eef8fc] hover:shadow-inner">
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#2037d8]">{label}</p>
                      <p className="mt-1 text-sm font-semibold text-[#071223] transition duration-300 group-hover:text-[#2037d8]">{value}</p>
                    </div>
                    {index < 2 && (
                      <div className="group grid place-items-center border-y border-[#2037d8]/10 bg-[#eef8fc] transition duration-300 hover:bg-[#2037d8] md:border-x md:border-y-0">
                        <ArrowRight className="size-5 rotate-90 text-[#2037d8] transition duration-300 group-hover:text-white md:rotate-0 md:group-hover:translate-x-1" />
                      </div>
                    )}
                  </div>
                ))}
                </div>
              </div>

              <div className="grid gap-3 lg:grid-cols-[1fr_36px_1fr_36px_1fr_36px_1fr] lg:items-center">
                {page.processFlow.map((step, index) => {
                  const Icon = processIcons[index] ?? CheckCircle2;

                  return (
                    <div key={step.phase} className="contents">
                      <article className="group overflow-hidden border border-[#2037d8]/14 bg-[#f8fbff] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#2037d8]/50 hover:bg-white hover:shadow-xl hover:shadow-[#2037d8]/12">
                        <div className={`h-2 ${processAccentClasses[index]} transition duration-300 group-hover:h-3`} />
                        <div className="p-4 text-center">
                          <span className="mx-auto grid size-12 place-items-center rounded-full bg-white text-[#2037d8] ring-1 ring-[#2037d8]/18 transition duration-300 group-hover:scale-110 group-hover:bg-[#2037d8] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#2037d8]/20">
                            <Icon className="size-5 transition duration-300 group-hover:-translate-y-0.5" />
                          </span>
                          <h3 className="mt-4 text-lg font-semibold text-[#071223]">{step.title}</h3>
                          <p className="mt-2 text-sm leading-5 text-muted-foreground">
                            {step.copy}
                          </p>
                        </div>
                      </article>
                      {index < page.processFlow.length - 1 && (
                        <div className="flex items-center justify-center">
                          <div className="group hidden size-9 place-items-center rounded-full border border-[#2037d8]/18 bg-white shadow-sm transition duration-300 hover:border-[#2037d8]/45 hover:bg-[#2037d8] lg:grid">
                            <ArrowRight className="size-5 text-[#2037d8] transition duration-300 group-hover:translate-x-1 group-hover:text-white" />
                          </div>
                          <div className="h-8 w-px bg-[#2037d8]/22 lg:hidden" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 border border-[#2037d8]/12 bg-[#f8fbff]">
                <div className="border-b border-[#2037d8]/12 bg-white px-4 py-3">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#2037d8]">
                    Measurement Track
                  </p>
                </div>
                <div className="grid gap-0 lg:grid-cols-4">
                  {page.processFlow.map((step, index) => (
                    <div key={`${step.phase}-measurement`} className="group border-b border-[#2037d8]/12 p-3 transition duration-300 hover:bg-white hover:shadow-inner lg:border-b-0 lg:border-r last:border-r-0">
                      <div className="flex items-center gap-2">
                        <span className={`h-2.5 w-2.5 rounded-full ${processAccentClasses[index]} transition duration-300 group-hover:scale-150`} />
                        <p className="text-sm font-semibold text-[#071223] transition duration-300 group-hover:text-[#2037d8]">{step.kpi}</p>
                      </div>
                      <p className="mt-3 text-xs font-semibold leading-5 text-muted-foreground">
                        {step.outcome}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 border border-[#2037d8]/14 bg-white shadow-lg shadow-[#2037d8]/8">
              <div className="flex flex-col gap-3 border-b border-[#2037d8]/12 bg-[#071223] p-4 text-white lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#c8ff1a]">
                    KPI Governance Scorecard
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">One scorecard keeps the work accountable.</h3>
                </div>
                <div className="grid grid-cols-3 border border-white/12 bg-white/8 text-center">
                  {['Baseline', 'Weekly Review', 'Executive Readout'].map((label) => (
                    <div key={label} className="border-r border-white/12 px-4 py-2 last:border-r-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/48">Cadence</p>
                      <p className="mt-1 text-xs font-semibold">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
                <div className="relative min-h-72 overflow-hidden border-b border-[#2037d8]/12 lg:border-b-0 lg:border-r">
                  <img
                    src="/technology-ecosystem-growth-kpi.png"
                    alt="Growth KPI visualization"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,35,0.08),rgba(7,18,35,0.72))]" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#c8ff1a]">
                      Scorecard lens
                    </p>
                    <p className="mt-2 text-xl font-semibold leading-tight">
                      Progress stakeholders can see without reading a long report.
                    </p>
                  </div>
                </div>
                <div className="grid gap-0 md:grid-cols-2 xl:grid-cols-4">
                  {kpiScorecard.map(([title, metric, label, scope, status], index) => (
                    <article key={title} className="border-b border-[#2037d8]/12 p-4 md:border-r xl:border-b-0 last:border-r-0">
                      <div className="mb-4 flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-[#2037d8]">{title}</p>
                          <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                            {status}
                          </p>
                        </div>
                        <span className={`h-3 w-3 rounded-full ${processAccentClasses[index]}`} />
                      </div>
                      <div className="flex items-end gap-2">
                        <p className="text-4xl font-semibold leading-none text-[#071223]">{metric}</p>
                        <p className="pb-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{label}</p>
                      </div>
                      <div className="mt-4 h-2 overflow-hidden bg-[#eef8fc]">
                        <div className={`h-full ${processAccentClasses[index]}`} style={{ width: `${88 - index * 9}%` }} />
                      </div>
                      <p className="mt-4 text-xs leading-5 text-muted-foreground">{scope}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {'mastery' in page && (
        <section className="border-b border-border bg-[#f7f8f4]">
          <div className="mx-auto grid max-w-[92rem] gap-5 px-4 py-7 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
            <div className="overflow-hidden border border-[#071223]/10 bg-white shadow-lg shadow-black/5">
              <div className="relative h-52">
                <img
                  src="/technology-ecosystem-human.png"
                  alt="Human-centered technology practice"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.95),rgba(255,255,255,0.56),rgba(255,255,255,0.04))]" />
                <div className="relative p-4">
                  <Badge className="rounded-lg bg-[#071223] text-white">
                    Practice Framework
                  </Badge>
                </div>
              </div>
              <div className="p-5">
                <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
                  {page.mastery.title}
                </h2>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{page.mastery.copy}</p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {page.mastery.principles.map(([title, copy], index) => (
                <article key={title} className="border border-border bg-white p-4 shadow-sm">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="grid size-8 place-items-center bg-[#eef8fc] font-mono text-xs font-bold text-[#2037d8]">
                      {index + 1}
                    </span>
                    <h3 className="text-sm font-semibold">{title}</h3>
                  </div>
                  <p className="text-xs leading-5 text-muted-foreground">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {'industries' in page && (
        <section className="border-b border-border bg-[#eef8fc]">
          <div className="mx-auto max-w-[92rem] px-4 py-7 sm:px-6 lg:px-8">
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
        <div className="mx-auto grid max-w-[92rem] gap-5 px-4 py-7 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
          <div className="overflow-hidden border border-[#2037d8]/14 bg-[#071223] text-white shadow-xl shadow-[#2037d8]/12">
            {'processFlow' in page && (
              <img
                src="/technology-ecosystem-code.png"
                alt="Enterprise code and platform engineering visual"
                className="aspect-[16/10] w-full object-cover"
              />
            )}
            <div className="p-4">
              <Badge className="mb-4 rounded-lg bg-[#c8ff1a] text-zinc-950">What We Cover</Badge>
              <h2 className="text-2xl font-semibold leading-tight">Focused services, matched to real delivery needs.</h2>
              <p className="mt-3 text-sm leading-6 text-white/68">
                The ecosystem brings application engineering, enterprise systems,
                delivery tooling, and experience design into one operating view.
              </p>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {page.services.map(([title, copy], index) => (
              <article key={title} className="border border-border bg-[#f7f8f4] p-4 shadow-sm transition hover:-translate-y-1 hover:border-[#2037d8]/35 hover:bg-white hover:shadow-xl hover:shadow-[#2037d8]/8">
                <div className="mb-4 flex items-center gap-3">
                  <span className={`h-3 w-3 rounded-full ${processAccentClasses[index % processAccentClasses.length]}`} />
                  <h3 className="text-sm font-semibold text-[#2037d8]">{title}</h3>
                </div>
                <p className="text-xs leading-5 text-muted-foreground">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {'evidenceTracks' in page && (
        <section className="border-b border-border bg-[#f7f8f4]">
          <div className="mx-auto grid max-w-[92rem] gap-5 px-4 py-7 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
            <div className="overflow-hidden border border-[#2037d8]/14 bg-white shadow-sm">
              <img
                src="/technology-ecosystem-validation.png"
                alt="Validation and quality score visual"
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2037d8]">Evidence assets</p>
              <h2 className="mt-2 text-2xl font-semibold leading-tight">Case studies and whitepapers should prove the framework, not decorate the page.</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                As client-approved material becomes available, this section can hold downloadable proof around process, KPI movement, and delivery outcomes.
              </p>
              </div>
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
        <div className="mx-auto grid max-w-[92rem] gap-5 px-4 py-7 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
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
        <div className="mx-auto max-w-[92rem] px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 border-b border-white/10 pb-4 lg:flex-row lg:items-center lg:justify-between">
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

          <div className="grid gap-5 py-5 sm:grid-cols-2 lg:grid-cols-4">
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

          <div className="grid gap-3 border-t border-white/10 py-4 lg:grid-cols-3">
            {officeLocations.map(([region, office, address]) => (
              <div key={region} className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#c8ff1a]">{region}</p>
                <p className="mt-1 text-sm font-semibold text-white">{office}</p>
                <p className="mt-1 text-xs leading-5 text-white/58">{address}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 border-t border-white/10 pt-4 text-xs text-white/50 lg:flex-row lg:items-center lg:justify-between">
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
