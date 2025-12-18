import type { Product } from "../../types";

export enum CartActionType {
  ADD_TO_CART,
  DELETE_CART,
  UPDATE_CART,
}

export type CartAction =
  | { type: CartActionType.ADD_TO_CART; payload: Product }
  | { type: CartActionType.DELETE_CART; payload: { id: number } }
  | {
      type: CartActionType.UPDATE_CART;
      payload: { id: number; quantity: number };
    };
