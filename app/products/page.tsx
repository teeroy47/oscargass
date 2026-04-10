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
          title="Browse the current Oscargas cylinder range."
          body="Every cylinder card now supports reveal interactions, add-to-cart behavior, and a direct path into checkout."
        />
        <ProductCatalogGrid products={products} />
      </Container>
    </main>
  );
}
