import React, { useContext } from "react";
import {
  DAY_THEME,
  AFTERNOON_THEME,
  NIGHT_THEME,
  ThemeContext,
} from "../ThemeContextParent";

const ThemeSwitcher = () => {
  const { setGlobalTheme } = useContext(ThemeContext);

  //   var time = new Date().getHours();
  //   if (time < 15) {
  //     setGlobalTheme(DAY_THEME);
  //   } else if (time < 19) {
  //     setGlobalTheme(AFTERNOON_THEME);
  //   } else {
  //     setGlobalTheme(NIGHT_THEME);
  //   }

  //   return <button onClick={onClick}>{children}</button>;

  return <></>;
};

export default ThemeSwitcher;
