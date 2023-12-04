import { useSelector } from "react-redux";

const App = () => {
  const api = useSelector((state) => state.api)

  return (
    <div>
      <p>Simple react Weather App with OpenWeatherMap Api ({api.base})</p>
    </div>
  );
}

export default App;
