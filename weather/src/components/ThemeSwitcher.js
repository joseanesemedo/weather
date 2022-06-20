import React, { useContext, useEffect } from "react";
import { formatToLocalTime } from "../services/weatherService";
import {
  DAY_THEME,
  AFTERNOON_THEME,
  NIGHT_THEME,
  ThemeContext,
} from "../ThemeContextParent";

const ThemeSwitcher = ({ weather: { dt, timezone } }) => {
  const { setGlobalTheme } = useContext(ThemeContext);

  let time = formatToLocalTime(dt, timezone, "HH");

  useEffect(() => {
    if (Number(time) > 6 && Number(time) <= 15) {
      setGlobalTheme(DAY_THEME);
    } else if (Number(time) > 15 && Number(time) < 19) {
      setGlobalTheme(AFTERNOON_THEME);
    } else {
      setGlobalTheme(NIGHT_THEME);
    }
  }, [setGlobalTheme, time]);

  return <></>;
};

export default ThemeSwitcher;
