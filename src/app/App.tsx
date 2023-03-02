// import Counter from "./components/Counter";
import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "../shared/lib/classNames/classNames";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Change theme</button>
      <Link to={"/"}>General</Link>
      <Link to={"/about"}>About</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
