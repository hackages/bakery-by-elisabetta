import { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  // const [toggle, setToggle] = useState(false);
  const {products, searchTerm} = useSelector((state) => state);
  // console.log('context', {products});

  // useEffect(() => {
  //   if (products.length === 0) {
  //     setToggle(true);
  //   } else {
  //     setToggle(false);
  //   }
  // }, [products.length, searchTerm]);

  // console.log({ products, toggle });
  console.log({searchTerm});
  const filteredProducts = searchTerm
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products

  const data = {
    products: filteredProducts,
    toggle: filteredProducts.length === 0
  }

  return (
    <ProductContext.Provider value={data}>
      {children}
    </ProductContext.Provider>
  );
};
