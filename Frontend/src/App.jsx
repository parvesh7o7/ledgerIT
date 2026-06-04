import Navbar from "../components/Navbar.jsx";
import Home from "../pages/Home.jsx";

function App() {

  return (
    <>
      <Navbar />
      <div style={{ marginLeft: "76px", padding: "24px" }}>
        <Home />
      </div>
    </>
  );
}

export default App;
