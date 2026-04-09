"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteContent } from "@/content/site";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/delivery-areas", label: "Delivery Areas" },
  { href: "/contact", label: "Contact" }
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="rounded-full border border-brand-line bg-white p-3 text-brand-blue"
        aria-label="Toggle navigation"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      {open ? (
        <div className="absolute inset-x-0 top-20 border-b border-brand-line bg-white/95 px-4 py-6 shadow-premium backdrop-blur-xl">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm font-medium">
                {item.label}
              </Link>
            ))}
            <Link
              href={`https://wa.me/${siteContent.brand.whatsappNumber}`}
              onClick={() => setOpen(false)}
              className="rounded-full bg-brand-red px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Order on WhatsApp
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
