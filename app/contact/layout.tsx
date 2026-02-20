import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Scolect Support',
  description: 'Get in touch with the Scolect team. Ask questions, report bugs, or share your feedback about our open-source software.',
  openGraph: {
    title: 'Contact Us | Scolect Support',
    description: 'Get in touch with the Scolect team. Ask questions, report bugs, or share your feedback about our open-source software.',
    url: 'https://scolect.com/contact',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
