import { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    if (products.length === 0) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [products.length]);

  return (
    <ProductContext.Provider value={{ toggle }}>
      {children}
    </ProductContext.Provider>
  );
};
