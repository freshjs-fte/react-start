import { useCallback, useContext, useMemo } from "react";
import { ThemeContext } from "../../contexts";
import nextTheme from "../../utils/nextTheme";
import RegisterForm from "../forms/RegisterForm";
import styles from "./Main.module.scss";

function Main(props) {
  const [theme, setTheme] = useContext(ThemeContext);

  // создает
  const toggleThemeFunc = useCallback(() => {
    const next = nextTheme(theme);
    setTheme(next);
  }, [theme, setTheme]);

  // useMemo запускает
  const themeStyles = useMemo(() => styles[theme], [theme]);

  return (
    <div className={themeStyles}>
      HOME
      <button onClick={toggleThemeFunc}>Toggle theme</button>
      <RegisterForm />
    </div>
  );
}

export default Main;
