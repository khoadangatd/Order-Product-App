import { createContext } from "react";
import type { CartAction } from "./actionType";
import type { Cart } from "../../types";

interface CartContextType {
  cart: Cart;
  dispatch: React.Dispatch<CartAction>;
}

export const CartContext = createContext<CartContextType | null>(null);
