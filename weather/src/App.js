import "./styles.scss";

import SearchBar from "./components/SearchBar/SearchBar";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <CurrentWeather />
    </div>
  );
}

export default App;
