import React, { useContext, useState } from "react";
import classes from "./CurrentWeather.module.scss";
import PartlyCloudy from "../../assets/icons/PartlyCloudy";
import Cloudy from "../../assets/icons/Cloudy";
import Sun from "../../assets/icons/Sun";
import Cloud from "../../assets/icons/Cloud";
import { ThemeContext } from "../../ThemeContextParent";
import { formatToLocalTime } from "../../services/weatherService";

function CurrentWeather({
  weather: { temp, description, main, dt, timezone, name, country, icon },
}) {
  const { globalTheme } = useContext(ThemeContext);

  const [time, setTime] = useState("");

  // console.log(data.weather.icon);

  // const test = () => {
  //   return (
  //     <div>{data.weather.icon === "02d" ? <PartlyCloudy /> : <Sun />}</div>
  //   );
  // };

  // const convertTime = (unix) => {
  //   let unix_timestamp = 1655481303;
  //   var date = new Date(unix_timestamp * 1000);
  //   var hours = date.getHours();
  //   var minutes = "0" + date.getMinutes();
  //   var seconds = "0" + date.getSeconds();

  //   var formattedTime =
  //     hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  //   console.log(formattedTime);
  //   setTime(formattedTime);
  // };

  // ! city name, date time and weather / temperature

  return (
    <div className={`${classes.weather_box} ${classes[globalTheme]}`}>
      <div className={classes.weather_info}>
        <div className={classes.temperature}>{`${temp.toFixed()}°`}</div>
        <div className={classes.description_container}>
          <div className={classes.weather_description}>{`${description}`}</div>
          <h1 className={classes.city_name}>{`${name}-${icon}`}</h1>
        </div>
        {formatToLocalTime(dt, timezone, "HH:mm a")}
      </div>

      <div className={classes.city_info}>
        <div className={classes.icon_container}>
          {" "}
          <PartlyCloudy />{" "}
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
