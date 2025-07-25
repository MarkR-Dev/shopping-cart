import PropTypes from "prop-types";
import styles from "../styles/QuantityInput.module.css";

function CartItemQuantityInput({
  quantity,
  setQuantity,
  updateCart,
  productId,
}) {
  function handleDecrement() {
    let newQuantity = quantity - 1;

    if (newQuantity < 1) {
      newQuantity = 1;
    }
    setQuantity(newQuantity);
    updateCart({ id: productId, quantity: newQuantity });
  }

  function handleIncrement() {
    let newQuantity = quantity + 1;

    if (newQuantity > 99) {
      newQuantity = 99;
    }

    setQuantity(newQuantity);
    updateCart({ id: productId, quantity: newQuantity });
  }

  function handleChange(e) {
    let newQuantity = +e.target.value;

    if (newQuantity < 1) {
      newQuantity = 1;
    } else if (newQuantity > 99) {
      newQuantity = 99;
    }

    setQuantity(newQuantity);
    updateCart({ id: productId, quantity: newQuantity });
  }

  return (
    <>
      <div className={styles.inputContainer}>
        <button onClick={handleDecrement} className={styles.decrease}>
          &lt;
        </button>
        <input
          type="number"
          name="quantity"
          className={styles.quantityInput}
          value={quantity}
          onChange={handleChange}
        />
        <button onClick={handleIncrement} className={styles.increase}>
          &gt;
        </button>
      </div>
    </>
  );
}

// Proptypes were removed from React v19 to be silently ignored - in future use TypeScript or another solution (change to React v18/find another package)
CartItemQuantityInput.propTypes = {
  quantity: PropTypes.number,
  setQuantity: PropTypes.func,
  updateCart: PropTypes.func,
  productId: PropTypes.number,
};

export default CartItemQuantityInput;
