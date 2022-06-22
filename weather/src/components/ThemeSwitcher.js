import React, { useContext, useEffect } from "react";
// import { formatToLocalTime } from "../services/weatherService";
import {
  DAY_THEME,
  CLOUDY_DAY_THEME,
  AFTERNOON_THEME,
  CLOUDY_NIGHT_THEME,
  NIGHT_THEME,
  RAIN_THEME,
  ThemeContext,
} from "../ThemeContextParent";

const ThemeSwitcher = ({ weather: { dt, timezone, id, icon } }) => {
  const { setGlobalTheme } = useContext(ThemeContext);

  // let time = formatToLocalTime(dt, timezone, "HH");

  useEffect(() => {
    switch (icon) {
      case "01d":
        setGlobalTheme(DAY_THEME);
        break;

      case "01n":
        setGlobalTheme(NIGHT_THEME);
        break;

      case "02d":
      case "03d":
      case "04d":
        setGlobalTheme(CLOUDY_DAY_THEME);
        break;

      case "02n":
      case "03n":
      case "04n":
        setGlobalTheme(CLOUDY_NIGHT_THEME);
        break;

      case "09d":
      case "09n":
      case "10d":
      case "10n":
      case "11d":
      case "11n":
      case "13d":
      case "13n":
      case "50d":
      case "50n":
        setGlobalTheme(RAIN_THEME);
        break;

      default:
        setGlobalTheme(DAY_THEME);
        break;
    }
    // if (Number(time) > 6 && Number(time) <= 15) {
    //   setGlobalTheme(DAY_THEME);
    // } else if (Number(time) > 15 && Number(time) < 19) {
    //   setGlobalTheme(AFTERNOON_THEME);
    // } else {
    //   setGlobalTheme(NIGHT_THEME);
    // }
  }, [setGlobalTheme, icon]);

  return <></>;
};

export default ThemeSwitcher;
