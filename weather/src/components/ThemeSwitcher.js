import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContextParent";

const ThemeSwitcher = (props) => {
  const { globalTheme, setGlobalTheme } = useContext(ThemeContext);
  const { children, changeTheme } = props;

  const onClick = () => {
    setGlobalTheme(changeTheme);
  };

  return <button onClick={onClick}>{children}</button>;
};

export default ThemeSwitcher;
