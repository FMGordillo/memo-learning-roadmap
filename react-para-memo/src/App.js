import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// Relative path / ruta relativa (UNIX/Linux/Mac)
import Timer from "./Timer";

// HTML -> DOM
// JAVASCRIPT --> PROTOTYPE
// JAVA --> OBJECT

// state & props
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hola mundo</p>
          <Timer title="Mi reloj :V" />
        </header>
      </div>
    );
  }
}

export default App;
