import React from "react";

function App() {
  return (
    <div className="App">
      <h1>Rstrnt Findr-r</h1>
      <span>Find restaurants near you:</span>
      <form>
        <input name="address" type="text" />
        <input value="Find" type="submit"/>
      </form>
    </div>
  );
}

export default App;
