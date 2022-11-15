import { createReducer, createSlice, current } from "@reduxjs/toolkit";
import { addProductAction, filterProductAction } from "./actions";
import { fetchUser } from "./middleware";

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

const userSlice = createSlice({
  name: 'userSlice',
  initialState: {pending: false, user: {}, error: null},
  reducers: {},
  extraReducers: (builder) =>{
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload 
      return state;
    })
    
    builder.addCase(fetchUser.pending, (data) => {
      state.pending = true;
      return state;
    })

    builder.addCase(fetchUser.rejected, (error) => {
      state.error = error;
      return state;
    })
  },
})

export const userReducer = userSlice.reducer

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
