import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Changelog | Scolect Updates',
  description: 'Keep track of all new features, bug fixes, and improvements in the latest versions of Scolect screen time tracker.',
  openGraph: {
    title: 'Changelog | Scolect Updates',
    description: 'Keep track of all new features, bug fixes, and improvements in the latest versions of Scolect screen time tracker.',
    url: 'https://scolect.com/changelog',
  },
  alternates: {
    canonical: '/changelog',
  },
};

export default function ChangelogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
