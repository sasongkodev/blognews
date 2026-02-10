import type { Metadata } from "next";
import { Geist, Geist_Mono, Fira_Code } from "next/font/google";
import Script from "next/script";
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
      </body>
    </html>
  );
}
