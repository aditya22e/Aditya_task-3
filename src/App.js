// src/App.js
import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Details from './components/Details/Details';
import Sponsors from './components/Sponsors/Sponsors';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import Timeline from './components/Timeline/Timeline';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Details />
      <Timeline />
      <Sponsors />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;