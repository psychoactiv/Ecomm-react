import { React, createContext, useContext, useReducer } from "react";
import { cartReducefn } from "../../utils/cart-reducer-fn";

const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducefn, []);

  return (
    <CartContext.Provider
      value={{ cartDispatch, cartState }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { CartContextProvider, useCartContext };
