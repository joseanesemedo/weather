import React, { useContext } from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

import {
  formatToLocalTime,
  iconUrlFromCode,
} from "../../services/weatherService";

import { ThemeContext } from "../../ThemeContextParent";

import classes from "./TemperatureDetails.module.scss";

const TemperatureDetails = ({
  weather: {
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
  },
  units,
}) => {
  const { globalTheme } = useContext(ThemeContext);

  return (
    <div className={`${classes.details_container} ${classes[globalTheme]}`}>
      <div className={`${classes.weather_details} ${classes[globalTheme]}`}>
        <div className={`${classes.weather_detail} ${classes[globalTheme]}`}>
          <UilTemperature
            size={20}
            className={`${classes.weather_details_icon} ${classes[globalTheme]}`}
          />
          <p className={`${classes[globalTheme]}`}>Real Feel</p>
          <span className={`${classes[globalTheme]}`}>
            {`${feels_like.toFixed()}°`}
          </span>
        </div>
        <div className={`${classes.weather_detail} ${classes[globalTheme]}`}>
          <UilArrowUp
            size={20}
            className={`${classes.weather_details_icon} ${classes[globalTheme]}`}
          />
          <p className={`${classes[globalTheme]}`}>High</p>
          <span className={`${classes[globalTheme]}`}>
            {`${temp_max.toFixed()}°`}
          </span>
        </div>
        <div className={`${classes.weather_detail} ${classes[globalTheme]}`}>
          <UilArrowDown
            size={20}
            className={`${classes.weather_details_icon} ${classes[globalTheme]}`}
          />
          <p className={`${classes[globalTheme]}`}>Low</p>
          <span className={`${classes[globalTheme]}`}>
            {`${temp_min.toFixed()}°`}
          </span>
        </div>
      </div>

      <div className={`${classes.weather_details} ${classes[globalTheme]}`}>
        <div className={`${classes.weather_detail} ${classes[globalTheme]}`}>
          <UilSun
            size={20}
            className={`${classes.weather_details_icon} ${classes[globalTheme]}`}
          />
          <p className={`${classes[globalTheme]}`}>Sunrise</p>
          <span className={`${classes[globalTheme]}`}>
            {units === "metric"
              ? formatToLocalTime(sunrise, timezone, "HH:mm")
              : formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </div>

        <div className={`${classes.weather_detail} ${classes[globalTheme]}`}>
          <UilSunset
            size={20}
            className={`${classes.weather_details_icon} ${classes[globalTheme]}`}
          />
          <p className={`${classes[globalTheme]}`}>Sunset</p>
          <span className={`${classes[globalTheme]}`}>
            {units === "metric"
              ? formatToLocalTime(sunset, timezone, "HH:mm")
              : formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </div>
        <div className={`${classes.weather_detail} ${classes[globalTheme]}`}>
          <p className={`${classes[globalTheme]}`}>UVI</p>
          <span className={`${classes[globalTheme]}`}>
            {`${uvi.toFixed()}`}
          </span>
        </div>
      </div>

      <div className={`${classes.weather_details} ${classes[globalTheme]}`}>
        <div className={`${classes.weather_detail} ${classes[globalTheme]}`}>
          <UilTear
            size={20}
            className={`${classes.weather_details_icon} ${classes[globalTheme]}`}
          />
          <p className={`${classes[globalTheme]}`}>Humidity</p>
          <span className={`${classes[globalTheme]}`}>{`${humidity}%`}</span>
        </div>
        <div className={`${classes.weather_detail} ${classes[globalTheme]}`}>
          <UilWind
            size={20}
            className={`${classes.weather_details_icon} ${classes[globalTheme]}`}
          />
          <p className={`${classes[globalTheme]}`}>Wind speed</p>
          <span className={`${classes[globalTheme]}`}>
            {`${speed.toFixed()}`}
            {units === "metric" ? "km/h " : "mph"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TemperatureDetails;
