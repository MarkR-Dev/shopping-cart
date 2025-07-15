import { useState } from "react";
import CartItemQuantityInput from "./CartItemQuantityInput";
import styles from "../styles/CartItem.module.css";
import formatPrice from "../utils/formatPrice";
import PropTypes from "prop-types";

function CartItem({ product, productQuantity, updateCart }) {
  const [quantity, setQuantity] = useState(productQuantity);
  const price = formatPrice(product.price * productQuantity);

  /* todo: remove item btn/view product btn */

  return (
    <div className={styles.cartItem}>
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.productImage}
        />
      </div>

      <div className={styles.infoContainer}>
        <h3>{product.title}</h3>
        <h4>{price}</h4>
      </div>

      <CartItemQuantityInput
        quantity={quantity}
        setQuantity={setQuantity}
        updateCart={updateCart}
        productId={product.id}
      />
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
