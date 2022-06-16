import "./styles.scss";

import SearchBar from "./components/SearchBar/SearchBar";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";

function App() {
  return (
    <div className="app">
      <SearchBar />
      <CurrentWeather />
      <CurrentWeather />
      <CurrentWeather />
      <CurrentWeather />
    </div>
  );
}

export default App;
