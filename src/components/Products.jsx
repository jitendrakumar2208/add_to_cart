import React, { useContext, useEffect, useReducer } from "react";

import "./product.css";
import { CartContext } from "./context";
const Products = ({ item }) => {
  const { state, dispatch } = useContext(CartContext);
  const handleIncrease = () => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };
  const handleRemove = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  return (
    <div className="card">
      <p>{item.name}</p>
      <p>{item.price}</p>
      <div className="btn">
        <span className="minus" onClick={handleRemove}>
          -
        </span>
        <span>
          <p className="items">1</p>
        </span>
        <span className="plus" onClick={handleIncrease}>
          +
        </span>
      </div>
    </div>
  );
};

export default Products;
