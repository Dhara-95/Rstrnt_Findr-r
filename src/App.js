import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App container w-4/5">
      <h1 className="text-5xl text-grey py-6">Rstrnt Findr-r</h1>

      <div className="py-8 flex justify-around items-center w-1/2 mx-auto">
        <span className="text-grey">Find restaurants near you:</span>
        <div className="rounded bg-white w-1/2 flex py-2 px-1 justify-between">
          <input
            className="w-3/5 focus:outline-none"
            name="address"
            type="text"
            placeholder="W13 3RH"
          />
          <button
            className="submit-button rounded py-1.5 px-4"
            type="button"
            value="Find"
          >
            Find
          </button>
        </div>
      </div>

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
