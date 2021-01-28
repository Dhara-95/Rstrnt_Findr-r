import React from "react";

const AddressInput = () => {
  return (
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
          className="submit-button rounded py-1.5 px-4 bg-teal"
          type="button"
          value="Find"
        >
          Find
        </button>
      </div>
    </div>
  );
};

export default AddressInput;
