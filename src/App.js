import React from "react";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import News from "./components/News";
import Weather from "./components/Weather";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={ News } />
        <Route path='/weather' component={ Weather } />
        <Route path='/blog' component={ Blog } />
      </div>
    </BrowserRouter>
  );
}

export default App;
