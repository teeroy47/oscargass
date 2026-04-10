import Image from "next/image";
import Link from "next/link";
import { CircleHelp, House, Mail, MapPinned, Package2 } from "lucide-react";
import { siteContent } from "@/content/site";
import { HeaderCart } from "./header-cart";
import { WhatsAppOrderButton } from "./whatsapp-order-button";
import { MobileMenu } from "./mobile-menu";
import { Container } from "./container";

const navItems = [
  { href: "/", label: "Home", icon: House },
  { href: "/about", label: "About", icon: CircleHelp },
  { href: "/products", label: "Products", icon: Package2 },
  { href: "/delivery-areas", label: "Delivery Areas", icon: MapPinned },
  { href: "/contact", label: "Contact", icon: Mail }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0c1f]/88 backdrop-blur-xl">
      <Container>
        <div className="flex h-24 items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-center">
            <div className="relative flex h-[72px] w-[88px] items-center justify-center overflow-hidden rounded-sm bg-white shadow-lg shadow-black/10 sm:h-[78px] sm:w-[96px]">
              <Image
                src="/images/logo/oscargas-logo.jpg"
                alt={`${siteContent.brand.name} logo`}
                fill
                className="object-contain p-1"
                sizes="96px"
                priority
              />
            </div>
          </Link>
          <nav className="hidden items-center justify-center rounded-full bg-white px-8 py-3 text-brand-ink shadow-[0_20px_50px_rgba(0,0,0,0.15)] lg:flex xl:px-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:text-brand-blue xl:px-5"
              >
                <item.icon size={17} className="text-slate-500" />
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <HeaderCart />
            <WhatsAppOrderButton />
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <HeaderCart />
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
