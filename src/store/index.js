import { legacy_createStore as createStore, combineReducers } from "redux";
import { reducer as productsReducer } from "./reducer";

const reducers = {
  products: productsReducer,
  // users: usersReducer
};
export const store = createStore(combineReducers(reducers));
