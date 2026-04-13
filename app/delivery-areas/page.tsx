import { MapPinned } from "lucide-react";
import { Container } from "@/components/layout/container";
import { deliveryAreas } from "@/content/areas";
import { SectionHeading } from "@/components/ui/section-heading";

export default function DeliveryAreasPage() {
  return (
    <main className="py-16 md:py-24 xl:py-28">
      <Container>
        <SectionHeading
          eyebrow="Delivery Areas"
          title="Coverage focused on fast, reliable Helderberg service."
          body="Oscargas serves core local areas first, with enquiry pathways for additional requests."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {deliveryAreas.map((area) => (
            <div key={area} className="rounded-3xl border border-brand-line bg-white px-6 py-8 shadow-premium">
              <MapPinned size={18} className="mb-4 text-brand-red" />
              <p className="text-xl font-semibold text-brand-ink">{area}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-7 text-brand-muted">
          We also deliver outside of these areas on request.
        </p>
      </Container>
    </main>
  );
}
