import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";
import { CircleX } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/ErrorPage.module.css";

function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <div className={styles.errorPage}>
        <Header />
        <main className={styles.errorMain}>
          <div className={styles.container}>
            <CircleX color="#0c0c0c" size={80} />

            <h2 className={styles.headingLarge}>Oops!</h2>
            <h2>Something went wrong!</h2>
            <h2>
              {error.status} {error.statusText}
            </h2>

            <Link to="/" className={styles.errorLink}>
              Return to the Home page
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default ErrorPage;
