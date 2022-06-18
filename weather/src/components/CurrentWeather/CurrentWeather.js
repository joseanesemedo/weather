import React, { useContext, useState } from "react";
import classes from "./CurrentWeather.module.scss";
import PartlyCloudy from "../../assets/icons/PartlyCloudy";
import Cloudy from "../../assets/icons/Cloudy";
import Sun from "../../assets/icons/Sun";
import Cloud from "../../assets/icons/Cloud";
import { ThemeContext } from "../../ThemeContextParent";

const CurrentWeather = (props) => {
  const { globalTheme } = useContext(ThemeContext);

  const { data, error } = props;
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

  return (
    <div className={`${classes.weather_box} ${classes[globalTheme]}`}>
      {data ? (
        <>
          <div className={classes.weather_info}>
            <div className={classes.temperature}>
              {data.main ? <h2>{data.main.temp.toFixed()}º</h2> : null}
            </div>
            <div className={classes.description_container}>
              <div className={classes.weather_description}>
                {data.weather ? <h2>{data.weather[0].description}</h2> : null}
              </div>
              <h1 className={classes.city_name}>{data.name}</h1>
            </div>
          </div>

          <div className={classes.city_info}>
            <div className={classes.icon_container}>
              {/* <PartlyCloudy /> */}
            </div>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CurrentWeather;
