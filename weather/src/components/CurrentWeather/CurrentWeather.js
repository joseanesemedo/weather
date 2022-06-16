import React from "react";
import classes from "./CurrentWeather.module.scss";
import PartlyCloudy from "../../assets/icons/PartlyCloudy";
import Cloudy from "../../assets/icons/Cloudy";
import Sun from "../../assets/icons/Sun";
import Cloud from "../../assets/icons/Cloud";

const CurrentWeather = (props) => {
  const { data, error } = props;

  return (
    <div className={classes.weather_box}>
      <div className={classes.city_info}>
        <div className={classes.icon_container}>
          <PartlyCloudy />
        </div>
      </div>

      <div className={classes.weather_info}>
        <h1 className={classes.city_name}>{data.name}</h1>
        {error ? <h2>Error</h2> : <></>}
        {data.weather ? <h2>{data.weather[0].description}</h2> : null}
        {data.main ? <h2>{data.main.temp.toFixed()}º</h2> : null}
      </div>
    </div>
  );
};

export default CurrentWeather;
