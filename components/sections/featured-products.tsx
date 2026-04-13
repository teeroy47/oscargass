import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ProductCatalogGrid } from "@/components/sections/product-catalog-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { products } from "@/content/products";

export function FeaturedProducts() {
  const featuredCylinderSlugs = [
    "5kg-gas-and-cylinder-exchange",
    "9kg-gas-and-cylinder-exchange",
    "14kg-gas-and-cylinder-exchange"
  ];

  const featuredCylinders = featuredCylinderSlugs
    .map((slug) => products.find((product) => product.slug === slug))
    .filter((product) => product !== undefined);

  return (
    <section className="py-16 md:py-24 xl:py-28">
      <Container>
        <SectionHeading
          eyebrow="Products"
          title="Cylinder sizes structured for home and commercial demand."
          body="A premium presentation today, with a component model ready for deeper ecommerce tomorrow."
        />
        <ProductCatalogGrid products={featuredCylinders} />
        <div className="mt-10 flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center rounded-full border border-brand-blue/20 bg-brand-blue px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(43,46,155,0.22)] transition hover:bg-brand-blue-dark"
          >
            Explore all products
          </Link>
        </div>
      </Container>
    </section>
  );
}
