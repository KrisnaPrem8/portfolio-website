import React from 'react';
import Header from './Header';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 text-white min-h-screen">
      <Header />
      <main>
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
