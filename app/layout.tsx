import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans, Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const DMSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jeffrey Chan',
  description: "Jeffrey Chan's portfolio website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${DMSans.className}`}>{children}</body>
    </html>
  );
}
