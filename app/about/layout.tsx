import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Scolect | Open Source Screen Time Tracker',
  description: 'Learn about Scolect: a privacy-first, free, and open-source screen time tracker. Discover our mission to give you digital autonomy.',
  openGraph: {
    title: 'About Scolect | Open Source Screen Time Tracker',
    description: 'Learn about Scolect: a privacy-first, free, and open-source screen time tracker. Discover our mission to give you digital autonomy.',
    url: 'https://scolect.com/about',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
