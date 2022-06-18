import React, { useContext, useState } from "react";
import classes from "./Home.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import Header from "../Header/Header";

import { ThemeContext } from "../../ThemeContextParent";

const Home = () => {
  const { globalTheme } = useContext(ThemeContext);

  const [data, setData] = useState();
  const [error, setError] = useState("");

  const addData = (data) => {
    setData(data);
    setError(error);
  };

  return (
    <div className={`${classes.home} ${classes[globalTheme]}`}>
      <div className={classes.container}>
        <Header />
        <SearchBar onSearchData={addData} />
        {data ? <CurrentWeather data={data} error={error} /> : <></>}
        {data ? <CurrentWeather data={data} error={error} /> : <></>}
      </div>
    </div>
  );
};

export default Home;
