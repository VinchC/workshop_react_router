import Navbar from "./pages/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
