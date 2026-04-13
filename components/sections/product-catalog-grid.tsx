"use client";

import { useEffect, useRef, useState } from "react";
import { ProductRevealCard } from "@/components/product-reveal-card";
import { useCart } from "@/components/providers/cart-provider";
import type { Product } from "@/content/products";
import type { AddItemAction } from "@/lib/cart";
import { formatCurrency } from "@/lib/cart";

export function ProductCatalogGrid({ products }: { products: Product[] }) {
  const { addItem, undoAdd } = useCart();
  const [toastAction, setToastAction] = useState<AddItemAction | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleAdd = (product: Product) => {
    const action = addItem(product);
    setToastAction(action);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setToastAction(null);
      timeoutRef.current = null;
    }, 2000);
  };

  const handleUndo = () => {
    if (!toastAction) {
      return;
    }

    undoAdd(toastAction);
    setToastAction(null);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  return (
    <>
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductRevealCard
            key={product.slug}
            name={product.name}
            price={product.price === null ? "Price on request" : formatCurrency(product.price)}
            image={product.image}
            description={product.description}
            badge={product.badge}
            features={product.features}
            actionLabel="Add to Cart"
            secondaryActionLabel="Place Order"
            onAdd={() => handleAdd(product)}
            href="/checkout"
            className="w-full"
          />
        ))}
      </div>

      {toastAction ? (
        <div className="pointer-events-none fixed bottom-6 left-1/2 z-[80] w-[calc(100%-2rem)] max-w-sm -translate-x-1/2">
          <div className="pointer-events-auto flex items-center justify-between gap-4 rounded-2xl border border-brand-line bg-white/95 px-4 py-3 shadow-[0_20px_50px_rgba(16,19,26,0.18)] backdrop-blur-xl">
            <p className="text-sm font-semibold text-brand-ink">Added to cart</p>
            <button
              type="button"
              onClick={handleUndo}
              className="rounded-full bg-brand-blue px-4 py-2 text-xs font-semibold text-white transition hover:bg-brand-blue-dark"
            >
              Undo
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
