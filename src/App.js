import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App container w-4/5">
      <h1 className="text-5xl text-grey py-6" >Rstrnt Findr-r</h1>
      <div className="py-8 flex justify-center">
        <span className="text-grey">Find restaurants near you:</span>
        <form>
          <input name="address" type="text" />
          <input className="submit-button" value="Find" type="submit" />
        </form>
      </div >
      <div className="py-8">
        <h2 className="text-2xl text-grey">Find By Cuisine</h2>
        <div className="image-container text-grey flex justify-around">
          <div>image 1</div>
          <div>image 2</div>
          <div>image 3</div>
          <div>image 4</div>
        </div>
      </div>
    </div>
  );
}

export default App;
