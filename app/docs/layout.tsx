import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Documentation | Scolect Guide',
  description: 'Read the official documentation for Scolect. Learn how to install, configure, and make the most out of your digital life.',
  openGraph: {
    title: 'Documentation | Scolect Guide',
    description: 'Read the official documentation for Scolect. Learn how to install, configure, and make the most out of your digital life.',
    url: 'https://scolect.com/docs',
  },
  alternates: {
    canonical: '/docs',
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
