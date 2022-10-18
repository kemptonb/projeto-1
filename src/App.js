import React from "react";
import { Header, About, Work, Skills, Testimonial, Contact } from "./container"
import "./App.scss"
import { Navbar } from './components'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />  
      <Work />
      <Skills /> 
      <Testimonial /> 
      <Contact /> 
    </div>
    );
};

export default App;
