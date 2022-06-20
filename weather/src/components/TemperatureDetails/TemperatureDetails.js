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
    current: { uvi },
    humidity,
    feels_like,
    timezone,
  },
  units,
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
          <span>{`${feels_like.toFixed()}°`}</span>
          <img src={iconUrlFromCode(icon)} />
        </div>

        <div>
          <UilTear size={20} />
          Humidity:
          <span>{`${humidity}%`}</span>
        </div>

        <div>
          <UilTear size={20} />
          UVI:
          <span>{`${uvi.toFixed()}`}</span>
        </div>

        <div>
          <UilWind size={20} />
          Wind:
          <span>
            {`${speed.toFixed()}`}
            {/* {units === "metric" ? "km/h" : "mph"} */}
          </span>
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
            High: <span>{`${temp_max.toFixed()}°`}</span>
          </p>
        </div>

        <div>
          <UilArrowDown />
          <p>
            Low: <span>{`${temp_min.toFixed()}°`}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TemperatureDetails;
