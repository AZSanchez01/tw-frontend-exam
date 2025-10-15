import { useContext } from "react";
import { ArticlesContext } from "../App";
import LeadArticle from "../components/LeadArticle";
import ArticleCardSmallList from "../components/ArticleCardSmallList";
import ArticleCard from "../components/ArticleCard";

function Home() {
  const { articles } = useContext(ArticlesContext);
  return (
    <>
      <div className={`site-side-padding`}>
        <LeadArticle {...articles.sports[0]} />
      </div>
      <br />
      <br />
      <div className={`site-side-padding`}>
        <ArticleCardSmallList heading="Reports" articles={articles.reports} />
      </div>
      <br />
      <div className={`site-side-padding`}>
        <ArticleCardSmallList heading="Blogs" articles={articles.blogs} />
      </div>
      <br />
      <div className={`site-side-padding`}>
        <ArticleCardSmallList heading="Sports" articles={articles.sports} />
      </div>
      <br />
      <br />
      <section className={`site-side-padding`}>
        <ArticleCard {...articles.sports[0]} />
      </section>
      <br />
      <br />
    </>
  );
}
export default Home;
