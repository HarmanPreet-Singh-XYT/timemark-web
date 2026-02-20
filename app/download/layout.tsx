import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Download Scolect | Free Screen Time Tracker',
    description: 'Download Scolect for Windows. A free, open-source, Privacy-first screen time tracker.',
    openGraph: {
        title: 'Download Scolect | Free Screen Time Tracker',
        description: 'Download Scolect for Windows. A free, open-source, Privacy-first screen time tracker.',
        url: 'https://scolect.com/download',
    },
    alternates: {
        canonical: '/download',
    },
};

export default function DownloadLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
