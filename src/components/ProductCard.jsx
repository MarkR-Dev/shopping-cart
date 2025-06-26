import { useState } from "react";
import { Link } from "react-router-dom";
import QuantityInput from "./QuantityInput";
import styles from "../styles/ProductCard.module.css";
import PropTypes from "prop-types";
import formatPrice from "../utils/formatPrice";

function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const price = formatPrice(product.price * quantity);

  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          <img src={product.image} alt={product.title} />
        </div>

        <div className={styles.infoContainer}>
          <h2>{product.title}</h2>
          <h3>{price}</h3>
        </div>

        <QuantityInput quantity={quantity} setQuantity={setQuantity} />

        <div className={styles.buttonsContainer}>
          <button
            onClick={() => addToCart({ id: product.id, quantity: quantity })}
          >
            Add To Cart
          </button>
          <Link to={`/products/` + product.id}>View Product</Link>
        </div>
      </div>
    </>
  );
}

// Proptypes were removed from React v19 to be silently ignored - in future use TypeScript or another solution (change to React v18/find another package)
ProductCard.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number,
    }),
  }),
};

export default ProductCard;

// todo: styling, testing
// mock the setQuantity?, check params that it was called with, and that it was called
