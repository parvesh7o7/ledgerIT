import Navbar from "../components/Navbar.jsx";
import Home from "../pages/Home.jsx";
import "./App.css";
import { ReactLenis } from 'lenis/react'
function App() {

  return (
    <>
      <ReactLenis root />
      <Navbar />
      <div style={{ marginLeft: "76px" }}>
        <Home />
      </div>
    </>
  );
}

export default App;
