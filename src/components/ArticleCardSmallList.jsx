import ArticleCardSmall from "./ArticleCardSmall";
import styles from "./styles/ArticleCardSmallList.module.css";

function ArticleCardSmallList({ heading, articles }) {
  return (
    <div>
      <h3 className={styles.heading}>{heading}</h3>
      <ul className={`${styles.list}`}>
        {articles.map((article) => {
          return (
            <li id={article.title}>
              <ArticleCardSmall {...article} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default ArticleCardSmallList;
