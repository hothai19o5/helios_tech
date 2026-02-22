import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import { Agentation } from "agentation";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css"; // Fixed relative path since it moved into [locale]

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HeliosTech — Build Digital Products That Scale",
  description: "We engineer high-performance web, mobile, and AI solutions tailored for modern businesses ready to innovate and dominate their market.",
  openGraph: {
    title: "HeliosTech — Build Digital Products That Scale",
    description: "We engineer high-performance web, mobile, and AI solutions tailored for modern businesses ready to innovate and dominate their market.",
    type: "website",
  },
};

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
    <html lang={locale} className="dark scroll-smooth">
      <head>
        <meta name="theme-color" content="#0a0a0f" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <TooltipProvider>
            {children}
            {process.env.NODE_ENV === "development" && <Agentation />}
          </TooltipProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
