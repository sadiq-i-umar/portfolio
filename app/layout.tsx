import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Sadiq Ibrahim Umar - Software Engineer',
  description: 'Welcome to my portfolio site. Get to know me professionally',
  creator: 'Sadiq Ibrahim  Umar',
  openGraph: {
    title: 'Sadiq Ibrahim Umar - Software Engineer',
    description: 'Welcome to my portfolio site. Get to know me professionally',
    images: [
      {
        url: 'https://sadiqumar.vercel.app/profile/headshot.png',
        width: 1200,
        height: 630,
        alt: 'Preview image description',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
