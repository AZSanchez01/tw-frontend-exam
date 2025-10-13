import { createContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Sports from "./pages/Sports";

import articles from "../../tw-frontend-exam/src/assets/data/articlesData";
export const ArticlesContext = createContext();

function App() {
  console.log(articles);
  return (
    <>
      <Header />
      <main>
        <ArticlesContext.Provider value={articles}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/sports" element={<Sports />} />
          </Routes>
        </ArticlesContext.Provider>
      </main>
      <Footer />
    </>
  );
}

export default App;
