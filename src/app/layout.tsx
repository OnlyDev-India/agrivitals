import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "../providers/ThemeProvider";
import { siteConfig } from "@/config/site";
import type { Metadata, Viewport } from "next";
import Topbar from "@/components/common/topbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: keyof typeof siteConfig.mainTitle }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";
  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: {
      default: siteConfig.mainTitle[locale],
      template: `%s | ${siteConfig.mainTitle[locale]}`,
    },
    description: siteConfig.mainDescription[locale],
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.company.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: siteConfig.mainTitle[locale],
      description: siteConfig.mainDescription[locale],
      url: siteConfig.siteUrl,
      siteName: siteConfig.company.name,
      images: [
        {
          url: siteConfig.socialBanner,
          width: 1200,
          height: 630,
          alt: "Agrivitals Solar Dryer for Farmers",
        },
      ],
      locale,
      type: "website",
    },
    alternates: {
      canonical: "/",
      types: {
        "application/rss+xml": `${siteConfig.siteUrl}/feed.xml`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      card: siteConfig.twitter.card,
      title: siteConfig.mainTitle[locale],
      description: siteConfig.mainDescription[locale],
      images: [siteConfig.socialBanner],
      creator: siteConfig.twitter.handle,
      site: siteConfig.twitter.handle,
    },
    other: {
      "application-name": siteConfig.company.name,
      "apple-mobile-web-app-title": siteConfig.company.name,
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "default",
      "mobile-web-app-capable": "yes",
      "msapplication-TileColor": siteConfig.themeColor,
      "msapplication-config": "/browserconfig.xml",
    },
  };
}

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <Topbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
