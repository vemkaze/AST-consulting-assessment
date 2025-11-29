import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LiveHindustan Clone - Hindi News Portal",
  description: "देश-विदेश की ताजा खबरें, राजनीति, खेल, मनोरंजन और बिज़नेस न्यूज - LiveHindustan Clone",
  keywords: "Hindi News, Breaking News, India News, Sports, Entertainment, Business",
  authors: [{ name: "LiveHindustan Clone" }],
  openGraph: {
    title: "LiveHindustan Clone - Hindi News Portal",
    description: "देश-विदेश की ताजा खबरें, राजनीति, खेल, मनोरंजन और बिज़नेस न्यूज",
    type: "website",
    locale: "hi_IN",
    siteName: "LiveHindustan Clone",
  },
  twitter: {
    card: "summary_large_image",
    title: "LiveHindustan Clone",
    description: "देश-विदेश की ताजा खबरें",
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
    <html lang="hi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
