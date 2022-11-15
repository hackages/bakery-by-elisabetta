import { createReducer, current } from "@reduxjs/toolkit";
import { addProductAction, filterProductAction } from "./actions";

export const initialProducts = [
  { id: 1, name: "Croissant", price: 2 },
  { id: 2, name: "Pain au chocolat", price: 3 },
];

export const productsReducer = createReducer(initialProducts, (builder) => {
  builder.addCase(addProductAction, (products, action) => {
    const { name, price } = action.payload;
    const product = { name, price, id: name.length * price };
    products.push(product)
  });
});

export const filterReducer = createReducer("", (builder) => {
  builder.addCase(filterProductAction, (term, action) => {
    console.log({term});
    term = action.payload;
    return term;
  });
});

/// with Redux
// export function reducer(products = initialProducts, action) {
//   if (action.type === ADD_ACTION) {
//     const { name, price } = action.payload;
//     const product = { name, price, id: name.length * price };
//     return [...products, product];
//   }
//   return products;
// }

// export function searchReducer(term = '', action) {
//   if (action.type === FILTER_ACTION) {
//     return action.payload;
//   }
//   return term;
// }
