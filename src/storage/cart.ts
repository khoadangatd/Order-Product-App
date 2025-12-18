import { initialState } from "../stores/cart/reducer";
import type { Cart } from "../types";

const CART_STORAGE_KEY = "cart";

export const cartStorage = {
  get: (): Cart => {
    const data = localStorage.getItem(CART_STORAGE_KEY);

    return JSON.parse(data || JSON.stringify(initialState));
  },
  set: (data: Cart) => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(data));
  },
};
