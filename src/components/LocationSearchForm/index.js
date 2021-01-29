import React from "react";

const LocationSearchForm = () => {
  return (
    <div className="py-8 flex justify-around items-center w-1/2 mx-auto">
      <span className="text-grey">Find restaurants near you:</span>
      <div className="rounded bg-white w-1/2 flex py-1 pr-1 pl-5 justify-between">
        <input
          className="w-3/5 focus:outline-none"
          name="address"
          type="text"
          placeholder="W13 3RH"
        />
        <button
          className="submit-button rounded py-2 px-8 bg-teal hover:bg-teal-hover active:bg-teal-click focus:outline-none"
          type="button"
          value="Find"
        >
          Find
        </button>
      </div>
    </div>
  );
};

export default LocationSearchForm;
