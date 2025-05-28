import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import styles from "../styles/Home.module.css";

// todo: add loading spinner, footer, responsiveness

function Home() {
  const [products, error, loading] = useOutletContext();

  const MAX_PRODUCT_IMAGES = 8;
  const maxProducts = products?.slice(0, MAX_PRODUCT_IMAGES);

  const imageUrls = maxProducts?.map((product) => product.image);

  return (
    <>
      <main>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1>Online store for all the items you could ever need!</h1>
            <Link to="products">View Products</Link>
          </div>
        </section>

        <section>
          {loading && <h2>Loading...</h2>}
          {products && <ImageSlider imageUrls={imageUrls} />}
        </section>
      </main>
    </>
  );
}

export default Home;
