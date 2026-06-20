import type { Metadata } from 'next';
import './globals.css';
import { site } from '@/src/data/site';

export const metadata: Metadata = {
  title: site.meta.title,
  description: site.meta.description,
  keywords: [...site.meta.keywords],
  metadataBase: new URL(site.meta.url),
  icons: {
    icon: site.meta.icon,
  },
  openGraph: {
    title: site.meta.title,
    description: site.meta.description,
    url: site.meta.url,
    siteName: site.clinic.name,
    locale: 'ja_JP',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
