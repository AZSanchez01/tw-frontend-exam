import styles from "./styles/Footer.module.css";
import facebookIcon from "../assets/FontAwesome-Icons/facebook.svg";
import twitterIcon from "../assets/FontAwesome-Icons/x-twitter.svg";
import instagramIcon from "../assets/FontAwesome-Icons/instagram.svg";

function Footer() {
  return (
    <div
      className={`${styles.footer} site-side-padding header-footer-padding color-bg-dark`}
    >
      <small className={`${styles.copyright} fs-medium`}>
        © Webino Blogs 2023
      </small>
      <div className={styles.iconsList}>
        <img className={styles.icon} src={facebookIcon} alt="Facebook" />
        <img className={styles.icon} src={twitterIcon} alt="Twitter" />
        <img className={styles.icon} src={instagramIcon} alt="Instagram" />
      </div>
    </div>
  );
}
export default Footer;
