import React from "react";
import Sun from "../assets/icons/Sun";
import PartlyCloudy from "../assets/icons/PartlyCloudy";
import Cloudy from "../assets/icons/Cloudy";
import Cloud from "../assets/icons/Cloud";
import Rain from "../assets/icons/Rain";
import Snow from "../assets/icons/Snow";

import classes from "./WeatherIcon.module.scss";

const WeatherIcon = (props) => {
  let Icon;

  switch (props.code) {
    // clear sky day
    case "01d":
      Icon = <Sun />;
      break;

    // few clouds
    case "02d":
      Icon = <PartlyCloudy />;
      break;

    // scattered clouds
    case "03d":
      Icon = <Cloud className={classes.float} />;
      break;

    // broken clouds
    case "04d":
      Icon = <Cloudy className={classes.float} />;
      break;

    // shower rain
    case "09d":
      Icon = <Cloudy className={classes.float} />;
      break;

    // rain
    case "10d":
      Icon = <Rain className={classes.float} />;
      break;

    // thunderstorm
    case "11d":
      Icon = <Cloudy className={classes.float} />;
      break;

    // snow
    case "13d":
      Icon = <Snow className={classes.float} />;
      break;

    // mist
    case "50d":
      Icon = <Cloudy className={classes.float} />;
      break;

    // TODO add night
    default:
      Icon = <PartlyCloudy />;
      break;
  }

  return <div>{Icon}</div>;
};

export default WeatherIcon;
