import { useProducts } from "../hooks/useProducts";
import { Product } from "./product";

export function ProductList() {
  const {products} = useProducts()

  const showProducts = products.map((product) => (
    <Product key={product.id} product={product} />
  ));
  return <ul>{showProducts}</ul>;
}
