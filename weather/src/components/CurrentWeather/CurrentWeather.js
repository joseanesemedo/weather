import React from "react";
import classes from "./CurrentWeather.module.scss";
import PartlyCloudy from "../../assets/icons/PartlyCloudy";

const CurrentWeather = () => {
  return (
    <div className={classes.box}>
      <div className={classes.icon_container}>{/* <PartlyCloudy /> */}</div>
    </div>
  );
};

export default CurrentWeather;
