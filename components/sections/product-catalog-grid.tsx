"use client";

import { ProductRevealCard } from "@/components/product-reveal-card";
import { useCart } from "@/components/providers/cart-provider";
import type { Product } from "@/content/products";

export function ProductCatalogGrid({ products }: { products: Product[] }) {
  const { addItem } = useCart();

  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductRevealCard
          key={product.slug}
          name={product.name}
          price={`R${product.price}`}
          image={product.image}
          description={product.description}
          reviewCount={product.sizeKg * 3}
          rating={4.9}
          badge={`${product.sizeKg}kg`}
          features={product.features}
          actionLabel="Add to Cart"
          secondaryActionLabel="Checkout"
          onAdd={() => addItem(product)}
          href="/checkout"
          className="w-full"
        />
      ))}
    </div>
  );
}
