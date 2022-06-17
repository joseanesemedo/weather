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

  let test;
  var t = new Date().getHours();
  if (t < 10) {
    test = "red";
  } else if (t < 20) {
    test = "#aea";
  } else {
    test = "blue";
  }

  return (
    <div className="app" style={{ backgroundColor: test }}>
      <Header />
      <SearchBar onSearchData={addData} />
      <CurrentWeather data={data} error={error} />
      {test}
    </div>
  );
}

export default App;
