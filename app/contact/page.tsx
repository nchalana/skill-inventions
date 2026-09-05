import type { Metadata } from 'next';
import { ArrowRight, Building2, Globe2, Mail, MapPin, Phone } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Contact Us | Skill Inventions',
  description:
    'Contact Skill Inventions for AI talent, technology staffing, consulting, WackoWave, public-sector, and partner opportunities.',
};

const contactMethods = [
  {
    label: 'Email',
    value: 'info@skillinventions.com',
    href: 'mailto:info@skillinventions.com',
    icon: Mail,
  },
  {
    label: 'Phone',
    value: '718 701 5909',
    href: 'tel:+17187015909',
    icon: Phone,
  },
  {
    label: 'Fax',
    value: '718 701 8865',
    href: 'tel:+17187018865',
    icon: Building2,
  },
  {
    label: 'Website',
    value: 'www.skillinventions.com',
    href: 'https://www.skillinventions.com',
    icon: Globe2,
  },
];

const offices = [
  {
    region: 'United States',
    office: 'Skill Inventions Inc.',
    address: '61-36, 170th Street, Suite M-2, Fresh Meadows, NY 11365',
  },
  {
    region: 'India',
    office: 'Skill Inventions Pvt. Ltd.',
    address: 'Venkateshwara Nagar Colony, Sainathpuram, Dr. AS Rao Nagar, Hyderabad - 500062',
  },
  {
    region: 'Canada',
    office: 'Skill Inventions Canada',
    address: '1500 W Georgia St Suite # 1300, Vancouver, British Columbia V6G 2Z6, CA',
  },
];

const inquiryTypes = [
  'AI Talent Request',
  'Technology Staffing',
  'Public Sector / M/WBE',
  'WackoWave Demo',
  'Vendor Partnership',
  'Jobseeker Support',
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7f8f4] text-foreground">
      <header className="border-b border-border bg-white/92 backdrop-blur">
        <nav className="mx-auto flex max-w-[92rem] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a href="/" className="grid h-11 w-52 place-items-center overflow-hidden">
            <img src="/skill-inventions-logo.svg" alt="Skill Inventions logo" className="h-full w-full object-contain" />
          </a>
          <Button
            nativeButton={false}
            render={<a href="mailto:info@skillinventions.com?subject=Skill%20Inventions%20Inquiry" />}
            className="rounded-full bg-[#2037d8] text-white hover:bg-[#172db8]"
          >
            Email Us
          </Button>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-[#08111f] text-white">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#00a7d8,#c8ff1a,#2037d8,#e0ab24)]" />
        <div className="mx-auto grid max-w-[92rem] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <Badge className="mb-4 rounded-lg bg-[#c8ff1a] text-zinc-950">Contact Skill Inventions</Badge>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              Tell us what you need to build, hire, verify, or deliver.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
              Use this page to start a conversation about AI talent, technology
              staffing, public-sector delivery, WackoWave products, vendor
              partnerships, or jobseeker support.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button
                nativeButton={false}
                render={<a href="mailto:info@skillinventions.com?subject=Skill%20Inventions%20Inquiry" />}
                size="lg"
                className="rounded-lg bg-[#c8ff1a] text-zinc-950 shadow-lg shadow-lime-400/15 hover:bg-[#d6ff45]"
              >
                Start the Conversation
                <ArrowRight data-icon="inline-end" className="size-4" />
              </Button>
              <Button
                nativeButton={false}
                render={<a href="/" />}
                size="lg"
                variant="outline"
                className="rounded-lg border-white/24 bg-white/8 text-white hover:bg-white/14"
              >
                Back to Main Site
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-white/12 bg-white/[0.06] p-5 shadow-2xl shadow-black/25">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c8ff1a]">Corporate Office</p>
            <h2 className="mt-3 text-2xl font-semibold">Skill Inventions Inc.</h2>
            <p className="mt-3 flex gap-3 text-sm leading-6 text-white/72">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[#c8ff1a]" />
              <span>61-36, 170th Street, Suite M-2, Fresh Meadows, NY 11365</span>
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {contactMethods.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="rounded-lg border border-white/10 bg-white/[0.06] p-3 transition hover:border-[#c8ff1a]/50 hover:bg-white/[0.1]"
                >
                  <Icon className="mb-3 size-4 text-[#c8ff1a]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">{label}</p>
                  <p className="mt-1 text-sm font-semibold text-white">{value}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white">
        <div className="mx-auto grid max-w-[92rem] gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <Badge variant="outline" className="mb-3 rounded-lg">Inquiry Routing</Badge>
            <h2 className="text-2xl font-semibold leading-tight">A simple way to route the right request.</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Pick the closest topic in your email subject, or send the details
              directly. Include role family, technology stack, location,
              timeline, and decision priority where relevant.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {inquiryTypes.map((type) => (
              <a
                key={type}
                href={`mailto:info@skillinventions.com?subject=${encodeURIComponent(type)}`}
                className="flex items-center justify-between gap-3 rounded-lg border border-border bg-[#f7f8f4] p-4 text-sm font-semibold shadow-sm transition hover:border-[#2037d8]/30 hover:bg-[#eef8fc]"
              >
                {type}
                <ArrowRight className="size-4 shrink-0 text-[#2037d8]" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef8fc]">
        <div className="mx-auto max-w-[92rem] px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Badge className="mb-2 rounded-lg bg-[#2037d8] text-white">Global Offices</Badge>
              <h2 className="text-2xl font-semibold">US, India, and Canada presence.</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
              Skill Inventions supports client conversations, delivery teams,
              and talent coordination across regional operating hubs.
            </p>
          </div>

          <div className="grid gap-3 lg:grid-cols-3">
            {offices.map((office) => (
              <article key={office.region} className="rounded-lg border border-[#2037d8]/15 bg-white p-4 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#e0ab24]">{office.region}</p>
                <h3 className="mt-2 text-base font-semibold">{office.office}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{office.address}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
