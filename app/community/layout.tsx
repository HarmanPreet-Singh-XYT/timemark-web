import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Community | Join Scolect',
  description: 'Join the Scolect community of users and contributors. Together we are building the best open-source screen time tracking experience.',
  openGraph: {
    title: 'Community | Join Scolect',
    description: 'Join the Scolect community of users and contributors. Together we are building the best open-source screen time tracking experience.',
    url: 'https://scolect.com/community',
  },
  alternates: {
    canonical: '/community',
  },
};

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
