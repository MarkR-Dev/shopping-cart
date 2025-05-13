import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <h1>Products</h1>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>

      <div>
        <Link to="/products/1">Item 1</Link>
        <Link to="/products/2">Item 2</Link>
        <Link to="/products/3">Item 3</Link>
      </div>
    </>
  );
}
export default Products;
