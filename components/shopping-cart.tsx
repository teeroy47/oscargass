"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, ShoppingCart as ShoppingCartIcon, Trash2 } from "lucide-react";
import type { CartItem } from "@/lib/cart";
import { formatCurrency } from "@/lib/cart";
import { resolveStaticAssetPath } from "@/lib/assets";

interface ShoppingCartProps {
  items: CartItem[];
  onQuantityChange: (id: string, newQuantity: number) => void;
  onRemoveItem: (id: string) => void;
  checkoutHref?: string;
}

export function ShoppingCart({ items, onQuantityChange, onRemoveItem, checkoutHref }: ShoppingCartProps) {
  const subtotal = items.reduce((sum, item) => sum + (item.price ?? 0) * item.quantity, 0);
  const delivery = subtotal > 0 ? 0 : 0;
  const total = subtotal + delivery;

  return (
    <Card className="w-full rounded-4xl border-brand-line bg-white shadow-premium">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="flex items-center gap-2 text-2xl font-bold text-brand-ink">
          <ShoppingCartIcon className="h-6 w-6 text-brand-blue" />
          Your Shopping Cart
        </CardTitle>
        <span className="text-sm text-brand-muted">{items.length} line items</span>
      </CardHeader>
      <CardContent>
        {items.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-brand-line bg-brand-surface px-6 py-12 text-center text-brand-muted">
            Your cart is empty. Add an item from the{" "}
            <Link href="/products" className="font-medium text-brand-blue underline underline-offset-4 transition hover:text-brand-blue-dark">
              products page
            </Link>{" "}
            to begin checkout.
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex flex-col gap-4 rounded-3xl border border-brand-line p-4 md:flex-row md:items-center">
                <div className="relative h-24 w-full overflow-hidden rounded-2xl bg-brand-surface md:w-24">
                  <Image src={resolveStaticAssetPath(item.image)} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-brand-ink">{item.name}</h3>
                  <p className="text-sm text-brand-muted">{item.badge ?? "Product item"}</p>
                  <p className="mt-1 text-sm font-medium text-brand-blue">
                    {item.price === null ? item.priceLabel ?? "Price on request" : `${formatCurrency(item.price)} each`}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onQuantityChange(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-line text-brand-blue transition hover:border-brand-blue disabled:opacity-40"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="inline-flex min-w-10 items-center justify-center text-sm font-semibold text-brand-ink">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-line text-brand-blue transition hover:border-brand-blue"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between gap-4 md:flex-col md:items-end">
                  <p className="text-lg font-semibold text-brand-ink">
                    {item.price === null ? item.priceLabel ?? "Price on request" : formatCurrency(item.price * item.quantity)}
                  </p>
                  <button
                    type="button"
                    onClick={() => onRemoveItem(item.id)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full text-brand-red transition hover:bg-red-50"
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <Separator className="my-6 bg-brand-line" />
        <div className="grid gap-3 text-sm">
          <div className="flex justify-between">
            <span className="text-brand-muted">Subtotal</span>
            <span className="font-medium text-brand-ink">{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-brand-muted">Delivery</span>
            <span className="font-medium text-brand-ink">{delivery === 0 ? "Calculated on confirmation" : formatCurrency(delivery)}</span>
          </div>
          <Separator className="my-1 bg-brand-line" />
          <div className="flex justify-between text-lg font-bold">
            <span className="text-brand-ink">Estimated Total</span>
            <span className="text-brand-ink">{formatCurrency(total)}</span>
          </div>
        </div>
      </CardContent>
      {checkoutHref ? (
        <CardFooter className="pt-6">
          <Link
            href={checkoutHref}
            className={`inline-flex w-full items-center justify-center rounded-full bg-brand-blue px-5 py-4 text-sm font-semibold text-white transition hover:bg-brand-red ${
              items.length === 0 ? "pointer-events-none opacity-50" : ""
            }`}
          >
            Proceed to Checkout
          </Link>
        </CardFooter>
      ) : null}
    </Card>
  );
}
