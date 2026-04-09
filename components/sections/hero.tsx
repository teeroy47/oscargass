import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
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
            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-none tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
              {siteContent.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
              {siteContent.hero.body}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products"
                className="rounded-full bg-brand-red px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-brand-blue-dark"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/25 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-brand-blue-dark"
              >
                Request Delivery
              </Link>
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
              <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0.14),_rgba(255,255,255,0.03))]" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(circle_at_bottom,_rgba(237,28,36,0.22),_transparent_52%)]" />
              <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,_#1b206c_0%,_#111538_100%)]">
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-red/20 blur-3xl" />
                  <div className="absolute -left-12 bottom-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/images/logo/oscargas-logo.jpg"
                      alt="Oscargas logo"
                      width={340}
                      height={340}
                      className="h-auto w-[62%] rounded-3xl bg-white/95 p-4 shadow-premium sm:w-[56%] sm:p-6"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
