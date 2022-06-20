import React from "react";
import Sun from "../assets/icons/Sun";
import PartlyCloudy from "../assets/icons/PartlyCloudy";
import Cloudy from "../assets/icons/Cloudy";
import Cloud from "../assets/icons/Cloud";

const WeatherIcon = (props) => {
  let Icon;

  switch (props.code) {
    case "01d":
      Icon = <Sun />;
      break;

    case "02d":
      Icon = <PartlyCloudy />;
      break;

    case "03d":
      Icon = <Cloud />;
      break;

    case "04d":
      Icon = <Cloudy />;
      break;

    default:
      Icon = <PartlyCloudy />;
      break;
  }

  return <div>{Icon}</div>;
};

export default WeatherIcon;
