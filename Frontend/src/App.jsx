import { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import "./App.css";
import { ReactLenis } from 'lenis/react'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <>
      <ReactLenis root />
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div style={{ marginLeft: "76px" }}>
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

    </>
  );
}

export default App;

