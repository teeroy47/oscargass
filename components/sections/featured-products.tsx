import { Container } from "@/components/layout/container";
import { ProductCatalogGrid } from "@/components/sections/product-catalog-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { products } from "@/content/products";

export function FeaturedProducts() {
  return (
    <section className="py-16 md:py-24 xl:py-28">
      <Container>
        <SectionHeading
          eyebrow="Products"
          title="Cylinder sizes structured for home and commercial demand."
          body="A premium presentation today, with a component model ready for deeper ecommerce tomorrow."
        />
        <ProductCatalogGrid products={products.filter((product) => product.featured)} />
      </Container>
    </section>
  );
}
