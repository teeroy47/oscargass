"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Product } from "@/content/products";
import type { AddItemAction, CartItem } from "@/lib/cart";

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addItem: (product: Product) => AddItemAction;
  undoAdd: (action: AddItemAction) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "oscargas-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setItems(JSON.parse(stored) as CartItem[]);
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const value = useMemo(() => {
    const addItem = (product: Product) => {
      const existing = items.find((item) => item.id === product.slug);
      const previousQuantity = existing?.quantity ?? 0;

      setItems((current) => {
        const currentItem = current.find((item) => item.id === product.slug);
        if (currentItem) {
          return current.map((item) =>
            item.id === product.slug ? { ...item, quantity: item.quantity + 1 } : item
          );
        }

        return [
          ...current,
          {
            id: product.slug,
            name: product.name,
            image: product.image,
            price: product.price,
            priceLabel: product.price === null ? "Price on request" : undefined,
            quantity: 1,
            badge: product.badge
          }
        ];
      });

      return {
        id: product.slug,
        previousQuantity
      };
    };

    const undoAdd = (action: AddItemAction) => {
      setItems((current) =>
        current
          .map((item) => {
            if (item.id !== action.id) {
              return item;
            }

            return {
              ...item,
              quantity: action.previousQuantity
            };
          })
          .filter((item) => item.quantity > 0)
      );
    };

    const updateQuantity = (id: string, quantity: number) => {
      setItems((current) =>
        current
          .map((item) => (item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item))
          .filter((item) => item.quantity > 0)
      );
    };

    const removeItem = (id: string) => {
      setItems((current) => current.filter((item) => item.id !== id));
    };

    const clearCart = () => setItems([]);
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce((sum, item) => sum + (item.price ?? 0) * item.quantity, 0);

    return {
      items,
      itemCount,
      subtotal,
      addItem,
      undoAdd,
      updateQuantity,
      removeItem,
      clearCart
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
