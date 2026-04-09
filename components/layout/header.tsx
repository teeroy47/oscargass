import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/content/site";
import { MobileMenu } from "./mobile-menu";
import { Container } from "./container";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/delivery-areas", label: "Delivery Areas" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-line/70 bg-white/90 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo/oscargas-logo.jpg"
              alt={`${siteContent.brand.name} logo`}
              width={180}
              height={72}
              className="h-auto w-[132px] sm:w-[156px]"
              priority
            />
          </Link>
          <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-brand-ink transition hover:text-brand-red">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Link
              href={`https://wa.me/${siteContent.brand.whatsappNumber}`}
              className="rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue"
            >
              Order on WhatsApp
            </Link>
          </div>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
