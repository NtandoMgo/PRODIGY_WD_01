import React from "react";
import Navbar from "./components/nav/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home";
import About from "./components/AboutPage/About";
import Services from "./components/ServicesPage/Services";
import Contact from "./components/ContactPage/Contact";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/contact-me" element={<Contact/>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
