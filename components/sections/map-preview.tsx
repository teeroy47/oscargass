import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteContent } from "@/content/site";

export function MapPreview() {
  return (
    <section className="py-16 md:py-24 xl:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Location"
            title="Find Oscargas quickly and contact the team directly."
            body={siteContent.brand.address}
          />
          <div className="overflow-hidden rounded-4xl border border-brand-line bg-white shadow-premium">
            <iframe
              title="Oscargas location map"
              src={siteContent.map.embedUrl}
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-red">
          Open the full contact page
          <ArrowUpRight size={16} />
        </Link>
      </Container>
    </section>
  );
}
