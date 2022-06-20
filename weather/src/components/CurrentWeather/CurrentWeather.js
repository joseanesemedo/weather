import React, { useContext, useState } from "react";
import classes from "./CurrentWeather.module.scss";
import WeatherIcon from "../WeatherIcon";
import { ThemeContext } from "../../ThemeContextParent";
import { formatToLocalTime } from "../../services/weatherService";

function CurrentWeather({
  weather: { temp, description, main, dt, timezone, name, country, icon },
}) {
  const { globalTheme } = useContext(ThemeContext);

  return (
    <div className={`${classes.weather_box} ${classes[globalTheme]}`}>
      <div className={classes.weather_info}>
        <div className={classes.temperature}>{`${temp.toFixed()}°`}</div>
        <div className={classes.description_container}>
          <div className={classes.weather_description}>{`${description}`}</div>
          <h1 className={classes.city_name}>{`${name}-${icon}`}</h1>
        </div>
        {formatToLocalTime(dt, timezone, "HH:mm")}
        <br />
        {formatToLocalTime(dt, timezone, "cccc, dd")}
      </div>

      <div className={classes.city_info}>
        <div className={classes.icon_container}>
          <WeatherIcon code={icon} />
          {/* <PartlyCloudy />{" "} */}
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
