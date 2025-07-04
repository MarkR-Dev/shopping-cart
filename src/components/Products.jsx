import { useOutletContext } from "react-router-dom";
import Spinner from "./Spinner";
import ProductCard from "./ProductCard";
import styles from "../styles/Products.module.css";

function Products() {
  const { products, loading, addToCart } = useOutletContext();

  return (
    <>
      <main>
        <div className={styles.container}>
          <h2 className={styles.heading}>Products</h2>

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
