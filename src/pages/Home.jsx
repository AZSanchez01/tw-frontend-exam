import { useContext } from "react";
import { ArticlesContext } from "../App";
import LeadArticle from "../components/LeadArticle";

function Home() {
  const articles = useContext(ArticlesContext);
  return (
    <>
      <div className={`site-side-padding`}>
        <LeadArticle {...articles.sports[0]} />
      </div>
    </>
  );
}
export default Home;
