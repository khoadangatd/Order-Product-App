import type { Cart, CartItem } from "../../types";
import { CartActionType, type CartAction } from "./actionType";

export const initialState: Cart = {
  items: [],
};

export const cartReducer = (state = initialState, action: CartAction) => {
  switch (action.type) {
    case CartActionType.ADD_TO_CART: {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let newItems: CartItem[];

      if (existingItemIndex > -1) {
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        const newItem: CartItem = { ...action.payload, quantity: 1 };
        newItems = [...state.items, newItem];
      }

      return {
        items: newItems,
      };
    }
    case CartActionType.DELETE_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload?.id),
      };
    case CartActionType.UPDATE_CART:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload?.id
            ? {
                ...item,
                quantity: action.payload?.quantity,
              }
            : item
        ),
      };
    default:
      return state;
  }
};
