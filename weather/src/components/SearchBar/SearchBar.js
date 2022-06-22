import React, { useContext, useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { ThemeContext } from "../../ThemeContextParent";
import classes from "./SearchBar.module.scss";

const SearchBar = ({ setQuery, units, setUnits }) => {
  const { globalTheme } = useContext(ThemeContext);

  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") {
      setQuery({ q: city });
    }
  };

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;

    if (units !== selectedUnit) {
      setUnits(selectedUnit);
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({ lat, lon });
        setCity("");
      });
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
          onClick={handleLocationClick}
        />
      </form>

      <div className={`${classes.units}`}>
        <button
          className={`${classes.unit_btn} ${classes[globalTheme]}`}
          name="metric"
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <button
          className={`${classes.unit_btn} ${classes[globalTheme]}`}
          name="imperial"
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
