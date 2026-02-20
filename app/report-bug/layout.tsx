import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Report a Bug | Scolect',
    description: 'Found a bug in Scolect? Report it here so we can fix it and improve our open-source screen time tracker.',
    openGraph: {
        title: 'Report a Bug | Scolect',
        description: 'Found a bug in Scolect? Report it here so we can fix it and improve our open-source screen time tracker.',
        url: 'https://scolect.com/report-bug',
    },
  alternates: {
    canonical: '/report-bug',
  },
};

export default function ReportBugLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
