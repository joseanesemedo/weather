import "./styles/styles.scss";

import ThemeContextParent from "./ThemeContextParent";

import Home from "./components/Home/Home";
// import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <ThemeContextParent>
      {/* <ThemeSwitcher /> */}
      <Home />
    </ThemeContextParent>
  );
}

export default App;
