"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Minus, Plus, ShoppingCart, X, CircleAlert, Check } from "lucide-react";
import type { Product } from "@/content/products";
import { formatCurrency } from "@/lib/cart";

type CylinderChoice = "has-cylinder" | "needs-cylinder";

type AddToCartModalProps = {
  product: Product | null;
  open: boolean;
  onClose: () => void;
  onConfirm: (config: { product: Product; quantity: number; cylinderChoice?: CylinderChoice }) => void;
};

export function AddToCartModal({ product, open, onClose, onConfirm }: AddToCartModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [cylinderChoice, setCylinderChoice] = useState<CylinderChoice>("has-cylinder");

  useEffect(() => {
    if (!open) {
      return;
    }

    setQuantity(1);
    setCylinderChoice("has-cylinder");
  }, [open, product]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, open]);

  const pricePerItem = useMemo(() => {
    if (!product || product.price === null) {
      return product?.price ?? null;
    }

    if (product.cylinderOption && cylinderChoice === "needs-cylinder") {
      return product.price + product.cylinderOption.noCylinderSurcharge;
    }

    return product.price;
  }, [cylinderChoice, product]);

  const totalPrice = pricePerItem === null ? null : pricePerItem * quantity;

  if (!open || !product) {
    return null;
  }

  const imageSrc =
    product.image.startsWith("/") && !product.image.startsWith("//")
      ? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${product.image}`
      : product.image;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-[#0b0c1f]/70 px-3 py-3 sm:px-4 sm:py-8 backdrop-blur-sm">
      <div className="relative flex max-h-[calc(100svh-1.5rem)] w-full max-w-lg flex-col overflow-hidden rounded-[1.6rem] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.24)] sm:max-h-[calc(100svh-4rem)] sm:rounded-[2rem]">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-line bg-white/90 text-brand-muted transition hover:border-brand-blue hover:text-brand-blue sm:right-5 sm:top-5"
          aria-label="Close add to cart"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex-1 overflow-y-auto px-5 pb-5 pt-6 sm:px-8 sm:pb-8 sm:pt-8">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-brand-surface sm:h-24 sm:w-24 sm:rounded-3xl">
              <Image src={imageSrc} alt={product.name} fill className="object-contain p-2 sm:p-3" sizes="(max-width: 640px) 64px, 96px" />
            </div>
            <div className="min-w-0 pr-10 sm:pr-12">
              <p className="text-2xl font-bold tracking-tight text-brand-blue sm:text-3xl">{product.badge ?? product.name}</p>
              <p className="mt-1 text-base text-brand-muted sm:text-lg">{product.name}</p>
              <p className="mt-2 text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
                {totalPrice === null ? "Price on request" : formatCurrency(totalPrice)}
              </p>
            </div>
          </div>

          <div className="mt-6 sm:mt-8">
            <p className="text-base font-semibold text-brand-ink sm:text-lg">Quantity</p>
            <div className="mt-3 flex items-center gap-4 sm:mt-4">
              <button
                type="button"
                onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-surface text-brand-ink transition hover:bg-[#e8eef8] sm:h-14 sm:w-14"
              >
                <Minus className="h-5 w-5" />
              </button>
              <span className="inline-flex min-w-10 items-center justify-center text-3xl font-bold text-brand-ink sm:text-4xl">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((current) => current + 1)}
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-surface text-brand-ink transition hover:bg-[#e8eef8] sm:h-14 sm:w-14"
              >
                <Plus className="h-5 w-5" />
              </button>
            </div>
          </div>

          {product.cylinderOption ? (
            <div className="mt-6 sm:mt-8">
              <p className="text-base font-semibold text-brand-ink sm:text-lg">Do you have a gas cylinder to exchange?</p>
              <p className="mt-2 text-sm text-brand-muted">
                We accept: {product.cylinderOption.acceptedBrands.join(", ")}
              </p>
              <div className="mt-4 grid gap-3 sm:mt-5 sm:gap-4 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setCylinderChoice("has-cylinder")}
                  className={`rounded-[1.35rem] border px-4 py-4 text-left transition sm:rounded-[1.6rem] sm:px-5 sm:py-5 ${
                    cylinderChoice === "has-cylinder"
                      ? "border-brand-blue bg-brand-blue/5 shadow-[0_18px_40px_rgba(43,46,155,0.12)]"
                      : "border-brand-line bg-white hover:border-brand-blue/40"
                  }`}
                >
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-surface text-brand-blue">
                    <Check className="h-5 w-5" />
                  </div>
                  <p className="mt-3 text-base font-semibold text-brand-ink sm:mt-4 sm:text-lg">Yes, I have one</p>
                  <p className="mt-1 text-sm text-brand-muted">No extra charge</p>
                </button>
                <button
                  type="button"
                  onClick={() => setCylinderChoice("needs-cylinder")}
                  className={`rounded-[1.35rem] border px-4 py-4 text-left transition sm:rounded-[1.6rem] sm:px-5 sm:py-5 ${
                    cylinderChoice === "needs-cylinder"
                      ? "border-brand-blue bg-brand-blue/5 shadow-[0_18px_40px_rgba(43,46,155,0.12)]"
                      : "border-brand-line bg-white hover:border-brand-blue/40"
                  }`}
                >
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-surface text-brand-blue">
                    <CircleAlert className="h-5 w-5" />
                  </div>
                  <p className="mt-3 text-base font-semibold text-brand-ink sm:mt-4 sm:text-lg">No, I need one</p>
                  <p className="mt-1 text-sm text-brand-muted">
                    +{formatCurrency(product.cylinderOption.noCylinderSurcharge)} each
                  </p>
                </button>
              </div>
            </div>
          ) : null}
        </div>

        <div className="border-t border-brand-line/70 bg-white px-5 py-4 sm:px-8 sm:py-5">
          <button
            type="button"
            onClick={() => onConfirm({ product, quantity, cylinderChoice: product.cylinderOption ? cylinderChoice : undefined })}
            className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-brand-blue px-6 py-3.5 text-base font-semibold text-white transition hover:bg-brand-blue-dark sm:py-4"
          >
            <ShoppingCart className="h-5 w-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
