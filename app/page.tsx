import {
  ArrowRight,
  CalendarCheck,
  ChevronDown,
  CheckCircle2,
  LogIn,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const journey = [
  {
    years: '2013',
    era: 'Mobile-First',
    industry:
      'Smartphones surpassed feature phones globally, cloud-backed apps scaled fast, and connected products entered mainstream demand.',
    pivot:
      'Native and cross-platform apps, responsive web, and mobile-ready technology talent.',
    color: 'bg-[var(--si-lime)] text-zinc-950',
    image: '/smartphone.jpg',
  },
  {
    years: '2015',
    era: 'Cloud Adoption',
    industry:
      'Businesses moved from desktop-first systems into mobile apps, SaaS tools, APIs, and elastic cloud infrastructure.',
    pivot:
      'Infrastructure migration, AWS and Azure architecture, DevOps, and platform reliability.',
    color: 'bg-[var(--si-sky)] text-white',
    image: '/young_business.jpg',
  },
  {
    years: '2017',
    era: 'SaaS Transformation',
    industry:
      'Multi-tenant products, subscription platforms, and API-connected services became operating essentials.',
    pivot:
      'Product engineering, integration layers, recurring platform support, and scalable delivery teams.',
    color: 'bg-[var(--si-gold)] text-zinc-950',
    image: '/business_team.jpg',
  },
  {
    years: '2019',
    era: 'Data-Driven Enterprise',
    industry:
      'Customer data, dashboards, automation, and platform integrations became essential for competitive business execution.',
    pivot:
      'Data engineering, analytics pipelines, BI, reporting, and workflow intelligence.',
    color: 'bg-[var(--si-gold)] text-zinc-950',
    image: '/diverse.jpg',
  },
  {
    years: '2020',
    era: 'Remote Work at Scale',
    industry:
      'Distributed work, collaboration platforms, secure remote access, and digital customer journeys became non-negotiable.',
    pivot:
      'Workforce enablement, flexible delivery pods, remote-ready systems, and global execution.',
    color: 'bg-[var(--si-coral)] text-white',
    image: '/hrmanager.jpg',
  },
  {
    years: '2022',
    era: 'Cybersecurity Imperative',
    industry:
      'Zero-trust architecture, compliance readiness, threat intelligence, and managed security became board-level priorities.',
    pivot:
      'Security-aware engineering, protected data flows, compliance support, and AI workflow guardrails.',
    color: 'bg-[var(--si-aqua)] text-white',
    image: '/hrtech.jpg',
  },
  {
    years: '2024',
    era: 'AI-Native Trust Systems',
    industry:
      'AI made basic code, content, and automation cheaper, while increasing risks around quality, trust, security, and governance.',
    pivot:
      'AI integration, verification, governance, WackoWave trust intelligence, and platform engineering.',
    color: 'bg-[var(--si-violet)] text-white',
    image: '',
  },
  {
    years: '2026',
    era: 'Agentic Verification',
    industry:
      'AI agents moved from assistance into action, making validation, auditability, and human review essential.',
    pivot:
      'WackoWave DVS, JobSearch AI agents, document verification, and decision-ready trust reports.',
    color: 'bg-[var(--si-violet)] text-white',
    image: '',
  },
];

const wackoWaveTrends = [
  {
    number: '01',
    title: 'Full-Pipeline Screening',
    trend:
      'External resumes, employment histories, certifications, and documents now enter hiring and business systems faster than teams can manually review.',
    fit:
      'WackoWave screens files on demand or in API batches of 100-500, returning forensic intelligence in around 30 seconds per file.',
  },
  {
    number: '02',
    title: 'Five Analysis Engines',
    trend:
      'Matching tools compare keywords. Verification needs to test whether the facts, dates, claims, and document signals hold together.',
    fit:
      'The platform checks timeline overlap, career velocity, AI-language indicators, visual document forensics, and semantic coherence.',
  },
  {
    number: '03',
    title: 'Scoring and Decision Support',
    trend:
      'Recruiters and risk teams need quick routing, not another long report buried in the workflow.',
    fit:
      'WackoWave produces recruiter-readable Trust Scores, job-description match scores, and queues such as Priority Advance, Review Required, or Hold.',
  },
  {
    number: '04',
    title: 'Human-in-the-Loop Verification',
    trend:
      'Automated rejection creates its own risk when the stakes involve employment, identity, compliance, or vendor approval.',
    fit:
      'WackoWave flags risk signals and prioritizes queues while final decisions remain with human recruiters, reviewers, or risk officers.',
  },
];

const sampleReportSignals = [
  ['Trust Score', 'Recruiter-readable score with risk band and match context'],
  ['Layer Analysis', 'Timeline, career velocity, credentials, document signals, and semantic coherence'],
  ['Forensic Flags', 'Prioritized concerns such as overlaps, repetition, tampering, mismatches, and anomalies'],
  ['Human Review Action', 'Clear next step for interview, verification, escalation, or hold'],
];

const dvsUseCases = [
  ['Customer KYC', 'Identity documents against your compliance checklist, instantly at onboarding volume'],
  ['Claims and underwriting', 'Supporting documents against policy requirements before files reach an adjuster or reviewer'],
  ['Vendor verification', 'Registrations, licenses, and compliance documents against your procurement SOP'],
  ['Provider credentials', 'Healthcare and life-sciences credentials against role, compliance, and verification rules'],
];

const dvsSteps = [
  ['Define the SOP once', 'The rules your team already uses to approve or reject a document.'],
  ['DVS applies it every time', 'Consistent checks in 30 seconds, without fatigue or drift.'],
  ['Your team reviews exceptions', 'Human attention goes to flagged cases, not routine passes.'],
];

const jobSearchSteps = [
  ['Connect LinkedIn', 'Sign in once. WackoWave verifies your profile and auto-populates your bench profile without a resume upload.'],
  ['AI Builds Your Profile', 'Your agent turns LinkedIn data, skills, and target roles into a public bench profile reviewed and live within hours.'],
  ['AI Applies 24 / 7', 'It scans job boards, matches roles by skills and salary, submits applications, and sends a digest of every action taken.'],
];

const aiTalentRoles = [
  'AI Engineers',
  'Machine Learning Engineers',
  'Data Engineers',
  'Data Scientists',
  'Generative AI Engineers',
  'LLM Engineers',
  'MLOps Engineers',
  'Python Developers',
  'Power BI / Tableau Developers',
  'Business & Data Analysts',
  'Cloud Engineers',
  'DevOps Engineers',
];

const aiTalentChannels = [
  ['Staff Augmentation', 'Role-ready AI, data, cloud, and application talent for active delivery needs.'],
  ['Consulting Pods', 'Small expert teams for analytics, automation, migration, governance, and delivery acceleration.'],
  ['Direct Hire / RPO', 'Recruiting support for organizations building long-term AI and data capability.'],
  ['Public Sector / M/WBE', 'M/WBE-certified positioning for agency, authority, university, and prime-vendor opportunities.'],
];

const aiTalentRequestFlow = [
  ['01', 'Role outcome', 'What needs to ship, stabilize, analyze, or automate'],
  ['02', 'Stack and level', 'Tools, seniority, delivery model, and start date'],
  ['03', 'Shortlist returned', 'Curated profiles aligned to region, rate, and urgency'],
];

const navGroups = [
  {
    title: 'Capabilities',
    items: [
      {
        title: 'Technology Ecosystem',
        copy: 'Cloud, data, ERP, mobile, QA, security, AI, and design platforms we support',
        href: '/capabilities/technology-ecosystem',
      },
      {
        title: 'AI Talent Solutions',
        copy: '48-hour shortlists for AI, data, cloud, and automation roles',
        href: '/capabilities/ai-talent-solutions',
      },
      {
        title: 'Cloud & Platform Engineering',
        copy: 'Infrastructure modernization, cloud operations, automation, and reliability support',
        href: '/capabilities/cloud-platform-engineering',
      },
      {
        title: 'Data & AI Delivery',
        copy: 'Data pipelines, BI, analytics, AI integration, and governed automation',
        href: '/capabilities/data-ai-delivery',
      },
      {
        title: 'Security & Trust',
        copy: 'Cybersecurity, identity, verification, compliance support, and human review workflows',
        href: '/capabilities/security-trust',
      },
    ],
  },
  {
    title: 'WackoWave',
    items: [
      {
        title: 'Platform Intelligence',
        copy: 'Resume, credential, and document forensics for decision support',
        href: '/wackowave/platform-intelligence',
      },
      {
        title: 'Document Verification System',
        copy: 'Verify KYC, claims, vendor, tenant, and credential documents against your SOP',
        href: '#dvs',
      },
      {
        title: 'JobSearch AI Agent',
        copy: 'Always-on job discovery, profile creation, and application automation',
        href: '#jobsearch',
      },
      {
        title: 'Sample Reports',
        copy: 'Trust scores, forensic flags, layer analysis, and reviewer-ready actions',
        href: '#reports',
      },
    ],
  },
  {
    title: 'Talent',
    items: [
      {
        title: 'For Hiring Managers',
        copy: 'Submit a role requirement and receive a curated shortlist from our US, Canada, and India network',
        href: 'mailto:hello@skillinventions.com?subject=Talent%20shortlist%20request',
      },
      {
        title: 'For Jobseekers',
        copy: 'Use the WackoWave JobSearch AI Agent to build a profile and apply while you are away',
        href: '#jobsearch',
      },
      {
        title: 'Role Families & Stacks',
        copy: 'Infrastructure, mobile, full-stack, data, AI, cybersecurity, QA, ERP, and design roles',
        href: '#ai-talent',
      },
    ],
  },
  {
    title: 'Trust',
    items: [
      {
        title: 'Human Review Model',
        copy: 'Risk signals are surfaced for people to review, not used for blind rejection',
        href: '/wackowave/platform-intelligence',
      },
      {
        title: 'Certifications & Verification',
        copy: 'MWBE certification, E-Verify participation, and cross-border operating presence',
        href: '#contact',
      },
      {
        title: 'Public Sector / M/WBE',
        copy: 'Technology staffing and consulting pathways for agencies, authorities, and prime vendors',
        href: '/public-sector',
      },
      {
        title: 'System Status',
        copy: 'Current operational status and support contact information',
        href: '#contact',
      },
    ],
  },
  {
    title: 'Company',
    items: [
      {
        title: 'About Skill Inventions',
        copy: 'Founded in 2013 and built around practical technology delivery',
        href: '#journey',
      },
      {
        title: 'Office Hubs',
        copy: 'New York, Hyderabad, and Toronto regional presence',
        href: '/contact',
      },
      {
        title: 'Contact',
        copy: 'Talk to Skill Inventions about technology, talent, or WackoWave',
        href: '/contact',
      },
    ],
  },
];

const heroTechStack = [
  {
    title: 'Engineering',
    tools: ['Java', 'Python', 'Bash', 'PowerShell', 'SQL'],
  },
  {
    title: 'Enterprise ERP',
    tools: ['SAP', 'Salesforce', 'Oracle', 'PeopleSoft', 'JD Edwards', 'BAAN'],
  },
  {
    title: 'Cloud & Infra',
    tools: ['AWS', 'Azure', 'Google Cloud', 'Ansible', 'Red Hat', 'Linux', 'Windows', 'Docker', 'VMware'],
  },
  {
    title: 'Automation QA',
    tools: ['Selenium', 'Playwright', 'Cucumber'],
  },
  {
    title: 'AI Coding',
    tools: ['Copilot', 'Cursor'],
  },
  {
    title: 'Delivery',
    tools: ['Bitbucket', 'GitHub', 'Jira', 'Azure DevOps'],
  },
  {
    title: 'Data Platforms',
    tools: ['PostgreSQL', 'Supabase', 'SQLite', 'Firebase'],
  },
  {
    title: 'Mobile',
    tools: ['Android', 'Apple', 'Swift', 'Flutter', 'React Native'],
  },
  {
    title: 'Product Design',
    tools: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Sketch', 'Framer', 'Webflow', 'Canva', 'Miro'],
  },
];

const toolLogoPaths: Record<string, string> = {
  Java: '/logos/java.svg',
  Python: '/logos/python.svg',
  PowerShell: '/logos/powershell.svg',
  SAP: '/logos/sap.svg',
  Salesforce: '/logos/salesforce.svg',
  Oracle: '/logos/oracle.svg',
  AWS: '/logos/aws.svg',
  Azure: '/logos/azure.svg',
  'Google Cloud': '/logos/google-cloud.svg',
  Ansible: '/logos/ansible.svg',
  'Red Hat': '/logos/redhat.svg',
  Linux: '/logos/linux.svg',
  Windows: '/logos/windows.svg',
  Docker: '/logos/docker.svg',
  VMware: '/logos/vmware.svg',
  Selenium: '/logos/selenium.svg',
  Playwright: '/logos/playwright.svg',
  Cucumber: '/logos/cucumber.svg',
  Copilot: '/logos/github-copilot.svg',
  Cursor: '/logos/cursor.svg',
  Bitbucket: '/logos/bitbucket.svg',
  GitHub: '/logos/github.svg',
  Jira: '/logos/jira.svg',
  'Azure DevOps': '/logos/azure-devops.svg',
  PostgreSQL: '/logos/postgresql.svg',
  Supabase: '/logos/supabase.svg',
  SQLite: '/logos/sqlite.svg',
  Firebase: '/logos/firebase.svg',
  Android: '/logos/android.svg',
  Apple: '/logos/apple.svg',
  Swift: '/logos/swift.svg',
  Flutter: '/logos/flutter.svg',
  'React Native': '/logos/react.svg',
  OpenAI: '/logos/openai.svg',
  Figma: '/logos/figma.svg',
  'Adobe XD': '/logos/adobe-xd.svg',
  Photoshop: '/logos/photoshop.svg',
  Illustrator: '/logos/illustrator.svg',
  Sketch: '/logos/sketch.svg',
  Framer: '/logos/framer.svg',
  Webflow: '/logos/webflow.svg',
  Canva: '/logos/canva.svg',
  Miro: '/logos/miro.svg',
};

const heroTechMarquee = heroTechStack.flatMap((group) =>
  group.tools.map((tool) => ({
    name: tool,
    category: group.title,
    logo: toolLogoPaths[tool],
  })),
);

const heroLogoMarquee = [
  { name: 'OpenAI', category: 'AI', logo: '/logos/openai.svg' },
  { name: 'Palo Alto Networks', category: 'Security', logo: '/logos/palo-alto.svg' },
  ...heroTechMarquee,
];

const clientLogoStrip = [
  ['Cambridge', 'https://www.skillinventions.com/wp-content/uploads/2019/05/cambridge.png'],
  ['Cartel', 'https://www.skillinventions.com/wp-content/uploads/2019/05/cartel.png'],
  ['HostingCo', 'https://www.skillinventions.com/wp-content/uploads/2019/05/hostingco.png'],
  ['MailingWork', 'https://www.skillinventions.com/wp-content/uploads/2019/05/mailingwork.png'],
  ['MIMA', 'https://www.skillinventions.com/wp-content/uploads/2019/05/MIMA.png'],
  ['Nervepoint', 'https://www.skillinventions.com/wp-content/uploads/2019/05/nervepoint.png'],
  ['SCDM', 'https://www.skillinventions.com/wp-content/uploads/2019/05/SCDM.png'],
  ['Iowa StateSeal', 'https://www.skillinventions.com/wp-content/uploads/2019/05/Iowa-StateSeal.png'],
  ['New York', 'https://www.skillinventions.com/wp-content/uploads/2019/05/New_York.png'],
  ['Arkansas', 'https://www.skillinventions.com/wp-content/uploads/2019/05/Seal_of_Arkansas.png'],
];

const companyBadges = [
  {
    name: 'New York State MWBE Certified',
    src: '/mwbe-certified-transparent.png',
    frameClass: 'h-12 w-16',
    imageClass: 'max-h-12 max-w-full',
  },
  {
    name: 'E-Verify participating employer',
    src: '/e-verify-transparent.png',
    frameClass: 'h-14 w-44',
    imageClass: 'max-h-12 max-w-full',
  },
];

const officeLocations = [
  {
    region: 'United States',
    office: 'Skill Inventions Inc.',
    address: '61-36, 170th Street, Suite M-2, Fresh Meadows, NY 11365',
    cardClass: 'lg:flex-[0.9]',
  },
  {
    region: 'India',
    office: 'Skill Inventions Pvt. Ltd.',
    address: 'Venkateshwara Nagar Colony, Sainathpuram, Dr. AS Rao Nagar, Hyderabad - 500062',
    cardClass: 'lg:flex-[1.45]',
  },
  {
    region: 'Canada',
    office: 'Skill Inventions Canada',
    address: '1500 W Georgia St Suite # 1300, Vancouver, British Columbia V6G 2Z6, CA',
    cardClass: 'lg:flex-[1.05]',
  },
];

const socialLinks = [
  { label: 'LinkedIn', mark: 'in', href: 'mailto:hello@skillinventions.com', brandClass: 'bg-[#0a66c2] text-white' },
  { label: 'X (Twitter)', mark: 'X', href: 'mailto:hello@skillinventions.com', brandClass: 'bg-zinc-950 text-white' },
  { label: 'GitHub', mark: 'GH', href: 'mailto:hello@skillinventions.com', brandClass: 'bg-white text-zinc-950' },
  { label: 'YouTube', mark: '▶', href: 'mailto:hello@skillinventions.com', brandClass: 'bg-[#ff0000] text-white' },
];

const footerColumns = [
  {
    title: 'Capabilities',
    links: [
      { label: 'Technology Ecosystem', href: '/capabilities/technology-ecosystem' },
      { label: 'AI Talent Solutions', href: '/capabilities/ai-talent-solutions' },
      { label: 'Cloud & Platform Engineering', href: '/capabilities/cloud-platform-engineering' },
      { label: 'Data & AI Delivery', href: '/capabilities/data-ai-delivery' },
      { label: 'Security & Trust', href: '/capabilities/security-trust' },
    ],
  },
  {
    title: 'WackoWave',
    links: [
      { label: 'Platform Intelligence', href: '/wackowave/platform-intelligence' },
      { label: 'Document Verification System', href: '#dvs' },
      { label: 'JobSearch AI Agent', href: '#jobsearch' },
      { label: 'Sample Reports', href: '#reports' },
      { label: 'Watch Validation Video', href: 'https://www.youtube.com/watch?v=C8JYPJ9PuLA' },
    ],
  },
  {
    title: 'Talent Marketplace',
    links: [
      { label: 'Employers', href: 'mailto:hello@skillinventions.com?subject=Talent%20shortlist%20request' },
      { label: 'Jobseekers', href: '#jobsearch' },
      { label: 'Job Search', href: '#jobsearch' },
      { label: 'Vendors', href: 'mailto:hello@skillinventions.com?subject=Vendor%20partnership' },
      { label: 'Public Sector', href: '/public-sector' },
    ],
  },
  {
    title: 'Trust & Company',
    links: [
      { label: 'MWBE Certified', href: '#contact' },
      { label: 'E-Verify Employer', href: '#contact' },
      { label: 'Public Sector / M/WBE', href: '/public-sector' },
      { label: 'Office Hubs', href: '/contact' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,color-mix(in_oklch,var(--si-lime),transparent_78%),transparent_32%),radial-gradient(circle_at_top_right,color-mix(in_oklch,var(--si-aqua),transparent_84%),transparent_30%),var(--background)] text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-white/82 shadow-sm backdrop-blur-xl">
        <nav className="mx-auto flex max-w-[92rem] items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
          <a href="#top" className="flex shrink-0 items-center gap-3">
            <span className="grid h-12 w-56 place-items-center overflow-hidden">
              <img
                src="/skill-inventions-logo.svg"
                alt="Skill Inventions logo"
                className="h-full w-full object-contain"
              />
            </span>
          </a>
          <div className="hidden items-center gap-1 rounded-full border border-border/70 bg-white/76 p-1 text-sm shadow-sm lg:flex">
            {navGroups.map((group) => (
              <div key={group.title} className="group relative">
                <button className="inline-flex h-9 items-center gap-1 rounded-full px-3 font-semibold text-muted-foreground transition hover:bg-[#2037d8] hover:text-white">
                  {group.title}
                  <ChevronDown className="size-3.5 transition group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-1/2 top-full z-50 w-[360px] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="overflow-hidden rounded-xl border border-white/70 bg-white/96 shadow-2xl shadow-[#2037d8]/12 ring-1 ring-black/5 backdrop-blur">
                    <div className="h-1 bg-[linear-gradient(90deg,#2037d8,#0a66c2,#c8ff1a)]" />
                    <div className="px-4 pb-2 pt-3">
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#2037d8]">{group.title}</p>
                    </div>
                    <div className="grid gap-1 px-2 pb-2">
                      {group.items.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          className="group/item rounded-lg border border-transparent p-3 transition hover:border-[#2037d8]/12 hover:bg-[#2037d8]/5"
                        >
                          <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                            <span className="size-1.5 rounded-full bg-[#c8ff1a] ring-2 ring-[#2037d8]/10" />
                            {item.title}
                          </span>
                          <span className="mt-1 block text-xs leading-5 text-muted-foreground">{item.copy}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Button
              nativeButton={false}
              render={<a href="mailto:hello@skillinventions.com" />}
              size="lg"
              variant="ghost"
              className="hidden rounded-full md:inline-flex"
            >
              <LogIn data-icon="inline-start" className="size-4" />
              Sign In
            </Button>
            <Button
              nativeButton={false}
              render={<a href="mailto:hello@skillinventions.com" />}
              size="lg"
              className="rounded-full bg-[linear-gradient(135deg,#2037d8,#0a66c2)] text-white shadow-lg shadow-blue-500/20 hover:opacity-90"
            >
              <CalendarCheck data-icon="inline-start" className="size-4" />
              Book a Demo
            </Button>
          </div>
        </nav>
        <div className="border-t border-border bg-[#101827] px-4 py-2 text-white lg:hidden">
          <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto text-xs">
            {navGroups.map((group) => (
              <a key={group.title} href={group.items[0].href} className="shrink-0 rounded-full bg-white/10 px-3 py-2 font-semibold">
                {group.title}
              </a>
            ))}
          </div>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden border-b border-border/70">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,var(--si-sky),var(--si-lime),var(--si-aqua),var(--si-gold))]" />
        <div className="mx-auto grid max-w-[98rem] gap-16 px-6 py-12 sm:px-8 lg:grid-cols-[minmax(25rem,0.72fr)_minmax(0,1.28fr)] lg:gap-24 lg:px-10 lg:py-16">
          <div className="flex max-w-[33rem] flex-col justify-center lg:justify-self-end">
            <p className="mb-5 inline-flex w-fit rounded-full border border-border bg-white/82 px-4 py-2 text-sm font-medium text-[var(--si-violet)] shadow-sm">
              Built before the cloud. Ready for what&apos;s after AI.
            </p>
            <h1 className="max-w-[34rem] text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-[2.8rem]">
              Mobile, cloud, SaaS, AI — we&apos;ve seen what outlasts a shift,
              and what doesn&apos;t.
            </h1>
            <p className="mt-6 max-w-[31rem] text-base leading-7 text-muted-foreground">
              The technology landscape is evolving at unprecedented speed. AI
              capabilities change daily, security threats continue to escalate,
              and establishing trust has never been more complex. Skill
              Inventions enables small and mid-sized businesses to build, secure,
              and scale their digital foundation through certified technology
              professionals spanning cloud, data, cybersecurity, AI integration,
              platform engineering, and UI/UX.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                nativeButton={false}
                render={<a href="#top" />}
                size="lg"
                className="h-11 rounded-lg bg-[linear-gradient(135deg,var(--si-ink),var(--si-violet))] px-5 text-white shadow-lg shadow-violet-500/15 hover:opacity-90"
              >
                Explore Our Capabilities
                <ArrowRight data-icon="inline-end" className="size-4" />
              </Button>
              <Button
                nativeButton={false}
                render={<a href="mailto:hello@skillinventions.com" />}
                size="lg"
                variant="outline"
                className="h-11 rounded-lg border-foreground/20 bg-white/80 px-5 shadow-sm hover:bg-white"
              >
                Connect With Us
              </Button>
            </div>
          </div>

          <div className="relative flex items-center lg:justify-self-start">
            <div className="w-full max-w-none overflow-hidden rounded-2xl shadow-2xl shadow-[color-mix(in_oklch,var(--si-sky),transparent_72%)] lg:w-[min(48vw,46rem)]">
              <div className="relative aspect-[5/4] overflow-hidden">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/hero-blueprint.png"
                  aria-label="Skill Inventions hero video"
                >
                  <source src="/skill-inventions-hero.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ecosystem" className="scroll-mt-24 border-b border-border bg-[color-mix(in_oklch,var(--si-sky),white_97%)] px-6 py-3 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[98rem]">
          <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Technology ecosystem
            </p>
            <p className="text-xs font-medium text-muted-foreground">
              Core platforms, delivery tools, and AI coding workflows aligned by certified professionals
            </p>
          </div>
          <div className="relative overflow-hidden rounded-xl bg-white/95 py-2 shadow-sm ring-1 ring-black/5">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />
            <div className="tech-marquee flex w-max gap-2 px-3">
              {[...heroLogoMarquee, ...heroLogoMarquee].map((tool, index) => (
                <div
                  key={`${tool.name}-${index}`}
                  className="flex min-w-max items-center gap-2 rounded-lg border border-border bg-[color-mix(in_oklch,var(--si-lime),white_90%)] px-3 py-2 shadow-sm"
                >
                  <div className="grid h-8 w-11 place-items-center px-1 text-xs font-black text-[var(--si-violet)]">
                    {tool.logo ? (
                      <img
                        src={tool.logo}
                        alt={`${tool.name} logo`}
                        className="max-h-5 max-w-9 object-contain"
                      />
                    ) : (
                      tool.name
                        .split(' ')
                        .map((word) => word[0])
                        .join('')
                        .slice(0, 3)
                        .toUpperCase()
                    )}
                  </div>
                  <div>
                    <p className="text-xs font-semibold leading-tight">{tool.name}</p>
                    <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                      {tool.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3 overflow-hidden rounded-xl bg-white/85 py-3 shadow-sm ring-1 ring-black/5">
            <div className="client-logo-marquee flex w-max items-center gap-8 px-6">
              {[...clientLogoStrip, ...clientLogoStrip].map(([name, src], index) => (
                <img
                  key={`${name}-${index}`}
                  src={src}
                  alt={`${name} logo`}
                  className="h-9 w-auto max-w-32 object-contain opacity-75 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="ai-talent" className="scroll-mt-24 border-b border-border bg-white">
        <div className="mx-auto grid max-w-[92rem] gap-6 px-4 py-9 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
          <div className="rounded-xl border border-[#2037d8]/15 bg-[linear-gradient(135deg,#101827,#2037d8)] p-5 text-white shadow-xl shadow-[#2037d8]/15">
            <Badge className="mb-3 rounded-lg bg-[#c8ff1a] text-zinc-950">
              Skill Inventions AI Talent Solutions
            </Badge>
            <h2 className="max-w-xl text-2xl font-semibold leading-tight sm:text-3xl">
              AI, data, and cloud talent delivered in 48 hours.
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/72">
              Specialized shortlists for teams building analytics, automation,
              AI-enabled products, cloud platforms, and trusted data operations.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {aiTalentChannels.map(([title, copy]) => (
                <article key={title} className="rounded-lg border border-white/12 bg-white/[0.07] p-3">
                  <h3 className="text-sm font-semibold text-[#c8ff1a]">{title}</h3>
                  <p className="mt-1 text-xs leading-5 text-white/66">{copy}</p>
                </article>
              ))}
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button
                nativeButton={false}
                render={<a href="mailto:hello@skillinventions.com?subject=48-Hour%20AI%20Talent%20Request" />}
                size="lg"
                className="h-10 rounded-lg bg-[#c8ff1a] px-4 text-zinc-950 shadow-lg shadow-lime-400/15 hover:bg-[#d6ff45]"
              >
                Request AI Talent
                <ArrowRight data-icon="inline-end" className="size-4" />
              </Button>
              <Button
                nativeButton={false}
                render={<a href="/public-sector" />}
                size="lg"
                variant="outline"
                className="h-10 rounded-lg border-white/24 bg-white/8 px-4 text-white hover:bg-white/14"
              >
                Public Sector / M/WBE
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
              <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--si-violet)]">
                Focused AI Delivery Bench
              </p>
              <h3 className="mt-2 text-2xl font-semibold leading-tight">
                Built for hiring managers who need the right fit, fast.
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Share the outcome, the stack, the seniority, the region, and
                the start date. Skill Inventions matches it to pre-vetted AI,
                data, cloud, development, analytics, and delivery professionals
                across the US, Canada, and India so you spend your time
                interviewing the right people, not searching for them.
              </p>
            </div>
              <div className="rounded-xl border border-[#2037d8]/15 bg-[color-mix(in_oklch,var(--si-sky),white_96%)] p-4 shadow-sm">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold">48-hour request flow</p>
                  <span className="rounded-full bg-[#c8ff1a] px-2.5 py-1 text-[11px] font-bold text-zinc-950">
                    Fast shortlist
                  </span>
                </div>
                <div className="grid gap-2">
                  {aiTalentRequestFlow.map(([number, title, copy]) => (
                    <div key={title} className="flex gap-3 rounded-lg bg-white p-3 ring-1 ring-black/5">
                      <span className="font-mono text-xs font-bold text-[#2037d8]">{number}</span>
                      <div>
                        <p className="text-sm font-semibold leading-4">{title}</p>
                        <p className="mt-1 text-xs leading-4 text-muted-foreground">{copy}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-[color-mix(in_oklch,var(--background),white_50%)] p-4">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                High-demand role coverage
              </p>
              <div className="flex flex-wrap gap-2">
              {aiTalentRoles.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-border bg-[color-mix(in_oklch,var(--si-sky),white_93%)] px-3 py-1.5 text-xs font-semibold text-foreground"
                >
                  {role}
                </span>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="connected-experiences" className="scroll-mt-24 border-b-2 border-foreground bg-[color-mix(in_oklch,var(--si-gold),white_82%)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
          <div>
            <Badge className="mb-4 rounded-lg bg-[var(--si-violet)] text-white">
              Connected experiences
            </Badge>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Combining technology acceleration with human intuition.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Modern business systems are no longer just screens and databases. They
              blend AI workflows, physical operations, security controls, and
              human verification into one reliable business environment.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-border bg-white shadow-xl shadow-black/10">
            <div className="grid md:grid-cols-[1.15fr_0.85fr]">
              <img
                src="/future-engineering-site.png"
                alt="Engineer using immersive digital construction and technology overlays"
                className="h-64 w-full object-cover md:h-full"
              />
              <div className="grid content-center gap-4 p-5">
                {[
                  ['Technology acceleration', 'AI-assisted delivery, cloud platforms, data pipelines, and automated security signals help teams move faster.'],
                  ['Human intuition', 'Certified professionals apply context, judgment, architecture, and accountability where automated tools fall short.'],
                ].map(([title, copy]) => (
                  <div key={title} className="rounded-lg bg-[color-mix(in_oklch,var(--si-sky),white_94%)] p-4">
                    <p className="text-sm font-semibold">{title}</p>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="journey" className="scroll-mt-24 relative overflow-hidden border-b border-border bg-[color-mix(in_oklch,var(--background),white_72%)] text-foreground">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,var(--si-sky),var(--si-lime),var(--si-aqua),var(--si-coral),var(--si-gold))]" />
        <div className="relative mx-auto max-w-[96rem] px-3 py-9 sm:px-4 lg:px-6">
          <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
              {['Our Journey', 'Since 2013', 'Eight technology shifts'].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-border bg-white px-3 py-1 text-[11px] font-bold shadow-sm"
                >
                  {label}
                </span>
              ))}
              </div>
              <h2 className="max-w-2xl text-3xl font-semibold leading-[1.08] sm:text-4xl">
                Over a Decade of Evolving With the Industry
              </h2>
            </div>
            <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
              Founded at the height of the mobile-first era, Skill Inventions
              has grown through each defining shift in enterprise technology.
              Each transition reshaped how businesses operate, and each time, we
              reshaped our practice to meet it.
            </p>
          </div>

          <div className="mt-8 overflow-x-auto pb-2">
            <div className="relative min-w-[1180px] px-1 pt-6">
              <div
                aria-hidden="true"
                className="absolute left-3 right-3 top-[2.9rem] h-1 rounded-full bg-[linear-gradient(90deg,var(--si-sky)_0%,var(--si-sky)_34%,var(--si-aqua)_52%,var(--si-aqua)_72%,var(--si-gold)_88%,var(--si-gold)_100%)]"
              />
              <div className="grid grid-cols-8 gap-3">
                {journey.map((item, index) => (
                  <article key={item.years} className="relative text-center">
                    <div
                      className={`mx-auto mb-4 grid size-8 place-items-center rounded-full border-4 bg-white shadow-[0_0_0_5px_color-mix(in_oklch,currentColor,transparent_84%)] ${
                        index < 3
                          ? 'border-[var(--si-sky)] text-[var(--si-sky)]'
                          : index < 5
                            ? 'border-[var(--si-aqua)] text-[var(--si-aqua)]'
                            : 'border-[var(--si-gold)] text-[var(--si-gold)]'
                      }`}
                    >
                      <span
                        className={`size-3 rounded-full ${
                          index === journey.length - 1
                            ? 'bg-[var(--si-gold)]'
                            : 'bg-background'
                        }`}
                      />
                    </div>
                    <p
                      className={`text-xl font-bold ${
                        index < 3
                          ? 'text-[var(--si-sky)]'
                          : index < 5
                            ? 'text-[var(--si-aqua)]'
                            : 'text-[var(--si-gold)]'
                      }`}
                    >
                      {item.years}
                    </p>
                    <h3 className="mx-auto mt-2 min-h-10 max-w-36 text-sm font-semibold leading-5">
                      {item.era}
                    </h3>
                    <p className="mx-auto mt-2 max-w-36 text-[11px] leading-4 text-muted-foreground">
                      {item.pivot}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-3 pt-3 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-3xl text-base font-semibold sm:text-lg">
              Eight shifts. <span className="text-[var(--si-aqua)]">One partner</span> who was there for all of them.
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              Skill Inventions
            </p>
          </div>
        </div>
      </section>

      <section id="wackowave" className="scroll-mt-24 border-t border-border bg-[#2037d8] text-white">
        <div className="mx-auto max-w-[92rem] px-4 py-9 sm:px-6 lg:px-8">
          <div className="mb-5 grid gap-4 lg:grid-cols-[0.72fr_0.78fr_0.5fr] lg:items-end">
            <div>
              <Badge className="mb-3 rounded-lg bg-[#c8ff1a] text-zinc-950">
                WackoWave by Skill Inventions
              </Badge>
              <h2 className="max-w-2xl text-2xl font-semibold leading-tight sm:text-3xl">
                Matching is not validation.
              </h2>
              <p className="mt-2 text-sm font-semibold text-[#c8ff1a]">
                AI changed recruiting. Trust must catch up.
              </p>
            </div>
            <p className="max-w-3xl text-sm leading-6 text-white/76">
              Most AI resume matching software still behaves like a faster
              Ctrl+F: job description versus resume. WackoWave Platform
              Intelligence adds a trust layer for external documents, resumes,
              credentials, and hiring signals before they enter enterprise
              databases or reviewer queues.
            </p>
            <div className="overflow-hidden rounded-lg border border-white/18 bg-black/25 shadow-xl shadow-black/20">
              <iframe
                className="aspect-video w-full"
                src="https://www.youtube.com/embed/C8JYPJ9PuLA"
                title="WackoWave validation video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {wackoWaveTrends.map((item) => (
              <article
                key={item.number}
                className="rounded-lg border border-white/18 bg-white/[0.08] p-4 shadow-xl shadow-black/10"
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold leading-5">{item.title}</h3>
                  <span className="font-mono text-sm font-semibold text-[#c8ff1a]">
                    {item.number}
                  </span>
                </div>
                <div className="space-y-3 text-xs leading-5 text-white/74">
                  <p>
                    <span className="block font-semibold uppercase tracking-wide text-white">
                      The trend
                    </span>
                    {item.trend}
                  </p>
                  <p>
                    <span className="block font-semibold uppercase tracking-wide text-[#c8ff1a]">
                      WackoWave&apos;s fit
                    </span>
                    {item.fit}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="dvs" className="scroll-mt-24 border-t border-border bg-[linear-gradient(180deg,#f8fbff,#eef7ff)]">
        <div className="mx-auto max-w-[92rem] px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div className="flex flex-col justify-between rounded-xl border border-[#2037d8]/15 bg-white p-5 shadow-xl shadow-[#2037d8]/10">
              <div>
                <Badge className="mb-3 rounded-lg bg-[#c8ff1a] text-zinc-950">
                  WackoWave Product · Document Verification System
                </Badge>
                <h2 className="max-w-2xl text-2xl font-semibold leading-tight sm:text-4xl">
                  Verify any document in 30 seconds. Not 3 days.
                </h2>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  KYC checks, claims paperwork, tenant files, and vendor
                  approvals all depend on the same hidden workflow: open the
                  document, compare it to policy, and decide if it is valid.
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  WackoWave DVS turns your SOP into a verification engine. Upload
                  an ID, claim form, lease, or vendor certificate and DVS returns
                  a verified or flagged decision with reasoning attached.
                </p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {dvsSteps.map(([title, copy], index) => (
                  <article
                    key={title}
                    className="group rounded-lg border border-border bg-muted/35 p-3 transition duration-300 hover:-translate-y-1 hover:border-[#2037d8]/40 hover:bg-white hover:shadow-lg hover:shadow-[#2037d8]/10"
                  >
                    <span className="mb-3 inline-flex size-7 items-center justify-center rounded-lg bg-[#2037d8] text-xs font-bold text-white transition duration-300 group-hover:bg-[#c8ff1a] group-hover:text-zinc-950">
                      {index + 1}
                    </span>
                    <h3 className="text-sm font-semibold">{title}</h3>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">{copy}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              <div className="rounded-xl bg-[#101827] p-4 text-white shadow-2xl shadow-[#2037d8]/20">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#c8ff1a]">
                      Live verification run
                    </p>
                    <h3 className="mt-2 text-xl font-semibold">SOP to decision</h3>
                  </div>
                  <div className="rounded-lg bg-[#c8ff1a] px-3 py-2 text-right text-zinc-950">
                    <p className="text-2xl font-bold leading-none">30s</p>
                    <p className="text-[10px] font-semibold uppercase tracking-wide">target</p>
                  </div>
                </div>

                <div className="grid gap-2">
                  {['Document received', 'SOP rules applied', 'Evidence checked', 'Decision returned'].map((step, index) => (
                    <div key={step} className="flex items-center gap-3 rounded-lg bg-white/8 p-3 ring-1 ring-white/10">
                      <span className="grid size-7 shrink-0 place-items-center rounded-md bg-white/10 text-xs font-semibold text-[#c8ff1a]">
                        {index + 1}
                      </span>
                      <span className="text-sm font-medium">{step}</span>
                      <span className="ml-auto h-1.5 w-16 rounded-full bg-white/12">
                        <span className="block h-full rounded-full bg-[#c8ff1a]" style={{ width: `${100 - index * 14}%` }} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {dvsUseCases.map(([useCase, checks]) => (
                  <article
                    key={useCase}
                    className="group rounded-lg border border-border bg-white p-4 shadow-md shadow-black/5 transition duration-300 hover:-translate-y-1 hover:border-[#2037d8]/45 hover:shadow-xl hover:shadow-[#2037d8]/10"
                  >
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <h3 className="text-sm font-semibold">{useCase}</h3>
                    <CheckCircle2 className="size-4 text-[#2037d8] transition duration-300 group-hover:text-[var(--si-aqua)]" />
                    </div>
                    <p className="text-xs leading-5 text-muted-foreground">{checks}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-3 rounded-xl border border-[#2037d8]/15 bg-white p-4 shadow-lg shadow-black/5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-3xl text-sm font-semibold leading-6 text-[#2037d8]">
              The rules were already yours. DVS just makes sure every document
              meets them, every time, in the time it takes to read this sentence.
            </p>
            <Button
              nativeButton={false}
              render={<a href="mailto:hello@skillinventions.com?subject=WackoWave%20DVS%20demo" />}
              size="lg"
              className="h-10 shrink-0 rounded-lg bg-[#2037d8] px-4 text-white shadow-lg shadow-blue-500/15 hover:bg-[#172db8]"
            >
              See DVS on your documents
              <ArrowRight data-icon="inline-end" className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      <section id="jobsearch" className="scroll-mt-24 border-t border-border bg-zinc-950 text-white">
        <div className="mx-auto max-w-[92rem] px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <div className="flex flex-col justify-between">
              <div>
                <Badge className="mb-3 rounded-lg border border-[#0a66c2]/45 bg-[#0a66c2]/12 text-[#8cc8ff]">
                  WackoWave - JobSearch AI Agent
                </Badge>
                <h2 className="max-w-2xl text-2xl font-semibold leading-tight sm:text-4xl">
                  Your jobsearch AI agent never clocks out.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/72">
                  While you are sleeping, on vacation, or just busy living, your
                  AI scans job boards, matches roles, and submits applications
                  on your behalf. Nights, weekends, and holidays included.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  nativeButton={false}
                  render={<a href="https://studious-union-490014-t9.web.app/auth/linkedin-bench/start" />}
                  size="lg"
                  className="h-10 rounded-lg bg-[#0a66c2] px-4 text-white shadow-lg shadow-[#0a66c2]/25 hover:bg-[#004182]"
                >
                  <span className="mr-1 grid size-5 place-items-center rounded-sm bg-white text-sm font-bold leading-none text-[#0a66c2]">
                    in
                  </span>
                  Get Started with LinkedIn
                  <ArrowRight data-icon="inline-end" className="size-4" />
                </Button>
                <p className="text-xs font-semibold text-white/58">
                  Free · No resume needed · Live in &lt; 24 hrs
                </p>
              </div>
            </div>

            <div className="grid gap-3">
              <div className="rounded-xl border border-white/12 bg-white/[0.06] p-4 shadow-2xl shadow-black/20">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#c8ff1a]">
                      Always-on application loop
                    </p>
                    <h3 className="mt-2 text-xl font-semibold">Profile to submissions</h3>
                  </div>
                  <span className="rounded-full border border-[#c8ff1a]/35 bg-[#c8ff1a]/10 px-3 py-1 text-xs font-semibold text-[#c8ff1a]">
                    24 / 7
                  </span>
                </div>

                <div className="grid gap-3 md:grid-cols-3">
                  {jobSearchSteps.map(([title, copy], index) => (
                    <article
                      key={title}
                      className="group rounded-lg border border-white/12 bg-zinc-950/55 p-4 transition duration-300 hover:-translate-y-1 hover:border-[#c8ff1a]/45 hover:bg-white/10"
                    >
                      <span className="mb-3 inline-flex size-8 items-center justify-center rounded-lg bg-white/10 text-sm font-bold text-[#c8ff1a] ring-1 ring-white/10 transition duration-300 group-hover:bg-[#c8ff1a] group-hover:text-zinc-950">
                        {index + 1}
                      </span>
                      <h3 className="text-sm font-semibold">{title}</h3>
                      <p className="mt-2 text-xs leading-5 text-white/68">{copy}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {['Role matching', 'Auto-apply queue', 'Action digest'].map((item) => (
                  <div key={item} className="rounded-lg border border-white/12 bg-white/[0.06] p-3">
                    <CheckCircle2 className="mb-2 size-4 text-[#c8ff1a]" />
                    <p className="text-sm font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reports" className="scroll-mt-24 border-t border-white/10 bg-[#0b1020] text-white">
        <div className="mx-auto max-w-[92rem] px-4 py-7 sm:px-6 lg:px-8">
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <Badge className="mb-2 rounded-lg border border-[#c8ff1a]/30 bg-[#c8ff1a]/10 text-[#c8ff1a]">
                Sample WackoWave reports
              </Badge>
              <h2 className="text-xl font-semibold sm:text-2xl">
                A private, decision-ready candidate verification summary.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-white/62">
              Each report turns resume and profile risk into a concise reviewer
              brief with scores, flagged patterns, and a recommended next step.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {sampleReportSignals.map(([title, copy]) => (
              <article
                key={title}
                className="group rounded-lg border border-white/10 bg-white/[0.045] p-4 shadow-md shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-[#c8ff1a]/45 hover:bg-white/[0.075] hover:shadow-xl hover:shadow-[#2037d8]/20"
              >
                <CheckCircle2 className="mb-3 size-5 text-[#c8ff1a] transition duration-300 group-hover:scale-110 group-hover:text-white" />
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-white/58">
                  {copy}
                </p>
                <p className="mt-3 translate-y-1 text-xs font-semibold text-[#c8ff1a] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  View signal logic
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="scroll-mt-24 border-t border-[#2037d8]/20 bg-[#08111f] text-white">
        <div className="mx-auto max-w-[92rem] px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 border-b border-white/10 pb-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <span className="grid h-11 w-48 place-items-center overflow-hidden">
                <img
                  src="/skill-inventions-logo-footer.svg"
                  alt="Skill Inventions logo"
                  className="h-full w-full object-contain"
                />
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
              {companyBadges.map((badge) => (
                <span
                  key={badge.name}
                  className={`grid place-items-center ${badge.frameClass}`}
                  title={badge.name}
                >
                  <img
                    src={badge.src}
                    alt={`${badge.name} logo`}
                    className={`${badge.imageClass} object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.3)]`}
                  />
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-7 py-7 sm:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#c8ff1a]">{column.title}</h3>
                <ul className="mt-3 space-y-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-white/62 transition hover:text-white">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid gap-3 border-t border-white/10 py-5 lg:flex">
            {officeLocations.map((office) => (
              <div key={office.region} className={`rounded-lg border border-white/10 bg-white/[0.04] p-3 ${office.cardClass}`}>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#c8ff1a]">{office.region}</p>
                <p className="mt-1 text-sm font-semibold text-white">{office.office}</p>
                <p className="mt-1 text-xs leading-5 text-white/58 lg:whitespace-nowrap">{office.address}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-t border-white/10 pt-5 text-xs text-white/50 lg:flex-row lg:items-center lg:justify-between">
            <p>© 2026 Skill Inventions Inc. All rights reserved.</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {['Privacy Policy', 'Terms of Service', 'Regional Data Disclosure', 'Cookie Settings'].map((link) => (
                <a key={link} href="#top" className="transition hover:text-white">
                  {link}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {socialLinks.map(({ label, mark, href, brandClass }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  title={label}
                  className="grid size-8 place-items-center rounded-full border border-white/10 bg-white/[0.04] transition hover:border-white/24 hover:bg-white/10"
                >
                  <span className={`grid size-5 place-items-center rounded-full text-[10px] font-black leading-none ${brandClass}`}>
                    {mark}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
