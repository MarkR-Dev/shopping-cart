import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <h1>Cart</h1>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
    </>
  );
}
export default Cart;
