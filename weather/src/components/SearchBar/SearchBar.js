import React, { useContext, useState } from "react";
import axios from "axios";

import classes from "./SearchBar.module.scss";
import { FaSearch, FaSearchLocation } from "react-icons/fa";

import { ThemeContext } from "../../ThemeContextParent";

const SearchBar = (props) => {
  const { globalTheme } = useContext(ThemeContext);

  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const key = process.env.API_KEY;
  console.log(key);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=1deddd564f26d5846aa8a73399dc28d1&lang=eng`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios
        .get(url)
        .then((response) => {
          setError("");
          setData(response.data);
        })
        .catch((error) => {
          setError("Not found");
        });
      props.onSearchData(data, error);
    }
  };

  return (
    <div className={`${classes.search_bar} ${classes[globalTheme]}`}>
      <FaSearch className={classes.icon} />
      <input
        type="text"
        placeholder="Search for location..."
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyDown={searchLocation}
      ></input>
      <FaSearchLocation className={classes.icon} />
    </div>
  );
};

export default SearchBar;
