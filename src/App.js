import { useState } from "react";
import { Nav } from "./Components/Nav";
import { Home } from "./Components/Home";
import { Bio } from "./Components/Bio";
import { Progetti } from "./Components/Progetti";
import { Contattami } from "./Components/Contattami";

function App() {
  const [menu, setMenu] = useState(false);
  function menuClick() { setMenu(!menu); }

  return (
    <div className="App">
      <Nav cambioMenu={menuClick} menu={menu} />
      <Home />
      <Bio />
      <Progetti />
      <Contattami />
    </div>
  );
}

export default App;
