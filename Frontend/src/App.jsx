import Navbar from "../components/Navbar.jsx";
import Home from "../pages/Home.jsx";
import "./App.css";
import { ReactLenis } from 'lenis/react'
import Chatbot from "../components/Chatbot.jsx";
function App() {

  return (
    <>
      <ReactLenis root />
      <Navbar />
      <div style={{ marginLeft: "76px" }}>
        <Home />
      </div>
      <div style={{ marginLeft: "76px" }} >
        <Chatbot />
      </div>
    </>
  );
}

export default App;
