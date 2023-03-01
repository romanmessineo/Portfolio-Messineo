import React from "react";
import { BrowserRouter } from "react-router-dom";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import FooterBottom from "./components/FooterBottom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="gradient-background ">
        <Header />
        <Nav />
        <Banner />
        <About />
        <Services />
        <Work />
        <Contact />
        <FooterBottom />
      </div>
    </BrowserRouter>
  );
};

export default App;
