import type { Metadata } from 'next';
import { Building2, Mail, MapPin, Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Contact Us | Skill Inventions',
  description:
    'Contact Skill Inventions for AI talent, technology staffing, consulting, WackoWave, public-sector, and partner opportunities.',
};

const contactMethods = [
  {
    label: 'Email :',
    value: 'info@skillinventions.com',
    href: 'mailto:info@skillinventions.com',
    icon: Mail,
  },
  {
    label: 'Phone :',
    value: '718 701 5909',
    href: 'tel:+17187015909',
    icon: Phone,
  },
  {
    label: 'Fax :',
    value: '718 701 8865',
    href: 'tel:+17187018865',
    icon: Building2,
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

      <section className="bg-white">
        <div className="mx-auto max-w-[92rem] px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold leading-tight text-[#08111f]">Contact Us</h1>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <form className="rounded-lg border border-border bg-[#f7f8f4] p-5 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold">
                  Name
                  <input className="h-11 rounded-md border border-border bg-white px-3 text-sm outline-none transition focus:border-[#2037d8] focus:ring-2 focus:ring-[#2037d8]/15" type="text" name="name" />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Email
                  <input className="h-11 rounded-md border border-border bg-white px-3 text-sm outline-none transition focus:border-[#2037d8] focus:ring-2 focus:ring-[#2037d8]/15" type="email" name="email" />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Phone
                  <input className="h-11 rounded-md border border-border bg-white px-3 text-sm outline-none transition focus:border-[#2037d8] focus:ring-2 focus:ring-[#2037d8]/15" type="tel" name="phone" />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Subject
                  <input className="h-11 rounded-md border border-border bg-white px-3 text-sm outline-none transition focus:border-[#2037d8] focus:ring-2 focus:ring-[#2037d8]/15" type="text" name="subject" />
                </label>
                <label className="grid gap-2 text-sm font-semibold sm:col-span-2">
                  Message
                  <textarea className="min-h-36 rounded-md border border-border bg-white px-3 py-3 text-sm outline-none transition focus:border-[#2037d8] focus:ring-2 focus:ring-[#2037d8]/15" name="message" />
                </label>
              </div>

              <label className="mt-4 flex gap-3 text-xs leading-5 text-muted-foreground">
                <input type="checkbox" className="mt-1 size-4 shrink-0 accent-[#2037d8]" />
                <span>
                  I consent to having this website store my submitted information
                  so Skill Inventions can respond to my inquiry.
                </span>
              </label>

              <Button
                nativeButton={false}
                render={<a href="mailto:info@skillinventions.com?subject=Contact%20Us%20Inquiry" />}
                className="mt-5 rounded-md bg-[#2037d8] px-8 text-white hover:bg-[#172db8]"
              >
                Submit
              </Button>
            </form>

            <aside className="grid content-start gap-5">
              <section className="rounded-lg border border-border bg-white p-5 shadow-sm">
                <h2 className="text-2xl font-semibold text-[#08111f]">Information</h2>
                <div className="mt-5 grid gap-3">
                  {contactMethods.map(({ label, value, href, icon: Icon }) => (
                    <a key={label} href={href} className="flex items-center gap-3 text-sm text-muted-foreground transition hover:text-[#2037d8]">
                      <span className="grid size-9 place-items-center rounded-full bg-[#eef8fc] text-[#2037d8]">
                        <Icon className="size-4" />
                      </span>
                      <span>
                        <strong className="text-foreground">{label}</strong> {value}
                      </span>
                    </a>
                  ))}
                </div>
              </section>

              <section className="rounded-lg border border-border bg-white p-5 shadow-sm">
                <h2 className="text-2xl font-semibold text-[#08111f]">Corporate Office</h2>
                <div className="mt-5 flex gap-3 text-sm leading-6 text-muted-foreground">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#eef8fc] text-[#2037d8]">
                    <MapPin className="size-4" />
                  </span>
                  <span>
                    <strong className="block text-foreground">Skill Inventions Inc.</strong>
                    61-36, 170th Street, Suite M-2, Fresh Meadows, NY 11365
                  </span>
                </div>
              </section>

              <section className="rounded-lg border border-border bg-white p-5 shadow-sm">
                <h2 className="text-2xl font-semibold text-[#08111f]">Global Offices</h2>
                <div className="mt-5 grid gap-4">
                  {offices.slice(1).map((office) => (
                    <div key={office.region} className="text-sm leading-6 text-muted-foreground">
                      <p className="font-bold text-[#e0ab24]">{office.region}</p>
                      <p className="font-semibold text-foreground">{office.office}</p>
                      <p>{office.address}</p>
                    </div>
                  ))}
                </div>
              </section>
            </aside>
          </div>

          <section className="mt-8 overflow-hidden rounded-lg border border-border bg-white shadow-sm">
            <div className="flex flex-col gap-2 border-b border-border p-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-[#08111f]">Find Us</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Skill Inventions Inc., 61-36, 170th Street, Suite M-2, Fresh Meadows, NY 11365
                </p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=61-36%20170th%20Street%20Suite%20M-2%20Fresh%20Meadows%20NY%2011365"
                className="text-sm font-semibold text-[#2037d8] transition hover:text-[#172db8]"
              >
                Open in Google Maps
              </a>
            </div>
            <iframe
              title="Skill Inventions corporate office map"
              src="https://www.google.com/maps?q=61-36%20170th%20Street%20Suite%20M-2%20Fresh%20Meadows%20NY%2011365&output=embed"
              className="h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </section>
        </div>
      </section>
    </main>
  );
}
