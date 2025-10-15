import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ArticlesContext } from "../App";
import ArticleCardSmallList from "../components/ArticleCardSmallList";
import styles from "./styles/Article.module.css";

function Article() {
  const { section, id } = useParams();

  // Related articles to match figma only
  const articles = useContext(ArticlesContext).articles;
  const relArticles = [
    articles.sports[1],
    articles.sports[2],
    articles.sports[3],
    articles.blogs[0],
  ];

  // Find the article
  const article = useContext(ArticlesContext).articles[section].find(
    (articleInfo) => articleInfo.title == id
  );
  return (
    <div className={`${styles.article}`}>
      <section
        className={`${styles.imgSection} color-bg-${article.genre} site-side-padding`}
      >
        <div className={`${styles.imgWrapper} color-bg-${article.genre}`}>
          <img
            src={article.image}
            alt={article.title}
            className={`${styles.image}`}
          />
        </div>
      </section>
      <section className={`${styles.metainfo} site-side-padding`}>
        <h1 className={`${styles.title}`}>{article.title}</h1>
        <p className={`${styles.subtitle}`}>{article.subtitle}</p>
        <span className={`${styles.articleMetaLines}`}>
          <span className={`${styles.byline}`}>
            <img
              src="./assets/FontAwesome-Icons/user-regular.svg"
              alt="Author"
              className={`${styles.icon}`}
            />
            <p className={`font-body-sb`}>{article.author}</p>
          </span>
          <span className={`${styles.dateline}`}>
            <img
              src="./assets/FontAwesome-Icons/calendar-regular.svg"
              alt="Date"
              className={`${styles.icon}`}
            />
            <p>{article.date}</p>
          </span>
        </span>
      </section>
      <section className={`${styles.content} site-side-padding`}>
        {article.content}
      </section>
      <section className={`site-side-padding`}>
        <hr className={`${styles.hrule} site-side-padding`} />
      </section>
      <section className={`site-side-padding`}>
        <ArticleCardSmallList
          heading="Related Articles"
          articles={relArticles}
        />
      </section>
    </div>
  );
}
export default Article;
