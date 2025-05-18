import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ViewProduct() {
  const { id } = useParams();
  return (
    <>
      <h2> View Product ID: {id}</h2>
    </>
  );
}
export default ViewProduct;
