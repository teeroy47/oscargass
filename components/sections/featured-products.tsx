import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
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
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products
            .filter((product) => product.featured)
            .map((product, index) => (
              <article key={product.slug} className="rounded-4xl border border-brand-line bg-white p-6 shadow-premium">
                <div
                  className="aspect-[4/3] rounded-3xl border border-brand-line bg-brand-surface"
                  style={{
                    backgroundImage:
                      index % 2 === 0
                        ? "linear-gradient(135deg, rgba(43,46,155,0.18), rgba(255,255,255,0.6))"
                        : "linear-gradient(135deg, rgba(237,28,36,0.16), rgba(255,255,255,0.6))"
                  }}
                />
                <div className="mt-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-red">
                    {product.sizeKg}kg
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-brand-ink">{product.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-brand-muted">{product.summary}</p>
                  <p className="mt-4 text-sm font-medium text-brand-blue">{product.useCase}</p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-red"
                  >
                    Request This Size
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
        </div>
      </Container>
    </section>
  );
}
