"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ProductCatalogGrid } from "@/components/sections/product-catalog-grid";
import { Input } from "@/components/ui/input";
import { products } from "@/content/products";
import { SectionHeading } from "@/components/ui/section-heading";

export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const filteredProducts = useMemo(() => {
    const normalize = (value: string) =>
      value
        .toLowerCase()
        .replace(/(\d+)\s*kg/g, "$1 kg")
        .replace(/[^a-z0-9]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();

    const normalizedQuery = normalize(query);

    if (!normalizedQuery) {
      return products;
    }

    const queryTokens = normalizedQuery.split(" ");

    return products.filter((product) => {
      const searchableText = normalize(
        [
          product.name,
          product.summary,
          product.badge,
          product.useCase,
          product.description,
          product.features.join(" "),
          product.cylinderOption ? `${product.cylinderOption.sizeKg}kg cylinder exchange` : "",
          product.name.replace(/kg/gi, " kg ")
        ]
          .filter(Boolean)
          .join(" ")
      );

      return queryTokens.every((token) => searchableText.includes(token));
    });
  }, [query]);

  return (
    <main className="py-16 md:py-24 xl:py-28">
      <Container>
        <SectionHeading
          eyebrow="Products"
          title="Browse the full Oscargas product catalogue."
          body="This catalogue now includes cylinders, burners, regulators, hoses, heaters, lighters, valves, and related gas accessories with direct add-to-cart actions."
        />
        <div className="mt-10 rounded-[1.75rem] border border-brand-line bg-white p-3 shadow-[0_18px_50px_rgba(16,19,26,0.08)]">
          <div className="flex items-center gap-3 rounded-[1.25rem] bg-brand-surface px-4 py-3">
            <Search className="h-5 w-5 text-brand-muted" />
            <Input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search products by name, size, or use case"
              className="h-auto border-0 bg-transparent px-0 py-0 text-sm shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </div>
        <ProductCatalogGrid products={filteredProducts} />
      </Container>
    </main>
  );
}
