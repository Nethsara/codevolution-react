import "./App.css";
import { Greet } from "./components/Greet";

function App() {
  return (
    <div className="App">
      <Greet name="Nethsara" numberOfMessages={20} />
    </div>
  );
}

export default App;
