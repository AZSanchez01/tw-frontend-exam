import styles from "./styles/Footer.module.css";

function Footer() {
  return (
    <div
      className={`${styles.footer} site-side-padding header-footer-padding color-bg-dark`}
    >
      <small className={`${styles.copyright} fs-medium`}>
        © Webino Blogs 2023
      </small>
      <div className={styles.iconsList}>
        <img
          className={styles.icon}
          src="./assets/FontAwesome-Icons/facebook.svg"
          alt="Facebook"
        />
        <img
          className={styles.icon}
          src="./assets/FontAwesome-Icons/x-twitter.svg"
          alt="Twitter"
        />
        <img
          className={styles.icon}
          src="./assets/FontAwesome-Icons/instagram.svg"
          alt="Instagram"
        />
      </div>
    </div>
  );
}
export default Footer;
