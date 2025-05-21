import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <>
      <main>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1>Online store for all the items you could ever need!</h1>
            <Link to="products">View Products</Link>
          </div>
        </section>
      </main>
    </>
  );
}
export default Home;
