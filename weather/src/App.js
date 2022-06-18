import "./styles/styles.scss";

import ThemeContextParent from "./ThemeContextParent";

import Home from "./components/Home/Home";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  // const { globalTheme, setGlobalTheme } = useContext(ThemeContext);

  // setGlobalTheme("NIGHT_THEME");

  return (
    <ThemeContextParent>
      <ThemeSwitcher />
      {/* <ThemeSwitcher changeTheme={NIGHT_THEME}>Night</ThemeSwitcher> */}
      <Home></Home>
    </ThemeContextParent>
  );
}

export default App;
