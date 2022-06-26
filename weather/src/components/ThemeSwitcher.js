import React, { useContext, useEffect } from "react";
import { formatToLocalTime } from "../services/weatherService";
import {
  DAY_THEME,
  CLOUDY_DAY_THEME,
  AFTERNOON_THEME,
  CLOUDY_NIGHT_THEME,
  NIGHT_THEME,
  RAIN_THEME,
  ThemeContext,
} from "../ThemeContextParent";

const ThemeSwitcher = ({ weather: { dt, timezone, icon } }) => {
  const { setGlobalTheme } = useContext(ThemeContext);

  let time = formatToLocalTime(dt, timezone, "HH");
  let day_time;
  if (Number(time) > 6 && Number(time) <= 17) {
    day_time = "day";
  } else if (Number(time) > 17 && Number(time) <= 19) {
    day_time = "afternoon";
  } else {
    day_time = "night";
  }

  useEffect(() => {
    switch (icon) {
      case "01d":
        if (day_time === "day") {
          setGlobalTheme(DAY_THEME);
        } else {
          setGlobalTheme(AFTERNOON_THEME);
        }
        break;

      case "01n":
        setGlobalTheme(NIGHT_THEME);
        break;

      case "02d":
      case "03d":
      case "04d":
      case "02n":
      case "03n":
      case "04n":
        if (day_time === "day") {
          setGlobalTheme(CLOUDY_DAY_THEME);
        } else if (day_time === "afternoon") {
          setGlobalTheme(AFTERNOON_THEME);
        } else {
          setGlobalTheme(CLOUDY_NIGHT_THEME);
        }
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
  }, [setGlobalTheme, icon, day_time]);

  return <></>;
};

export default ThemeSwitcher;
