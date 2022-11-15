import { filterReducer, productsReducer } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

const reducer = {
  products: productsReducer,
  searchTerm: filterReducer,
};


export const store = configureStore({
  reducer,
});
