import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Scolect',
    description: 'Read the privacy policy of Scolect. We believe in your privacy, keeping all data locally and never tracking your usage.',
    openGraph: {
        title: 'Privacy Policy | Scolect',
        description: 'Read the privacy policy of Scolect. We believe in your privacy, keeping all data locally and never tracking your usage.',
        url: 'https://scolect.com/privacy',
    },
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
