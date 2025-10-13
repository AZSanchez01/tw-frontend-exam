import { createContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Section from "./pages/Section";
import Article from "./pages/Article";

import articles from "./data/articlesData";
export const ArticlesContext = createContext();

function App() {
  return (
    <>
      <Header />
      <main>
        <ArticlesContext.Provider value={articles}>
          <Routes>
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

export default App;
