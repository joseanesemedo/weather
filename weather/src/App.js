import "./styles.scss";

import SearchBar from "./components/SearchBar/SearchBar";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import CurrentWeather2 from "./components/CurrentWeather/CurrentWeather2";

function App() {
  return (
    <div className="app">
      <SearchBar />
      <CurrentWeather />
      <CurrentWeather2 />
    </div>
  );
}

export default App;
