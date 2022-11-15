import { filterReducer, productsReducer } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

const reducer = {
  products: productsReducer,
  searchTerm: filterReducer,
};

const preloadedState = {
  products: [
    { id: 1, name: "Croissant", price: 2 },
    { id: 2, name: "Pain au chocolat", price: 3 },
  ],
  searchTerm: "",
};

export const store = configureStore({
  reducer,
  // preloadedState
});
