import React from "react";
import "./App.css";

function App() {
  return (
    <div class="App">
      <header class="header">
        <div class="logo-box">
          <img
            src={require("../src/img/logo-white.png")}
            alt="Logo"
            class="logo"
          />
        </div>
        <div class="text-box">
          <h1 class="heading-primary">
            <span class="heading-primary-main">Outdoors</span>
            <span class="heading-primary-sub"> is where life happens</span>
          </h1>
          <a href="#" class='btn btn-white btn-animated'>Discovery our tours</a>
        </div>
      </header>
    </div>
  );
}

export default App;
