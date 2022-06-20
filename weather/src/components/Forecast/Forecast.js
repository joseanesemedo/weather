import React, { useContext } from "react";
import { iconUrlFromCode } from "../../services/weatherService";
import classes from "./Forecast.module.scss";
import { ThemeContext } from "../../ThemeContextParent";

function Forecast({ title, items }) {
  const { globalTheme } = useContext(ThemeContext);

  return (
    <div className={`${classes.forecast_container} ${classes[globalTheme]}`}>
      <div>
        <p
          className={`${classes.forecast_container_title} ${classes[globalTheme]}`}
        >
          {title}
        </p>
      </div>

      <div className={`${classes.forecast_box} ${classes[globalTheme]}`}>
        {items.map((item, i) => (
          <div
            key={i}
            className={`${classes.forecast} ${classes[globalTheme]}`}
          >
            <p
              className={`${classes.forecast_title} ${classes[globalTheme]}`}
            >{`${item.title}`}</p>
            <img src={iconUrlFromCode(item.icon)} style={{ width: 50 }} />
            <p
              className={`${classes.forecast_temp} ${classes[globalTheme]}`}
            >{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
