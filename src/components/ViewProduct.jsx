import { useParams, useOutletContext, Link } from "react-router-dom";
import { useState } from "react";
import styles from "../styles/ViewProduct.module.css";
import Spinner from "./Spinner";
import formatPrice from "../utils/formatPrice";
import QuantityInput from "./QuantityInput";
import formatText from "../utils/formatText";
import { Star } from "lucide-react";

function ViewProduct() {
  const { id } = useParams();
  const { products, loading, addToCart } = useOutletContext();
  const [quantity, setQuantity] = useState(1);

  const selected = products?.find((product) => {
    return product.id === +id;
  });

  return (
    <>
      {loading && <Spinner />}

      {products && (
        <div className={styles.container}>
          <div className={styles.productContainer}>
            <div className={styles.imageContainer}>
              <img
                src={selected.image}
                alt={selected.title}
                className={styles.productImage}
              />
            </div>
            <div className={styles.infoContainer}>
              <h2 className={styles.productTitle}>{selected.title}</h2>
              <h3 className={styles.productCategory}>
                {formatText(selected.category)}
              </h3>
              <h3 className={styles.productRating}>
                <Star size={16} strokeWidth={1.5} fill="black" />
                {selected.rating.rate + " (" + selected.rating.count + ")"}
              </h3>
              <h3 className={styles.productDesc}>{selected.description}</h3>
              <h3 className={styles.productPrice}>
                {formatPrice(selected.price * quantity)}
              </h3>
              <div className={styles.productQuantity}>
                <QuantityInput quantity={quantity} setQuantity={setQuantity} />
              </div>
              <div className={styles.buttonsContainer}>
                <button
                  onClick={() =>
                    addToCart({ id: selected.id, quantity: quantity })
                  }
                >
                  Add To Cart
                </button>
                <Link to={`/products`} className={styles.productsLink}>
                  Return To Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default ViewProduct;
