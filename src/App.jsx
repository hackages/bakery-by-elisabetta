import { ProductList, SearchAndAddProduct } from "./components";
import { UserProfile } from "./components/userProfile";

export function App() {
  return (
    <>
      <UserProfile/>
      <h1>My Bakery</h1>
      <SearchAndAddProduct />
      <ProductList />
    </>
  );
}
