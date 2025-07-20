import { useState } from "react";
import { Link } from "react-router-dom";
import CartItemQuantityInput from "./CartItemQuantityInput";
import styles from "../styles/CartItem.module.css";
import formatPrice from "../utils/formatPrice";
import PropTypes from "prop-types";

function CartItem({ product, productQuantity, updateCart, removeFromCart }) {
  const [quantity, setQuantity] = useState(productQuantity);
  const price = formatPrice(product.price * productQuantity);

  return (
    <div className={styles.cartItem}>
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.productImage}
        />
      </div>

      <div className={styles.productInfoContainer}>
        <div className={styles.textInfoContainer}>
          <h3 className={styles.title}>
            {product.title} x{quantity}
          </h3>
          <h4 className={styles.price}>{price}</h4>
        </div>

        <CartItemQuantityInput
          quantity={quantity}
          setQuantity={setQuantity}
          updateCart={updateCart}
          productId={product.id}
        />

        <div className={styles.buttonsContainer}>
          <button onClick={() => removeFromCart(product.id)}>Remove</button>
          <Link to={"/products/" + product.id}>View Product</Link>
        </div>
      </div>
    </div>
  );
}

// Proptypes were removed from React v19 to be silently ignored - in future use TypeScript or another solution (change to React v18/find another package)
CartItem.propTypes = {
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
  productQuantity: PropTypes.number,
  updateCart: PropTypes.func,
};

export default CartItem;
