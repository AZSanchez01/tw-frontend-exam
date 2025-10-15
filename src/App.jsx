import { useEffect, createContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Section from "./pages/Section";
import Article from "./pages/Article";

import articles from "./data/articlesData";
import sections from "./data/sectionsData";
export const ArticlesContext = createContext();

function App() {
  return (
    <>
      <Header />
      <main>
        <ArticlesContext.Provider value={{ articles, sections }}>
          <Routes>
            {ScrollToTop()}
            <Route path="/" element={<Home />} />
            <Route path="/:section" element={<Section />} />
            <Route path="/:section/:id" element={<Article />} />
          </Routes>
        </ArticlesContext.Provider>
      </main>
      <Footer />
    </>
  );
}

// Scroll to top on new link/refresh
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return null;
}

export default App;
