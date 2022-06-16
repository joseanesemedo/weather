import React from "react";
import classes from "./SearchBar.module.scss";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className={classes.search_bar}>
      <FaSearch className={classes.icon} />
      <input type={"text"} placeholder="Search for location..."></input>
    </div>
  );
};

export default SearchBar;
