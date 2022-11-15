import {ADD_ACTION, FILTER_ACTION } from "./actions";

export const initialProducts = [
  { id: 1, name: "Croissant", price: 2 },
  { id: 2, name: "Pain au chocolat", price: 3 },
];

export function reducer(state = initialProducts, action) {
    console.log({action});
  if (action.type === FILTER_ACTION) {
    const value = action.payload;
    return initialProducts.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
  }

  if(action.type === ADD_ACTION){
    const {name, price} = action.payload;
    const product = { name, price, id: name.length * price };
    initialProducts.push(product);
    return initialProducts;
  }
  return state;
}
