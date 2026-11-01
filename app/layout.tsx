import type { Metadata } from 'next';
import './globals.css';
import JsonLdGraph from '@/components/seo/JsonLdGraph';

export const metadata: Metadata = {
  metadataBase: new URL('https://180math.com'),
  title: {
    default: '180 Math — Premier Mathematics Mentorship & Diagnostic Engine',
    template: '%s | 180 Math',
  },
  description:
    '180 Math: Master math, one degree at a time. First-principles mathematics mentorship, diagnostic test engines, and AP/AMC/SAT curriculum in South Windsor, CT led by Jyothi Kosur.',
  keywords: [
    'South Windsor math tutoring',
    'TEMS math placement',
    'South Windsor High School AP Calculus',
    'Digital SAT Math South Windsor',
    'Jyothi Kosur math mentorship',
    'accelerated math middle school CT',
    'first principles math education'
  ],
  authors: [{ name: 'Jyothi Kosur', url: 'https://180math.com/#jyothi-kosur' }],
  creator: 'Jyothi Kosur',
  publisher: '180 Math',
  alternates: {
    canonical: 'https://180math.com',
  },
  openGraph: {
    title: '180 Math — Premier Mathematics Mentorship & Diagnostic Engine',
    description:
      'Personalized math mentorship & diagnostic evaluation engine in South Windsor, CT led by Jyothi Kosur. Small cohorts, deep conceptual intuition.',
    url: 'https://180math.com',
    siteName: '180 Math',
    images: [
      {
        url: 'https://180math.com/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: '180 Math — Premier Mathematics Mentorship & Diagnostic Engine',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '180 Math — Premier Mathematics Mentorship & Diagnostic Engine',
    description:
      'Personalized math mentorship & diagnostic evaluation engine in South Windsor, CT led by Jyothi Kosur.',
    images: ['https://180math.com/opengraph-image.png'],
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  other: {
    'theme-color': '#0B0B33',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300..800&family=Newsreader:ital,opsz,wght@0,6..72,300..700;1,6..72,300..700&family=Spline+Sans+Mono:ital,wght@0,300..700;1,300..700&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com"></script>
        <JsonLdGraph />
      </head>
      <body className="bg-[#0B0B33] text-[#FAF5E8] font-serif min-h-screen selection:bg-[#E5BE85] selection:text-[#0B0B33] antialiased">
        {children}
      </body>
    </html>
  );
}
