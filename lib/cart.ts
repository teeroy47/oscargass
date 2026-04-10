import { products } from "@/content/products";

export type CatalogProduct = (typeof products)[number];

export type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  sizeKg: number;
};

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0
  }).format(amount);
}
