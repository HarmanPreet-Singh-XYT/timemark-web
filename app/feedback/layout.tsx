import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Feedback | Improve Scolect',
  description: 'We value your opinion. Send feedback or suggest new features to help make Scolect the best free screen time tracker.',
  openGraph: {
    title: 'Feedback | Improve Scolect',
    description: 'We value your opinion. Send feedback or suggest new features to help make Scolect the best free screen time tracker.',
    url: 'https://scolect.com/feedback',
  },
  alternates: {
    canonical: '/feedback',
  },
};

export default function FeedbackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
