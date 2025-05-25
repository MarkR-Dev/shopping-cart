import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import styles from "../styles/Home.module.css";

// todo: check import images works more, add loading spinner, dots, responsiveness

function Home() {
  const [products, error, loading] = useOutletContext();

  const imageUrls = products?.map((item) => item.image);

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
          {!loading && !error && <ImageSlider imageUrls={imageUrls} />}
        </section>
      </main>
    </>
  );
}
export default Home;
