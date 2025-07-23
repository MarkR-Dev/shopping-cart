import { Link, useOutletContext } from "react-router-dom";
import Spinner from "./Spinner";
import styles from "../styles/Cart.module.css";
import CartItem from "./CartItem";
import formatPrice from "../utils/formatPrice";

function Cart() {
  const { products, loading, cart, updateCart, removeFromCart, clearCart } =
    useOutletContext();

  // This is probably not needed if I were to structure my data properly rather than combining two data objects together
  function calcTotal() {
    const items = cart.map((item) => {
      const cartItem = products[item.id - 1];
      return { ...cartItem, quantity: item.quantity };
    });

    const total = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    return formatPrice(total);
  }

  return (
    <>
      <main>
        <div className={styles.container}>
          <h2 className={styles.heading}>Your Cart</h2>

          {loading && <Spinner />}

          {products && cart.length === 0 && (
            <div className={styles.emptyCart}>
              <h3 className={styles.message}>
                It looks like your cart is empty, let's change that!
              </h3>
              <Link to={"/products"} className={styles.viewProducts}>
                View Products
              </Link>
            </div>
          )}

          {products && cart.length !== 0 && (
            <div className={styles.cartContainer}>
              <div className={styles.cartItemsContainer}>
                {cart.map((cartItem, index) => {
                  return (
                    <CartItem
                      key={index}
                      product={products[cartItem.id - 1]}
                      productQuantity={cartItem.quantity}
                      updateCart={updateCart}
                      removeFromCart={removeFromCart}
                    />
                  );
                })}
              </div>

              <div className={styles.totalContainer}>
                <h2 className={styles.totalText}>Total</h2>
                <h2 className={styles.totalPrice} data-testid="total-price">
                  {calcTotal()}
                </h2>
              </div>

              <div className={styles.buttonsContainer}>
                <button className={styles.checkout}>Checkout</button>
                <Link to="/products">Continue Shopping</Link>
                <button
                  onClick={() => clearCart()}
                  className={styles.clearCart}
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
export default Cart;
