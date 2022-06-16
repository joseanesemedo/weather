import React from "react";
import classes from "./Header.module.scss";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>Header</h1>
      <a href="/#" className={classes.link_icon}>
        <FaGithub />
      </a>
    </header>
  );
};

export default Header;
