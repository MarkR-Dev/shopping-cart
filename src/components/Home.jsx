import { Link } from "react-router-dom";

function Home({ name }) {
  return (
    <>
      <h1>Homepage {name}</h1>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
    </>
  );
}
export default Home;
