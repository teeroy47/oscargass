import { products } from "@/content/products";

export type CatalogProduct = (typeof products)[number];

export type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number | null;
  priceLabel?: string;
  quantity: number;
  badge?: string;
};

export type AddItemAction = {
  id: string;
  previousQuantity: number;
};

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0
  }).format(amount);
}
