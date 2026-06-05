import Navbar from "../components/Navbar.jsx";
import Home from "../pages/Home.jsx";
import "./App.css";

function App() {

  return (
    <>
      <Navbar />
      <div style={{ marginLeft: "76px" }}>
        <Home />
      </div>
    </>
  );
}

export default App;
