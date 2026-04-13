import { Container } from "@/components/layout/container";
import { ProductCatalogGrid } from "@/components/sections/product-catalog-grid";
import { products } from "@/content/products";
import { SectionHeading } from "@/components/ui/section-heading";

export default function ProductsPage() {
  return (
    <main className="py-16 md:py-24 xl:py-28">
      <Container>
        <SectionHeading
          eyebrow="Products"
          title="Browse the full Oscargas product catalogue."
          body="This catalogue now includes cylinders, burners, regulators, hoses, heaters, lighters, valves, and related gas accessories with direct add-to-cart actions."
        />
        <ProductCatalogGrid products={products} />
      </Container>
    </main>
  );
}
