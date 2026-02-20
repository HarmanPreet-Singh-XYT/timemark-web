import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Scolect Helper',
  description: 'Frequently asked questions for Scolect. Find quick answers about installation, usage, privacy, and our open-source philosophy.',
  openGraph: {
    title: 'FAQ | Scolect Helper',
    description: 'Frequently asked questions for Scolect. Find quick answers about installation, usage, privacy, and our open-source philosophy.',
    url: 'https://scolect.com/faq',
  },
  alternates: {
    canonical: '/faq',
  },
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
