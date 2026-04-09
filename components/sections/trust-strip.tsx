import { ShieldCheck, Truck, Waypoints } from "lucide-react";
import { Container } from "@/components/layout/container";

const points = [
  {
    label: "Reliable local LPG delivery",
    icon: Truck
  },
  {
    label: "Professional household and business supply",
    icon: ShieldCheck
  },
  {
    label: "Clear ordering paths via web and WhatsApp",
    icon: Waypoints
  }
];

export function TrustStrip() {
  return (
    <section className="border-y border-brand-line bg-white">
      <Container>
        <div className="grid gap-4 py-6 md:grid-cols-3">
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.label} className="flex items-center gap-3">
                <div className="rounded-2xl bg-brand-surface p-3 text-brand-blue">
                  <Icon size={18} />
                </div>
                <p className="text-sm font-medium text-brand-ink">{point.label}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
