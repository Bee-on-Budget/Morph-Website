import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import VehicleShowcase from "./components/VehicleShowcase";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CoreValues from "./components/CoreValues";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <About />
      <VehicleShowcase />

      <Services />
      <CoreValues />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
