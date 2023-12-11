import { useState } from "react";
import Search from "./Components/Search/Search";
import WeatherCard from "./Components/Weather/WeatherCard";

const App = () => {
  const [showWeather, setShowWeather] = useState(false);
  
  return (
    <div className="d-flex flex-column align-items-center w-100">
      <Search onFetched={setShowWeather}  />
      {showWeather && <WeatherCard />}
    </div>
  );
}

export default App;
