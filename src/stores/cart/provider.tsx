import { useReducer, useEffect, type FC, type PropsWithChildren } from "react";
import { CartContext } from "./context";
import { cartReducer } from "./reducer";
import { cartStorage } from "../../storage/cart";
import { initialState } from "./reducer";

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState, () => {
    const savedCart = cartStorage.get();
    return savedCart ? savedCart : initialState;
  });

  useEffect(() => {
    cartStorage.set(cart);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
