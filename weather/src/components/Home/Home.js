import React, { useContext, useState } from "react";
import classes from "./Home.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import Header from "../Header/Header";
import TemperatureDetails from "../TemperatureDetails/TemperatureDetails";
import Forecast from "../Forecast/Forecast";

import { ThemeContext } from "../../ThemeContextParent";
import getWeatherData from "../../assets/weatherService";

const Home = () => {
  const fetchWeather = async () => {
    const data = await getWeatherData("weather", { q: "praia" });
    console.log(data);
  };

  fetchWeather();

  const { globalTheme } = useContext(ThemeContext);

  const [data, setData] = useState();
  const [error, setError] = useState("");

  const addData = (data) => {
    setData(data);
    setError(error);
  };

  return (
    <main className={`${classes.home} ${classes[globalTheme]}`}>
      <div className={classes.container}>
        <Header />
        <SearchBar onSearchData={addData} />

        <CurrentWeather data={data} error={error} />
        <TemperatureDetails />
        <Forecast title={"Hourly Forecast"} />
        <Forecast title={"Daily Forecast"} />

        {/* {data ? <CurrentWeather data={data} error={error} /> : <></>} */}
      </div>
    </main>
  );
};

export default Home;
