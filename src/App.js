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
import HowWeWork from "./components/HowWeWork";
import { ContactProvider } from "./context/ContactContext";

function App() {
  return (
    <ContactProvider>
      <div className="font-sans">
        <Header />
        <Hero />
        <HowWeWork />
        <About />
        <Pricing />
        <Services />
        <CoreValues />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </ContactProvider>
  );
}

export default App;
