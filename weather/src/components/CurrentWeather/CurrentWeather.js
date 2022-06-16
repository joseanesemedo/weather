import React from "react";
import classes from "./CurrentWeather.module.scss";
import PartlyCloudy from "../../assets/icons/PartlyCloudy";
// import Cloudy from "../../assets/icons/Cloudy";
// import Sun from "../../assets/icons/Sun";
// import Cloud from "../../assets/icons/Cloud";

const CurrentWeather = (props) => {
  const { data, error } = props;

  return (
    <div className={classes.weather_box}>
      <div className={classes.weather_info}>
        <div className={classes.city_name}>{data.name}</div>
        {error ? <h2>Error</h2> : <></>}
        {data.weather ? <h2>{data.weather[0].description}</h2> : null}
      </div>
      <div className={classes.icon_container}>
        <PartlyCloudy />
      </div>
    </div>
  );
};

export default CurrentWeather;
