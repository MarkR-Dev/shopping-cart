import { useOutletContext } from "react-router-dom";
import Spinner from "./Spinner";
import ProductCard from "./ProductCard";
import styles from "../styles/Products.module.css";

function Products() {
  // error return separate main with display message?
  const { products, loading, addToCart } = useOutletContext();

  return (
    <>
      <main>
        <div className={styles.container}>
          <h2>Products</h2>

          {loading && <Spinner />}

          {products && (
            <div className={styles.productsContainer}>
              {products.map((product, index) => {
                return (
                  <ProductCard
                    key={index}
                    product={product}
                    addToCart={addToCart}
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

export default Products;

/* 
css - flex/grid for products container

cart state added, circle back to nav and make cart icon work

tests:
products page component renders
product component - exists, input typing and increase/decrease works, add to cart, view more link
mocks?
header cart icon tests
*/
