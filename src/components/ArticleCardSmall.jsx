import { Link } from "react-router-dom";
import styles from "./styles/ArticleCardSmall.module.css";

function ArticleCardSmall({ title, genre, date, image }) {
  return (
    <Link to={`/${genre}/${title}`} className={`${styles.navlink}`}>
      <div className={`${styles.card}`}>
        <div className={`${styles.imgwrapper}`}>
          <img src={image} alt="" className={`${styles.image}`} />
        </div>
        <div className={`${styles.text}`}>
          <div className={`${styles.info}`}>
            <span className={`${styles.tag} font-body-sb`}>
              {genre.toUpperCase()}
            </span>{" "}
            <span>•</span> <span>{date}</span>
          </div>
          <h5 className={`${styles.title}`}>{title}</h5>
        </div>
      </div>
    </Link>
  );
}

export default ArticleCardSmall;
