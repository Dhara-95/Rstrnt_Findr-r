import React from "react";

import Header from "../../components/Header";
import Homepage from "../Homepage";
import "./App.css";

function App() {
  return (
    <div className="App container lg:w-4/5">
      <Header />
      <Homepage />
    </div>
  );
}

export default App;
