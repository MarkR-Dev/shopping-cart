import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import Spinner from "./Spinner";
import styles from "../styles/Home.module.css";

function Home() {
  const { products, loading } = useOutletContext();

  const MAX_PRODUCT_IMAGES = 8;
  const maxProducts = products?.slice(0, MAX_PRODUCT_IMAGES);

  const imageData = maxProducts?.map((product) => {
    return { imageUrl: product.image, alt: product.title };
  });

  return (
    <>
      <main>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1>Online store for all the items you could ever need!</h1>
            <Link to="products">View Products</Link>
          </div>
        </section>

        <section className={styles.imageSliderSection}>
          {loading && <Spinner />}
          {products && <ImageSlider imageData={imageData} />}
        </section>
      </main>
    </>
  );
}

export default Home;
