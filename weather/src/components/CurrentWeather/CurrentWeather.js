import React, { useContext } from "react";

import classes from "./CurrentWeather.module.scss";
import WeatherIcon from "../WeatherIcon";
import { ThemeContext } from "../../ThemeContextParent";
import { formatToLocalTime } from "../../services/weatherService";
import TemperatureDetails from "../TemperatureDetails/TemperatureDetails";

function CurrentWeather({
  weather: {
    temp,
    description,
    main,
    dt,
    timezone,
    name,
    country,
    icon,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    current: { uvi },
    humidity,
    feels_like,
  },
  units,
}) {
  const { globalTheme } = useContext(ThemeContext);

  return (
    <div className={`${classes.weather_box} ${classes[globalTheme]}`}>
      <div className={`${classes.weather_info} ${classes[globalTheme]}`}>
        <div className={`${classes.temperature} ${classes[globalTheme]}`}>
          {`${temp.toFixed()}°`}
        </div>
        <div
          className={`${classes.description_container} ${classes[globalTheme]}`}
        >
          <div
            className={`${classes.weather_description} ${classes[globalTheme]}`}
          >
            {`${main}`}
          </div>
          <div className={`${classes.date} ${classes[globalTheme]}`}>
            <h1 className={`${classes.city_name} ${classes[globalTheme]}`}>
              {`${name}-${country}`}
            </h1>
            <h1 className={`${classes.city_date} ${classes[globalTheme]}`}>
              {formatToLocalTime(dt, timezone, "cccc, dd LLLL")}
            </h1>
            <div className={`${classes.city_time} ${classes[globalTheme]}`}>
              <p>Current time:</p>
              <p>
                {units === "metric"
                  ? formatToLocalTime(dt, timezone, "HH:mm")
                  : formatToLocalTime(dt, timezone, "hh:mm a")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.city_info}>
        <div className={classes.icon_container}>
          <WeatherIcon code={icon} />
        </div>
      </div>

      <TemperatureDetails
        weather={{
          icon,
          temp_min,
          temp_max,
          sunrise,
          sunset,
          speed,
          current: { uvi },
          humidity,
          feels_like,
          timezone,
        }}
        units={units}
      />
    </div>
  );
}

export default CurrentWeather;
