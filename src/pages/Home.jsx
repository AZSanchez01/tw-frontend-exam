import { useContext } from "react";
import { ArticlesContext } from "../App";
import LeadArticle from "../components/LeadArticle";
import ArticleCardSmallList from "../components/ArticleCardSmallList";
import ArticleCard from "../components/ArticleCard";
import styles from "./styles/Home.module.css";

function Home() {
  const { articles } = useContext(ArticlesContext);
  return (
    <>
      <section className={`site-side-padding ${styles.section}`}>
        <LeadArticle {...articles.sports[0]} />
      </section>
      <section className={`site-side-padding ${styles.section}`}>
        <ArticleCardSmallList
          heading="Latest"
          articles={[
            articles.sports[1],
            articles.sports[2],
            articles.sports[3],
            articles.blogs[0],
          ]}
        />
      </section>
      <section
        className={`site-side-padding color-bg-dark ${styles.section} ${styles.featured}`}
      >
        <ArticleCard {...articles.reports[1]} color={`white`} />
        <ArticleCard {...articles.reports[3]} color={`white`} />
      </section>
      <section className={`site-side-padding ${styles.section}`}>
        <ArticleCardSmallList
          heading="More Articles"
          articles={[
            articles.reports[0],
            articles.blogs[1],
            articles.blogs[2],
            articles.blogs[3],
          ]}
        />
      </section>
    </>
  );
}
export default Home;
