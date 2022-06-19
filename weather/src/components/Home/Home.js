import React, { useContext, useEffect, useState } from "react";
import classes from "./Home.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import Header from "../Header/Header";
import TemperatureDetails from "../TemperatureDetails/TemperatureDetails";
import Forecast from "../Forecast/Forecast";

import { ThemeContext } from "../../ThemeContextParent";
import getFormattedWeatherData from "../../assets/weatherService";

const Home = () => {
  const { globalTheme } = useContext(ThemeContext);

  const [query, setQuery] = useState({ q: "praia" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  // fetch data and reload every time query or unit changes
  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  console.log(weather);
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
        {weather && (
          <div>
            <CurrentWeather weather={weather} />
            <TemperatureDetails weather={weather} />
            <Forecast title={"Hourly Forecast"} />
            <Forecast title={"Daily Forecast"} />
          </div>
        )}

        {/* {data ? <CurrentWeather data={data} error={error} /> : <></>} */}
      </div>
    </main>
  );
};

export default Home;
