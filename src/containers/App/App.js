import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Homepage from "../Homepage/Homepage";
import "./App.css";

function App() {
  return (
    <div className="App container w-4/5">
      <Header />
      <Homepage />
    </div>
  );
}

export default App;
