import { createContext, useReducer } from "react";

export const CartContext = createContext(null);
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const itemsInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemsInCart) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };
    case "REMOVE_FROM_CART":
      const InCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (InCart) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.quantity > 0
              ? { ...item, quantity: item.quantity - 1 }
              : item.remove()
          ),
        };
      }
  }
};
const initilaState = {
  price: 0,
  cartItems: [],
};
export const UseCartContext = (props) => {
  const [state, dispatch] = useReducer(reducer, initilaState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};
