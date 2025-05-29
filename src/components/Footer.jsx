import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerLinks}>
            <ul>
              <li>About</li>
              <li>Store</li>
              <li>Team</li>
              <li>Blog</li>
            </ul>

            <ul>
              <li>Support</li>
              <li>FAQ</li>
              <li>Contact</li>
              <li>Jobs</li>
            </ul>

            <ul>
              <li>Legal</li>
              <li>Privacy</li>
              <li>Terms Of Service</li>
              <li>Refunds</li>
            </ul>

            <ul>
              <li>Socials</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
