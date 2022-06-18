import "./styles/styles.scss";

import ThemeContextParent, {
  DAY_THEME,
  NIGHT_THEME,
} from "./ThemeContextParent";

import Home from "./components/Home/Home";

function App() {
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
