"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ShoppingCart } from "@/components/shopping-cart";
import { useCart } from "@/components/providers/cart-provider";
import { siteContent } from "@/content/site";
import { formatCurrency } from "@/lib/cart";

export function CheckoutPanel() {
  const { items, subtotal, updateQuantity, removeItem, clearCart } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const checkoutHref = useMemo(() => {
    const lines = [
      "Hello Oscargas, I would like to place this order:",
      ...items.map((item) =>
        `- ${item.name} x${item.quantity} (${item.price === null ? item.priceLabel ?? "Price on request" : formatCurrency(item.price * item.quantity)})`
      ),
      `Subtotal: ${formatCurrency(subtotal)}`,
      "",
      `Name: ${name || "Not provided"}`,
      `Phone: ${phone || "Not provided"}`,
      `Address: ${address || "Not provided"}`
    ];

    return `https://wa.me/${siteContent.brand.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [address, items, name, phone, subtotal]);

  return (
    <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
      <ShoppingCart
        items={items}
        onQuantityChange={updateQuantity}
        onRemoveItem={removeItem}
        checkoutHref={checkoutHref}
      />
      <aside className="rounded-4xl border border-brand-line bg-white p-6 shadow-premium md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-red">Checkout Details</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-ink">Complete your order request</h2>
        <p className="mt-4 text-sm leading-7 text-brand-muted">
          Fill in your delivery details, review your cart, and send the order directly to the Oscargas team on WhatsApp.
        </p>
        <div className="mt-8 grid gap-4">
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Full name"
            className="h-12 rounded-2xl border border-brand-line px-4 text-sm outline-none transition focus:border-brand-blue"
          />
          <input
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Phone number"
            className="h-12 rounded-2xl border border-brand-line px-4 text-sm outline-none transition focus:border-brand-blue"
          />
          <textarea
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            placeholder="Delivery address"
            className="min-h-32 rounded-2xl border border-brand-line px-4 py-3 text-sm outline-none transition focus:border-brand-blue"
          />
        </div>
        <div className="mt-8 rounded-3xl bg-brand-surface p-5">
          <div className="flex items-center justify-between text-sm text-brand-muted">
            <span>Subtotal</span>
            <span className="font-semibold text-brand-ink">{formatCurrency(subtotal)}</span>
          </div>
          <p className="mt-3 text-xs leading-6 text-brand-muted">
            Online payment has not been connected yet. Items marked price on request will still be included in the WhatsApp order message for manual confirmation.
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-3">
          <Link
            href={checkoutHref}
            className={`inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-4 text-sm font-semibold text-white transition hover:bg-brand-blue-dark ${
              items.length === 0 ? "pointer-events-none opacity-50" : ""
            }`}
          >
            Complete Order on WhatsApp
          </Link>
          <button
            type="button"
            onClick={clearCart}
            className="inline-flex items-center justify-center rounded-full border border-brand-line px-5 py-4 text-sm font-semibold text-brand-ink transition hover:border-brand-blue hover:text-brand-blue"
          >
            Clear Cart
          </button>
        </div>
      </aside>
    </div>
  );
}
