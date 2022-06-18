import "./styles/styles.scss";

import ThemeContextParent, {
  DAY_THEME,
  NIGHT_THEME,
} from "./ThemeContextParent";

import Home from "./components/Home/Home";
import { useContext } from "react";

// import { ThemeContext } from "./ThemeContextParent";
function App() {
  // const { globalTheme, setGlobalTheme } = useContext(ThemeContext);

  // setGlobalTheme("NIGHT_THEME");

  // let test;
  // var t = new Date().getHours();
  // if (t < 10) {
  //   test = "red";
  // } else if (t < 20) {
  //   test = "#aea";
  // } else {
  //   test = "blue";
  // }

  return (
    <ThemeContextParent>
      <Home></Home>
    </ThemeContextParent>
  );
}

export default App;
