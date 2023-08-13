import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans, Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });
const DMSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jeffrey Chan',
  description: "Jeffrey Chan's portfolio website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Script src="https://kit.fontawesome.com/6cd17ed8fc.js" crossOrigin="anonymous"></Script>
      <body className={`${inter.className} ${DMSans.className}`}>{children}</body>
    </html>
  );
}
