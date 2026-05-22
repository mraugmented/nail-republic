import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${siteConfig.businessNameFull} | Luxury Home Remodeling in ${siteConfig.region}`,
  description: `${siteConfig.businessNameFull} brings ${siteConfig.yearsExperience} years of luxury home remodeling craftsmanship to ${siteConfig.region}. Kitchen renovations, bathroom remodels, home additions, and custom construction in ${siteConfig.city}, Beverly Hills, Pacific Palisades, and beyond.`,
  keywords: `luxury remodeling, home renovation, kitchen remodel, bathroom remodel, ${siteConfig.region} contractor, ${siteConfig.city}, Beverly Hills, Pacific Palisades`,
  openGraph: {
    title: `${siteConfig.businessNameFull} | Luxury Home Remodeling in ${siteConfig.region}`,
    description: `${siteConfig.yearsExperience} years of luxury home remodeling craftsmanship serving ${siteConfig.regionFull}. Kitchen renovations, bathroom remodels, home additions, and custom construction.`,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.businessNameFull,
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
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
