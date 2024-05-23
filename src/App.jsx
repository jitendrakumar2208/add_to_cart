import { useContext, useReducer } from "react";
import "./App.css";
import Cart from "./components/Cart";
import { data } from "./product";
import Products from "./components/Products";
import { CartContext } from "./components/context";
function App() {
  const { state, dispatch } = useContext(CartContext);
  console.log(state);
  return (
    <div className="app">
      <div className="products">
        <h3>My Store</h3>
        {data.map((item) => (
          <Products item={item} key={item.id} />
        ))}
      </div>
      <Cart></Cart>
    </div>
  );
}

export default App;
