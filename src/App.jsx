import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Pops from "./pages/Pops";

function App() {
  const [currentLocation, setCurrentLocation] = useState("/");

  return (
    <>
      <nav>
        <button onClick={() => setCurrentLocation("/")} type="button">
          Home
        </button>
        <button onClick={() => setCurrentLocation("/about")} type="button">
          About
        </button>
        <button onClick={() => setCurrentLocation("/pops")} type="button">
          Pops
        </button>
      </nav>
      <main>
        {currentLocation === "/" && <Home />}
        {currentLocation === "/about" && <About />}
        {currentLocation === "/pops" && <Pops />}
      </main>
    </>
  );
}

export default App;
