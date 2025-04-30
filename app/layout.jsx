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
  description: 'Explore Bethany Baril’s full-stack and UI/UX projects: web apps, desktop tools, and creative showcases.',
  openGraph: {
    title: 'Project Hub | Bethany Baril',
    description: 'Live demos and real work — explore projects by category and tag.',
    images: ['/og-preview.png'], // optional
  },
}


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
