import { filterReducer, productsReducer, userReducer } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import { fetchUser } from "./middleware";

const reducer = {
  products: productsReducer,
  searchTerm: filterReducer,
  user: userReducer
};


export const store = configureStore({
  reducer,
  middleware: (mdl) => {
    console.log({middlewared: mdl()});
    return mdl()
  }
});
