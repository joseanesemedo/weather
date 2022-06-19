import React from "react";
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

const TemperatureDetails = ({
  weather: {
    icon,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    uvi,
    humidity,
    feels_like,
    timezone,
  },
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "#fff",
      }}
    >
      <div>
        <div>
          <UilTemperature size={20} />
          Real Feel:
          <span>{feels_like}</span>
          <img src={iconUrlFromCode(icon)} />
        </div>

        <div>
          <UilTear size={20} />
          Humidity:
          <span>{`${humidity}%`}</span>
        </div>

        <div>
          <UilWind size={20} />
          Wind:
          <span>{`${speed.toFixed()}km/h`}</span>
        </div>
      </div>

      <div>
        <div>
          <UilSun />
          <p>
            Rise: <span>{formatToLocalTime(sunrise, timezone, "HH:mm a")}</span>
          </p>
        </div>

        <div>
          <UilSunset />
          <p>
            Set: <span>{formatToLocalTime(sunset, timezone, "HH:mm")}</span>
          </p>
        </div>

        <div>
          <UilArrowUp />
          <p>
            High: <span>{temp_max}</span>
          </p>
        </div>

        <div>
          <UilArrowDown />
          <p>
            Low: <span>19º</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TemperatureDetails;
