import Link from "next/link";
import { MapPinned } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { deliveryAreas } from "@/content/areas";

export function ServiceAreas() {
  return (
    <section className="bg-brand-surface py-16 md:py-24 xl:py-28">
      <Container>
        <SectionHeading
          eyebrow="Delivery Areas"
          title="Service coverage designed around the Helderberg region."
          body="A simple, clear coverage experience now with room for richer delivery logic later."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {deliveryAreas.map((area) => (
            <div
              key={area}
              className="rounded-3xl border border-brand-line bg-white px-5 py-6 text-center font-semibold text-brand-ink shadow-sm"
            >
              <MapPinned size={18} className="mx-auto mb-3 text-brand-red" />
              {area}
            </div>
          ))}
        </div>
        <Link href="/delivery-areas" className="mt-8 inline-flex text-sm font-semibold text-brand-blue">
          View full delivery coverage
        </Link>
      </Container>
    </section>
  );
}
