import React, { useContext, useState } from "react";
import axios from "axios";

import classes from "./SearchBar.module.scss";

import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

import { ThemeContext } from "../../ThemeContextParent";

const SearchBar = (props) => {
  const { globalTheme } = useContext(ThemeContext);

  const [data, setData] = useState([{}]);
  const [location, setLocation] = useState("");
  const [units, setUnits] = useState("metric");
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const uriEncodedCity = encodeURIComponent(location);

  // const key = process.env.API_KEY;
  // console.log(key);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${uriEncodedCity}&units=${units}&appid=1deddd564f26d5846aa8a73399dc28d1&lang=eng`;

  const searchLocation = (e) => {
    e.preventDefault();
    setLoading(true);
    // if (event.key === "Enter") {
    // axios
    //   .get(url)
    //   .then((response) => {
    //     setError("");
    //     setData(response.data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     setError("Not found");
    //     setLoading(false);
    //   });

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${uriEncodedCity}&units=${units}&appid=1deddd564f26d5846aa8a73399dc28d1&lang=eng`
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });

    props.onSearchData(data, error);
    // }
  };

  return (
    <form
      className={`${classes.search_bar} ${classes[globalTheme]}`}
      onSubmit={searchLocation}
    >
      {loading ? <h2>"sdsd"</h2> : <></>}
      <button className={`${classes.icon_btn}`} type="submit">
        <UilSearch className={`${classes.icon} ${classes[globalTheme]}`} />
      </button>
      <input
        className={`${classes.input} ${classes[globalTheme]}`}
        type="text"
        placeholder="Search for location..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        // onKeyDown={searchLocation}
      />
      <button className={`${classes.icon_btn}`}>
        <UilLocationPoint
          className={`${classes.icon} ${classes[globalTheme]}`}
        />
      </button>
    </form>
  );
};

export default SearchBar;
