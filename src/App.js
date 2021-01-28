import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App bg-black">
      <h1 className="text-5xl text-grey" >Rstrnt Findr-r</h1>
      <span className="text-grey">Find restaurants near you:</span>
      <form>
        <input name="address" type="text" />
        <input className="submit-button" value="Find" type="submit" />
      </form>
      <h2 className="text-2xl text-grey">Find By Cuisine</h2>
      <div className="image-container text-grey">
        <div>image 1</div>
        <div>image 2</div>
        <div>image 3</div>
        <div>image 4</div>
      </div>
    </div>
  );
}

export default App;
