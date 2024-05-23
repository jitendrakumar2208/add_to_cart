import React, { useContext, useEffect } from "react";
import "./cart.css";
import { CartContext } from "./context";
const Cart = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {state.cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        state.cartItems.map((item) => (
          <div key={item.id} className="item">
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price: {item.price}</p>
          </div>
        ))
      )}
      <div>
        <h2>Total :{state.price}</h2>
      </div>
    </div>
  );
};

export default Cart;
