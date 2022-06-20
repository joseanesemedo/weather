import React from "react";
import Sun from "../assets/icons/Sun";
import PartlyCloudy from "../assets/icons/PartlyCloudy";
import Cloudy from "../assets/icons/Cloudy";
import Cloud from "../assets/icons/Cloud";

const WeatherIcon = (props) => {
  let Icon;

  switch (props.code) {
    // clear sky
    case "01d":
      Icon = <Sun />;
      break;

    // few clouds
    case "02d":
      Icon = <PartlyCloudy />;
      break;

    // scattered clouds
    case "03d":
      Icon = <Cloud />;
      break;

    // broken clouds
    case "04d":
      Icon = <Cloudy />;
      break;

    // shower rain
    case "09d":
      Icon = <Cloudy />;
      break;

    // rain
    case "10d":
      Icon = <Cloudy />;
      break;

    // thunderstorm
    case "11d":
      Icon = <Cloudy />;
      break;

    // snow
    case "13d":
      Icon = <Cloudy />;
      break;

    // mist
    case "50d":
      Icon = <Cloudy />;
      break;

    default:
      Icon = <PartlyCloudy />;
      break;
  }

  return <div>{Icon}</div>;
};

export default WeatherIcon;
