import type { Metadata } from "next";
import { Cormorant_Garamond, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.eliteeventsla.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Elite Events LA | Setting the Standard for Events in Los Angeles",
    template: "%s | Elite Events LA",
  },
  description:
    "Elite Events LA is a full-service event planning studio setting the standard for unforgettable events across Los Angeles and surrounding areas. We plan, style, and run corporate experiences, personal celebrations, and weddings with quiet care.",
  keywords: [
    "event planning California",
    "Los Angeles event planner",
    "corporate event production",
    "wedding planner California",
    "party concierge",
    "event coordination",
  ],
  authors: [{ name: "Elite Events LA" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Elite Events LA",
    title: "Elite Events LA | Setting the Standard for Events in Los Angeles",
    description:
      "Setting the standard for unforgettable events across Los Angeles and surrounding areas. Corporate experiences, personal celebrations, and weddings, planned, styled, and run with quiet care.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Events LA | Setting the Standard for Events in Los Angeles",
    description:
      "Setting the standard for unforgettable events across Los Angeles and surrounding areas. Corporate experiences, personal celebrations, and weddings, planned, styled, and run with quiet care.",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${hanken.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
