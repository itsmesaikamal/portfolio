import React from 'react';
import CustomNavbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css';

const App = () => (
  <div className="App">
    <CustomNavbar />
    <Home />
    <Skills />
    <Project/>
    <Contact/>
    <Footer/>
  </div>
);

export default App;
