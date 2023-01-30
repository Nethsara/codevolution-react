import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const personName = {
    first: "Nethsara",
    last: "Siyum",
  };

  const names = [
    {
      first: "Nethsara",
      last: "Siyum",
    },
    {
      first: "Sanduni",
      last: "Tharaka",
    },
  ];

  return (
    <div className="App">
      <Greet name="Nethsara" numberOfMessages={20} isLogged={true} />
      <Person name={personName} />
      <PersonList names={names} />
    </div>
  );
}

export default App;
