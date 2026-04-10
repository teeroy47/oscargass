"use client";

import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollShowcase() {
  return (
    <section className="bg-white py-8 md:py-12">
      <ContainerScroll
        titleComponent={
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-red">Premium Delivery Experience</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-ink md:text-5xl">
              A sharper visual experience across mobile, tablet, and desktop.
            </h2>
          </div>
        }
      >
        <Image
          src="/images/hero/oscargas-hero.jpg"
          alt="Oscargas hero flame"
          width={1365}
          height={768}
          className="h-full w-full object-cover"
        />
      </ContainerScroll>
    </section>
  );
}
