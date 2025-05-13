import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ViewProduct() {
  const { id } = useParams();
  return (
    <>
      <h1> View Product ID: {id}</h1>
      <Link to="/products">Go Back to Products</Link>
    </>
  );
}
export default ViewProduct;
