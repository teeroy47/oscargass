"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/components/providers/cart-provider";

export function HeaderCart() {
  const { itemCount } = useCart();

  return (
    <Link
      href="/checkout"
      className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-line bg-white text-brand-blue transition hover:border-brand-blue hover:text-brand-red"
      aria-label={`Open cart with ${itemCount} items`}
    >
      <ShoppingBag size={18} />
      <span className="absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-brand-red px-1 text-[11px] font-bold text-white">
        {itemCount}
      </span>
    </Link>
  );
}
