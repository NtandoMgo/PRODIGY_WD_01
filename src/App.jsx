import React from "react";
import Navbar from "./components/nav/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home";
import About from "./components/AboutPage/About";
import Services from "./components/ServicesPage/Services";
import Contact from "./components/ContactPage/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<About/>}></Route>
          <Route path="/my-work" element={<Services/>}></Route>
          <Route path="/contact-me" element={<Contact/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
