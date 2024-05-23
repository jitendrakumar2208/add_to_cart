import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UseCartContext } from "./components/context/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UseCartContext>
      <App />
    </UseCartContext>
  </React.StrictMode>
);
