import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Photography from './components/Photography';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Photography />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;