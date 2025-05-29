import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import Spinner from "./Spinner";
import styles from "../styles/Home.module.css";

// todo: footer, responsiveness

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
          {loading && <Spinner />}
          {products && <ImageSlider imageUrls={imageUrls} />}
        </section>
      </main>
    </>
  );
}

export default Home;
