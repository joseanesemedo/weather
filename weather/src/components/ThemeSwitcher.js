import React, { useContext } from "react";
import { DAY_THEME, NIGHT_THEME, ThemeContext } from "../ThemeContextParent";

const ThemeSwitcher = () => {
  const { setGlobalTheme } = useContext(ThemeContext);

  var t = new Date().getHours();
  if (t < 10) {
    setGlobalTheme(DAY_THEME);
  } else if (t < 20) {
    setGlobalTheme(DAY_THEME);
  } else {
    setGlobalTheme(NIGHT_THEME);
  }

  //   return <button onClick={onClick}>{children}</button>;

  return <></>;
};

export default ThemeSwitcher;
