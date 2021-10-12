import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ThemeContext } from "../../contexts";
import styles from "./Main.module.scss";

const arrayImages = [
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg",
  "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270",
];

function Main(props) {
  const [theme, setTheme] = useContext(ThemeContext);
  const [currentSlide, setCurrentSlide] = useState(0);

  // запускает
  useEffect(() => {});

  // создает
  const toggleThemeFunc = useCallback(() => {
    console.log('theme');
    if (theme === "LIGHT") {
      setTheme("DARK");
    } else {
      setTheme("LIGHT");
    }
  }, [theme, setTheme]);

  // useMemo запускает
  const themeStyles = useMemo(() => styles[theme], [theme]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % arrayImages.length);

      console.log(currentSlide);
    }, 2000);

    return () => {
      clearInterval(intervalID);
    };
  }, [currentSlide]);

  useEffect(() => {
    console.log('setCurrentSlide changed');
  }, [setCurrentSlide])

  return (
    <div className={themeStyles}>
      <div>
        <img src={arrayImages[currentSlide]} alt="" />
      </div>
      HOME
      <button onClick={toggleThemeFunc}>Toggle theme</button>
    </div>
  );
}

export default Main;
