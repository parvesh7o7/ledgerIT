import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar.jsx";
import Home from "../pages/Home.jsx";
import "./App.css";
import { ReactLenis } from 'lenis/react'
import Chatbot from "../components/Chatbot.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const refreshDashboardRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <>
      <ReactLenis root />
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div style={{ marginLeft: "76px" }}>
        <Home isLoggedIn={isLoggedIn} onRefreshReady={(fn) => { refreshDashboardRef.current = fn; }} />
      </div>
      {isLoggedIn && (
        <div style={{ marginLeft: "76px" }}>
          <Chatbot onTransactionRecorded={() => refreshDashboardRef.current?.()} />
        </div>
      )}
    </>
  );
}

export default App;
