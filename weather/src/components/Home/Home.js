import React, { useContext, useEffect, useState } from "react";
import classes from "./Home.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
// import Header from "../Header/Header";
import Forecast from "../Forecast/Forecast";
import ThemeSwitcher from "../ThemeSwitcher";
import Loading from "../UI/Loading";

import { ThemeContext } from "../../ThemeContextParent";
import getFormattedWeatherData from "../../services/weatherService";

const Home = () => {
  const { globalTheme } = useContext(ThemeContext);

  const [query, setQuery] = useState({ q: "porto" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  // fetch data and reload every time query or unit changes
  useEffect(() => {
    setLoading(true);
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setLoading(false);
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  console.log(weather);

  return (
    <main className={`${classes.home} ${classes[globalTheme]}`}>
      <div className={classes.container}>
        {/* <Header /> */}
        {loading ? <Loading /> : <></>}
        <SearchBar setQuery={setQuery} units={units} setUnits={setUnits} />
        {weather && (
          <div className={classes.forecast_container}>
            <ThemeSwitcher weather={weather} />

            <CurrentWeather weather={weather} units={units} />
            {/* <TemperatureDetails weather={weather} units={units} /> */}
            <Forecast title={"Hourly Forecast"} items={weather.hourly} />
            <Forecast title={"Daily Forecast"} items={weather.daily} />
          </div>
        )}

        {/* {data ? <CurrentWeather data={data} error={error} /> : <></>} */}
      </div>
    </main>
  );
};

export default Home;
