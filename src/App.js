import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CoreValues from "./components/CoreValues";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <About />
      <Pricing />
      <Services />
      <CoreValues />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
