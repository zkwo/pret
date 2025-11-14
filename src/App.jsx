import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Sections/Home';
import About from './components/Sections/About';
import Projects from './components/Sections/Projects'; 
import Contact from './components/Sections/Contact'; 

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        <Home />
        <About />
        <Projects /> 
        <Contact />
      </main>
    </div>
  );
}

export default App;
