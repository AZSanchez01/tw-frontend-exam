import { Link } from "react-router-dom";
import styles from "./styles/LeadArticle.module.css";

function LeadArticle({ title, subtitle, date, genre, image }) {
  return (
    <Link to={`/${genre}/${title}`}>
      <div className={`${styles.leadArticle}`}>
        <img src={image} alt="" className={`${styles.leadImage}`} />
        <div className={`${styles.textContent}`}>
          <h1 className={`${styles.title}`}>{title}</h1>
          <p className={`${styles.subtitle}`}>
            <span className={`font-body-sb`}>{genre.toUpperCase()}</span> —{" "}
            {subtitle}
          </p>
          <div className={`${styles.date}`}>
            <img
              src="./assets/FontAwesome-Icons/calendar-regular.svg"
              alt="Date"
              className={`${styles.calendar}`}
            />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default LeadArticle;
