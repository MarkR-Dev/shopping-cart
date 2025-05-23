import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import styles from "../styles/Home.module.css";

function Home() {
  const images = [
    "https://www.dogstrust.org.uk/images/800x600/assets/2025-03/toffee%202.jpg",
    "https://images.squarespace-cdn.com/content/v1/54822a56e4b0b30bd821480c/45ed8ecf-0bb2-4e34-8fcf-624db47c43c8/Golden+Retrievers+dans+pet+care.jpeg",
    "https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg",
  ];

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
          <ImageSlider imageUrls={images} />
        </section>
      </main>
    </>
  );
}
export default Home;
