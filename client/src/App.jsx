import "./App.css";

// components
import Structure from "./components/Structure";
import { SideBarActivate } from "./components/contextAPI/SideBarActivate";

function App() {
  return (
    <SideBarActivate>
      <Structure />
    </SideBarActivate>
  );
}

export default App;
