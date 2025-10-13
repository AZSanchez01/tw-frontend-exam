import { createContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Sports from "./pages/Sports";

export const ArticlesContext = createContext();

function App() {
  return (
    <>
      <main>
        <ArticlesContext.Provider value={{}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/sports" element={<Sports />} />
          </Routes>
        </ArticlesContext.Provider>
      </main>
    </>
  );
}

export default App;
