import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, FileSearch, ShieldCheck } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'WackoWave Platform Intelligence | Skill Inventions',
  description:
    'WackoWave Platform Intelligence is a decision-support and forensic verification system for resumes, documents, credentials, and hiring workflows.',
};

const engines = [
  'Timeline and overlap signals',
  'Career-velocity anomalies',
  'AI-language indicators',
  'Visual document forensics',
  'Semantic coherence',
];

const outcomes = [
  ['30-second screening', 'Run resume, credential, and document checks before files enter hiring or enterprise workflows.'],
  ['Decision queues', 'Route candidates into Priority Advance, Review Required, or Hold with human-readable reasoning.'],
  ['Human review', 'Surface risk signals for recruiters and risk officers without making blind automated rejections.'],
];

export default function PlatformIntelligencePage() {
  return (
    <main className="min-h-screen bg-[#f7f8f4] text-foreground">
      <header className="border-b border-border bg-white/92 backdrop-blur">
        <nav className="mx-auto flex max-w-[92rem] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a href="/" className="grid h-11 w-52 place-items-center overflow-hidden">
            <img src="/skill-inventions-logo.svg" alt="Skill Inventions logo" className="h-full w-full object-contain" />
          </a>
          <Button
            nativeButton={false}
            render={<a href="mailto:info@skillinventions.com?subject=WackoWave%20Platform%20Intelligence%20Demo" />}
            className="rounded-full bg-[#2037d8] text-white hover:bg-[#172db8]"
          >
            Request Demo
          </Button>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-[#08111f] text-white">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#00a7d8,#c8ff1a,#2037d8,#e0ab24)]" />
        <div className="mx-auto grid max-w-[92rem] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
          <div>
            <Badge className="mb-4 rounded-lg bg-[#c8ff1a] text-zinc-950">WackoWave Platform Intelligence</Badge>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              Matching is not validation.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/72">
              Most AI resume matching software behaves like a faster Ctrl+F:
              job description versus resume. WackoWave adds a forensic trust
              layer before resumes, documents, and credentials enter hiring
              workflows or enterprise databases.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button
                nativeButton={false}
                render={<a href="mailto:info@skillinventions.com?subject=WackoWave%20Platform%20Intelligence%20Demo" />}
                size="lg"
                className="rounded-lg bg-[#c8ff1a] text-zinc-950 shadow-lg shadow-lime-400/15 hover:bg-[#d6ff45]"
              >
                See Platform Intelligence
                <ArrowRight data-icon="inline-end" className="size-4" />
              </Button>
              <Button
                nativeButton={false}
                render={<a href="/#wackowave" />}
                size="lg"
                variant="outline"
                className="rounded-lg border-white/24 bg-white/8 text-white hover:bg-white/14"
              >
                Back to WackoWave
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-white/12 bg-white/[0.06] p-3 shadow-2xl shadow-black/25">
            <img
              src="/wackowave-to-be.png"
              alt="WackoWave unified resume validation and screening command center"
              className="aspect-[16/9] w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-[92rem] px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Badge variant="outline" className="mb-2 rounded-lg">As-Is / To-Be</Badge>
              <h2 className="text-2xl font-semibold">From resume flood to verified screening intelligence.</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
              WackoWave helps teams move beyond keyword matching by checking
              consistency, manipulation signals, credential alignment, and
              document coherence before human review time is consumed.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <article className="overflow-hidden rounded-lg border border-border bg-[#f7f8f4] shadow-sm">
              <img
                src="/wackowave-as-is.png"
                alt="As-is hiring workflow overwhelmed by high-volume resume submissions"
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">As-Is</p>
                <h3 className="mt-2 text-xl font-semibold">High-volume matching creates review overload.</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Job boards and AI-generated resumes accelerate submissions,
                  but basic matching still leaves recruiters sorting through
                  noise, gaps, repetition, and unverifiable claims.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-lg border border-[#2037d8]/20 bg-[#eef8fc] shadow-sm">
              <img
                src="/wackowave-to-be.png"
                alt="To-be WackoWave validation workflow with unified screening across sources"
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2037d8]">To-Be</p>
                <h3 className="mt-2 text-xl font-semibold">Forensic verification before the shortlist.</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  WackoWave screens incoming profiles and documents, assigns
                  trust signals, and routes the right files into recruiter-ready
                  queues for faster, cleaner human decisions.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#08111f] text-white">
        <div className="mx-auto grid max-w-[92rem] gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <Badge className="mb-3 rounded-lg bg-[#c8ff1a] text-zinc-950">Five analysis engines</Badge>
            <h2 className="text-2xl font-semibold leading-tight">
              A trust layer for resumes, credentials, and external documents.
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/66">
              The platform checks the signals that keyword matching misses,
              then gives reviewers a readable score, risk band, and next action.
            </p>
            <div className="mt-5 grid gap-2">
              {engines.map((engine) => (
                <div key={engine} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.06] p-3">
                  <ShieldCheck className="size-4 text-[#c8ff1a]" />
                  <p className="text-sm font-semibold">{engine}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid content-start gap-3">
            {outcomes.map(([title, copy]) => (
              <article key={title} className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
                <FileSearch className="mb-3 size-5 text-[#c8ff1a]" />
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/62">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
