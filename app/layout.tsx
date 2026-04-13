import "./globals.css";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { CartProvider } from "@/components/providers/cart-provider";
import { RouteProgress } from "@/components/providers/route-progress";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: {
    default: "Oscargas Helderberg",
    template: "%s | Oscargas Helderberg"
  },
  description: "Premium LPG gas delivery and supply in Helderberg.",
  icons: {
    icon: `${basePath}/icon.jpg`,
    shortcut: `${basePath}/icon.jpg`,
    apple: `${basePath}/icon.jpg`
  },
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
        <CartProvider>
          <RouteProgress />
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
