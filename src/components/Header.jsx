import { NavLink } from "react-router-dom";
import styles from "../styles/Header.module.css";
import { ShoppingCart } from "lucide-react";

function Header() {
  return (
    <>
      <header>
        <div className={styles.container}>
          <h1 className={styles.title}>Shop</h1>
          <nav className={styles.navigation}>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="products"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="cart">
                  <ShoppingCart size={40} strokeWidth={1.5} />
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
