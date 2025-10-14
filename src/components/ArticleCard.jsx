import { Link } from "react-router-dom";
import styles from "./styles/ArticleCard.module.css";

function ArticleCard({ title, subtitle, genre, date, image, color }) {
  return (
    <Link to={`/${genre}/${title}`} className={`${styles.navlink}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.card}`}>
          <div className={`${styles.imgWrapper}`}>
            <img src={image} alt={title} className={`${styles.image}`} />
          </div>
          <section
            className={`${styles.text}`}
            style={{ color: color ? color : `#191a1c` }}
          >
            <div className={`${styles.info}`}>
              <span
                className={`${styles.tag} font-body-sb`}
                style={{ borderColor: color ? color : `#191a1c` }}
              >
                {genre.toUpperCase()}
              </span>
              <span>•</span>
              <span>{date}</span>
            </div>
            <h3 className={`${styles.title}`}>{title}</h3>
            <p className={`${styles.subtitle}`}>{subtitle}</p>
          </section>
        </div>
      </div>
    </Link>
  );
}

export default ArticleCard;
