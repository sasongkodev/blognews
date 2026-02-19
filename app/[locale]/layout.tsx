import type { Metadata } from "next";
import { Geist, Geist_Mono, Fira_Code } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/components/Footer";
import { config as siteConfig } from "@/lib/config";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

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
  description: 'TemanKode - Blog Teknologi & Komunitas Developer. Belajar pengembangan web modern dengan tutorial, tips & trik, dan sumber daya koding.',
  keywords: ['pemrograman', 'pengembangan web', 'tutorial', 'koding', 'developer', 'javascript', 'typescript', 'react', 'nextjs'],
  authors: [{ name: 'TemanKode' }],
  creator: 'TemanKode',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: 'TemanKode',
    title: 'TemanKode - Blog Teknologi & Komunitas Developer',
    description: 'Belajar pengembangan web modern dengan tutorial, tips & trik, dan sumber daya koding.',
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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${firaCode.variable} antialiased`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-SLS8BNEPBK"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-SLS8BNEPBK');
            `}
          </Script>
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NDGML7NF');
            `}
          </Script>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-NDGML7NF"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
