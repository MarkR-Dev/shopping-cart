import { useParams, useOutletContext } from "react-router-dom";

function ViewProduct() {
  const { id } = useParams();

  // error return separate main with display message?
  const { products, loading } = useOutletContext();

  const selected = products?.find((product) => {
    return product.id === +id;
  });

  return (
    <>
      {products && <h2>{selected.title}</h2>}
      <h2>product: {id}</h2>
    </>
  );
}
export default ViewProduct;
