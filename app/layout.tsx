import "./globals.css";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    default: "Oscargas Helderberg",
    template: "%s | Oscargas Helderberg"
  },
  description: "Premium LPG gas delivery and supply in Helderberg.",
  openGraph: {
    title: "Oscargas Helderberg",
    description: "Premium LPG gas delivery and supply in Helderberg.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="min-h-screen bg-white text-brand-ink antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
