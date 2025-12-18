import type { Product } from "./product";

export interface Cart {
  items: CartItem[];
}

export type CartItem = Product & { quantity: number };
