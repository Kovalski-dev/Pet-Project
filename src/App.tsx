// import Counter from "./components/Counter";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";
import "./index.scss";
import { Routes, Route, Link } from "react-router-dom";
import { Suspense } from "react";

const App = () => {
  return (
    <div className="app">
      <Link to={"/"}>General</Link>
      <Link to={"/about"}>About</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageLazy />} />
          <Route path={"/"} element={<MainPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
