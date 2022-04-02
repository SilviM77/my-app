import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
  <div className="App">
    <div className="container">
    Weather App
    <Weather  defaultCity="New York"/>
  <footer>
    This project was created by Silvia Marconi and is
  <a href="https://github.com/SilviM77/my-react-weather-app"
  target="_blank"
  > 
    open-sourced on GitHub
  </a>
  </footer>
    </div>
    </div>
    );
}

