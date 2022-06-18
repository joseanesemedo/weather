import React, { useContext } from "react";
import { DAY_THEME, NIGHT_THEME, ThemeContext } from "../ThemeContextParent";

const ThemeSwitcher = () => {
  const { setGlobalTheme } = useContext(ThemeContext);

  var time = new Date().getHours();
  if (time < 10) {
    setGlobalTheme(DAY_THEME);
  } else if (time < 18) {
    setGlobalTheme(DAY_THEME);
  } else {
    setGlobalTheme(NIGHT_THEME);
  }

  //   return <button onClick={onClick}>{children}</button>;

  return <></>;
};

export default ThemeSwitcher;
