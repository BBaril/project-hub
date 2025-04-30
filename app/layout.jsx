// app/layout.jsx

import '@/styles/globals.css';
import { Merriweather, Inter } from 'next/font/google';
import Providers from '@/shared/Providers';
import Header from '@/shared/Header';
import Footer from '@/shared/Footer';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'], // Regular and Bold
  variable: '--font-merriweather',
});


export const metadata = {
  title: 'Project Hub | Bethany Baril',
  description: 'Explore the UI/UX, full-stack, and creative projects of Bethany Baril. Filter by tech and discover interactive demos.',
  openGraph: {
    title: 'Project Hub | Bethany Baril',
    description: 'Explore categorized projects, live demos, and polished UI in Bethany’s interactive coding hub.',
    url: 'https://project-hub-seven.vercel.app',
    images: [
      {
        url: '/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Bethany Baril Project Hub',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Hub | Bethany Baril',
    description: 'Explore live projects and polished design by Bethany Baril.',
    images: ['/og-preview.png'],
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>Portfolio Hub | Bethany Baril</title>
        <meta name="description" content="Explore Bethany Baril's professional portfolio hub featuring web applications, utility apps, and creative projects. UI/UX design focused. Full-stack capable." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Bethany Baril, Portfolio, UI/UX Developer, Full-Stack, Web Applications, Frontend Developer, React, Next.js, Tailwind CSS" />
        <meta property="og:title" content="Portfolio Hub | Bethany Baril" />
        <meta property="og:description" content="Explore Bethany Baril's professional portfolio hub featuring categorized projects and creative work." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourhuburlhere.com" />
        <meta property="og:image" content="https://yourhuburlhere.com/images/preview.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <body className={`${merriweather.variable} ${inter.variable} font-body bg-bbOffWhite text-bbOffBlack dark:bg-gray-900 dark:text-bbOffWhiteSoft`}>
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
