export function Product({ product }) {
  return (
    <li>
      {product.name}-{product.price}€
    </li>
  );
}
