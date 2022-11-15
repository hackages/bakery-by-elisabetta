import { useContext } from "react";
import { ProductContext } from "../context/product.context";

export const useProducts = () => {
  return useContext(ProductContext);
};
