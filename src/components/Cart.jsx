import { Link, useOutletContext } from "react-router-dom";
import Spinner from "./Spinner";
import styles from "../styles/Cart.module.css";
import CartItem from "./CartItem";

function Cart() {
  const { products, loading, cart, updateCart } = useOutletContext();

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
              {cart.map((cartItem, index) => {
                return (
                  <CartItem
                    key={index}
                    product={products[cartItem.id - 1]}
                    productQuantity={cartItem.quantity}
                    updateCart={updateCart}
                  />
                );
              })}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
export default Cart;
