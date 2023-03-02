import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/ThemeContext";

interface useThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): useThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const currentTheme = theme === Theme.DARK ? Theme.LIGNT : Theme.DARK;
    setTheme(currentTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, currentTheme);
  };

  return { theme, toggleTheme };
}
