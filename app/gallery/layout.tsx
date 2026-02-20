import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Scolect Screenshots',
  description: "View screenshots and see Scolect's beautiful, modern interface in action. Real-time stats, dynamic reports, and more.",
  openGraph: {
    title: 'Gallery | Scolect Screenshots',
    description: "View screenshots and see Scolect's beautiful, modern interface in action. Real-time stats, dynamic reports, and more.",
    url: 'https://scolect.com/gallery',
  },
  alternates: {
    canonical: '/gallery',
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
