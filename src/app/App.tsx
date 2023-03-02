import { Link } from "react-router-dom";
import "./styles/index.scss";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "../shared/lib/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Change theme</button>
      <Link to={"/"}>General</Link>
      <Link to={"/about"}>About</Link>

      <AppRouter />
    </div>
  );
};

export default App;
