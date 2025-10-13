import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from "./styles/Header.module.css";

function Header() {
  // useState for nav toggle in mobile
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !menuOpen);
  };
  const isMobile = useMediaQuery({ maxWidth: 625 });

  return (
    <div
      className={`${styles.header} site-side-padding header-footer-padding color-bg-dark`}
    >
      <Link to="/">
        <h3>{isMobile ? "WB" : "Webino Blogs"}</h3>
      </Link>
      {/* Toggle Menu Button */}
      <button className={`${styles.navtoggle}`} onClick={toggleMenu}>
        <div className={styles.menuIconsWrapper}>
          <div
            className={`${styles.navCloseMenuIcon} ${
              menuOpen ? styles.fadein : ""
            } `}
          >
            ✖
          </div>
          <img
            src="./assets/FontAwesome-Icons/bars-solid.svg"
            alt="menu"
            className={`${styles.navMenuIcon}  ${
              !menuOpen ? styles.fadein : ""
            }`}
          />
        </div>
      </button>

      {/* Navigation */}
      <nav
        className={`${styles.navbar} ${
          menuOpen ? styles.openNavbar : ""
        } color-bg-dark font-body-sb fs-large`}
      >
        <ul className={`text-content-semibold ${styles.navlinks}`}>
          <li>
            <Link
              className={`${styles.navlink} ${
                menuOpen ? styles.showNavlink : ""
              }`}
              to="/reports"
            >
              REPORTS
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.navlink} ${
                menuOpen ? styles.showNavlink : ""
              }`}
              to="/blogs"
            >
              BLOGS
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.navlink} ${
                menuOpen ? styles.showNavlink : ""
              }`}
              to="/sports"
            >
              SPORTS
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
