import Link from "next/link";
import { siteContent } from "@/content/site";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-brand-line bg-brand-blue-dark text-white">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold">{siteContent.brand.name}</p>
            <p className="mt-3 max-w-sm text-sm text-white/75">{siteContent.brand.tagline}</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60">Contact</p>
            <div className="mt-4 space-y-2 text-sm text-white/80">
              <p>{siteContent.brand.phone}</p>
              <p>{siteContent.brand.email}</p>
              <p>{siteContent.brand.address}</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60">Explore</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-white/80">
              <Link href="/products">Products</Link>
              <Link href="/delivery-areas">Delivery Areas</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
