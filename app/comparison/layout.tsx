import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compare Scolect | Free Screen Time Alternatives',
  description: 'See how Scolect compares to other screen time trackers. Why open-source, privacy-first, and local-data tools are better.',
  openGraph: {
    title: 'Compare Scolect | Free Screen Time Alternatives',
    description: 'See how Scolect compares to other screen time trackers. Why open-source, privacy-first, and local-data tools are better.',
    url: 'https://scolect.com/comparison',
  },
  alternates: {
    canonical: '/comparison',
  },
};

export default function ComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
