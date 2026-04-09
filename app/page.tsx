import { FeaturedProducts } from "@/components/sections/featured-products";
import { Hero } from "@/components/sections/hero";
import { MapPreview } from "@/components/sections/map-preview";
import { ServiceAreas } from "@/components/sections/service-areas";
import { TrustStrip } from "@/components/sections/trust-strip";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <FeaturedProducts />
      <ServiceAreas />
      <MapPreview />
    </main>
  );
}
