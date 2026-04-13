"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/components/providers/cart-provider";

export function HeaderCart() {
  const { itemCount } = useCart();

  return (
    <Link
      href="/checkout"
      className="relative inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-blue px-5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/20 transition hover:bg-brand-blue-dark"
      aria-label={`Open cart with ${itemCount} items`}
    >
      <ShoppingCart size={18} strokeWidth={2.2} />
      <span>Cart</span>
      <span className="absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-brand-red px-1 text-[11px] font-bold text-white">
        {itemCount}
      </span>
    </Link>
  );
}
