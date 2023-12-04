import { useSelector } from "react-redux";

const App = () => {
  const api = useSelector((state) => state.api)

  return (
    <div>
      {api.key}
    </div>
  );
}

export default App;
