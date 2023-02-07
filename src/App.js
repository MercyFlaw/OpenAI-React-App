import React from 'react';
import './App.css';
import './components/styles.css'
import Navbar from './components/Navbar';
import About from './pages/About'
import Home from './pages/Home'
import { Route, Routes } from "react-router-dom"
//import Vid from "./components/videoBg/Pexels Videos 1908426.mp4";

function App() {
    return (
    <>
      <Navbar />
      <div className="container">
        {/*<video autoPlay loop muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate( -50%, -50%)",
          zIndex: "-1"

        }}>
          <source src = {Vid} type="video/mp4" />
        </video>*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
    )
}

export default App;
