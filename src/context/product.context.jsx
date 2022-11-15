import { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const {products, searchTerm} = useSelector((state) => state);

  const filteredProducts = searchTerm
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products

  const payload = {
    products: filteredProducts,
    toggle: filteredProducts.length === 0
  }

  return (
    <ProductContext.Provider value={payload}>
      {children}
    </ProductContext.Provider>
  );
};
