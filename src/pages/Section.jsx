import { useContext } from "react";
import { ArticlesContext } from "../App";
import { useParams } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import styles from "./styles/Section.module.css";

function Section() {
  const { section } = useParams();
  const articles = useContext(ArticlesContext).articles[section];
  const sectionInfo = useContext(ArticlesContext).sections[`${section}Info`];
  return (
    <>
      <section
        className={`${styles.sectionBanner} color-bg-${section} site-side-padding`}
      >
        <h1 className={`${styles.sectionName}`}>
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </h1>
        <p className={`${styles.sectionInfo}`}>{sectionInfo}</p>
      </section>
      <section className={`site-side-padding`}>
        <ul className={`${styles.list}`}>
          {articles.map((article) => {
            return (
              <li key={article.title}>
                <ArticleCard {...article} />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default Section;
