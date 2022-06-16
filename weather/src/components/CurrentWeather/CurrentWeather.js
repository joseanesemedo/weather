import React from "react";
import classes from "./CurrentWeather.module.scss";
import PartlyCloudy from "../../assets/icons/PartlyCloudy";
import Cloudy from "../../assets/icons/Cloudy";
import Sun from "../../assets/icons/Sun";
import Cloud from "../../assets/icons/Cloud";

const CurrentWeather = (props) => {
  const { data } = props;

  return (
    <div className={classes.weather_box}>
      {/* <div className={classes.icon_container}> */}
      <div className={classes.weather_box_grid}>
        <div className={classes.test}>
          {data.name}
          {data.weather ? <h2>{data.weather[0].description}</h2> : null}
        </div>
        <div className={classes.icon_container}>
          {/* {" "}
          <PartlyCloudy />{" "} */}
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
