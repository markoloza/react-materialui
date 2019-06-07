import React from "react";
import Navbar from "./components/Navbar";
import Blog from "./views/blog/Blog";
import News from "./views/news/News";
import Login from "./views/login/Login";
import Weather from "./views/weather/Weather";
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
        <Route path='/login' component={ Login } />
      </div>
    </BrowserRouter>
  );
}

export default App;
