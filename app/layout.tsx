import type { Metadata } from "next";
import { Geist, Geist_Mono, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://temankode.wahyupuji.com'),
  title: {
    default: 'TemanKode',
    template: '%s | TemanKode',
  },
  description: 'TemanKode - Tech Blog & Developer Community. Learn modern web development with tutorials, tips & tricks, and coding resources.',
  keywords: ['programming', 'web development', 'tutorial', 'coding', 'developer', 'javascript', 'typescript', 'react', 'nextjs'],
  authors: [{ name: 'TemanKode' }],
  creator: 'TemanKode',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: 'TemanKode',
    title: 'TemanKode - Tech Blog & Developer Community',
    description: 'Learn modern web development with tutorials, tips & tricks, and coding resources.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TemanKode - Tech Blog & Developer Community',
    description: 'Learn modern web development with tutorials, tips & tricks, and coding resources.',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'Luy1pqvTqIwDAnsI913QUkRPrLbPSQDFIXY8C2Yg9ck',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${firaCode.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
