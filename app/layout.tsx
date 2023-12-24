import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '/components/Navigation';
import Footer from '/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home | Agway Investments Limited',
  description: 'Made by Israel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f3f5f8] overflow-x-hidden w-full`}>
        <Navigation />
        {children}
        <Footer className={undefined} />
        </body>
    </html>
  );
}
