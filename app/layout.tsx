import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Skill Inventions | Enterprise-Grade Technology for Growing Businesses',
  description:
    'Skill Inventions helps growing businesses build, secure, and scale cloud, data, AI, cybersecurity, platform engineering, and UI/UX systems with certified technology professionals.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Skill Inventions | Enterprise-Grade Technology for Growing Businesses',
    description:
      'AI-era technology teams, trust-first engineering, and global delivery for growing businesses.',
    siteName: 'Skill Inventions',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
