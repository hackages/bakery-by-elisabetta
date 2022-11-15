import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { ProductContextProvider } from "./context/product.context";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </Provider>
  </React.StrictMode>
);
