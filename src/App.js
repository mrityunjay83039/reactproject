import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Home from './Home';
import { Routes, Route } from "react-router-dom";
import Notfound from './Notfound';
import Navbar from './Navbar';


const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Contact" element={<Contact/>} /> 
        <Route path="*" element={<Notfound/>}/>
        
      </Routes>
    </>
  );
};

export default App;
