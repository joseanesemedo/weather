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

const TemperatureDetails = () => {
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
          <span>12</span>
        </div>

        <div>
          <UilTear size={20} />
          Humidity:
          <span>60%</span>
        </div>

        <div>
          <UilWind size={20} />
          Wind:
          <span>12 km/h</span>
        </div>
      </div>

      <div>
        <div>
          <UilSun />
          <p>
            Rise: <span>06:35am</span>
          </p>
        </div>

        <div>
          <UilSunset />
          <p>
            Set: <span>19:35am</span>
          </p>
        </div>

        <div>
          <UilArrowUp />
          <p>
            High: <span>24º</span>
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
