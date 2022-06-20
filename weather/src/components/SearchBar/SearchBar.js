import React, { useContext, useState } from "react";
import axios from "axios";

import classes from "./SearchBar.module.scss";

import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

import { ThemeContext } from "../../ThemeContextParent";

const SearchBar = ({ setQuery, units, setUnits }) => {
  const { globalTheme } = useContext(ThemeContext);

  const [city, setCity] = useState("");

  // const [data, setData] = useState([{}]);
  // const [location, setLocation] = useState("");
  // const [units, setUnits] = useState("metric");
  // const [error, setError] = useState("");

  // const [loading, setLoading] = useState(false);

  // const uriEncodedCity = encodeURIComponent(location);
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${uriEncodedCity}&units=${units}&appid=1deddd564f26d5846aa8a73399dc28d1&lang=eng`;

  // const searchLocation = (e) => {
  //   e.preventDefault();
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${uriEncodedCity}&units=${units}&appid=1deddd564f26d5846aa8a73399dc28d1&lang=eng`
  //   )
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setData(response);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setError(true);
  //       setLoading(false);
  //     });
  //   props.onSearchData(data, error);
  // };

  const handleSearchClick = () => {
    if (city !== "") {
      setQuery({ q: city });
    }
  };

  return (
    <div>
      <form className={`${classes.search_bar} ${classes[globalTheme]}`}>
        <UilSearch
          className={`${classes.icon} ${classes[globalTheme]}`}
          onClick={handleSearchClick}
        />
        <input
          className={`${classes.input} ${classes[globalTheme]}`}
          type="text"
          placeholder="search for city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <UilLocationPoint
          className={`${classes.icon} ${classes[globalTheme]}`}
        />
      </form>

      <div className={`${classes.units}`}>
        <button name="metric">°C</button>
        <button name="imperial">°F</button>
      </div>
    </div>
  );
};

export default SearchBar;
