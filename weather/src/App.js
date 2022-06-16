import "./styles.scss";

import SearchBar from "./components/SearchBar/SearchBar";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Header from "./components/Header/Header";
import { useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  const addData = (data) => {
    setData(data);
    setError(error);
  };

  return (
    <div className="app">
      <Header />
      <SearchBar onSearchData={addData} />
      <CurrentWeather data={data} error={error} />
    </div>
  );
}

export default App;
