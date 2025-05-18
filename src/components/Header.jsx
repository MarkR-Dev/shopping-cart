import { NavLink } from "react-router-dom";
import styles from "../styles/Header.module.css";

//todo: how to style active navlinks
//todo: get cart icon

function Header() {
  return (
    <>
      <header>
        <div className={styles.container}>
          <h1 className={styles.title}>Shop</h1>
          <nav className={styles.navigation}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="products">Products</NavLink>
              </li>
              <li>
                <NavLink to="cart">Cart (needs icon)</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
