
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import React from "react";
import Nav from './components/Nav/Nav';
import CountryDetails from "./pages/CountryDetails";

function App() {
  return (

    <Router>
      <div className="App">
        <Nav></Nav>
        <Routes>

          <Route path="/countries/:name" element={<CountryDetails
          />} />
        
        
          <Route path="/" element={<Home
          />} />
        </Routes>


      </div>
    </Router>

  );
}


export default App;


