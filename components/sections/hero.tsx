import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { TypedHeroTitle } from "@/components/sections/typed-hero-title";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { siteContent } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-blue-dark text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.14),_transparent_32%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(237,28,36,0.12),_transparent_36%)]" />
      <Container>
        <div className="grid min-h-[78svh] items-center gap-8 py-16 md:gap-10 md:py-24 lg:grid-cols-[1.08fr_0.92fr] xl:py-28">
          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              {siteContent.hero.eyebrow}
            </p>
            <TypedHeroTitle />
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
              {siteContent.hero.body}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <MagneticButton>
                <Link
                  href="/products"
                  className="inline-flex rounded-full bg-brand-red px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-brand-blue-dark"
                >
                  Explore Products
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="/checkout"
                  className="inline-flex rounded-full border border-white/25 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-brand-blue-dark"
                >
                  Open Cart & Checkout
                </Link>
              </MagneticButton>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.25em] text-white/55">Coverage</p>
                <p className="mt-2 text-lg font-semibold">Helderberg & Nearby</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.25em] text-white/55">Service</p>
                <p className="mt-2 text-lg font-semibold">Homes & Business</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.25em] text-white/55">Ordering</p>
                <p className="mt-2 text-lg font-semibold">Web + WhatsApp</p>
              </div>
            </div>
          </div>
          <div className="relative z-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 shadow-premium backdrop-blur">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/hero/oscargas-landing-burner.jpg"
                alt="Oscargas gas burner hero image"
                fill
                className="object-contain bg-white p-4 sm:p-6"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(8,10,23,0.02),_rgba(8,10,23,0.28))]" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 backdrop-blur">
                  Premium LPG Delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
