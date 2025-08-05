import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AOSInit from '@/components/AOSInit';

export const metadata: Metadata = {
  title: 'Citrinitas Therapies | Barnabas Kinge - Psychotherapist',
  description: 'A welcoming, inspired, and hopeful environment for clients to find clarity, joy, and wisdom.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-dvh">
        <AOSInit />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      </body>
    </html>
  );
}
