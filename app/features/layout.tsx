import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features | What Scolect Can Do',
  description: 'Explore the powerful features of Scolect. Focus modes, detailed analytics, custom limits, native integrations, and more.',
  openGraph: {
    title: 'Features | What Scolect Can Do',
    description: 'Explore the powerful features of Scolect. Focus modes, detailed analytics, custom limits, native integrations, and more.',
    url: 'https://scolect.com/features',
  },
  alternates: {
    canonical: '/features',
  },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
