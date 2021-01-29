import React from "react";

import SubmitButton from "../../components/SubmitButton";
import { findRestaurantsLabel } from "../../Labels";

const LocationSearchForm = () => {
  return (
    <div className="py-8 flex justify-around items-center w-1/2 mx-auto">
      <span className="text-grey">{findRestaurantsLabel}</span>
      <div className="rounded bg-white w-1/2 flex py-1 pr-1 pl-5 justify-between">
        <input
          className="w-3/5 focus:outline-none"
          name="address"
          type="text"
          placeholder="W13 3RH"
        />
        <SubmitButton />
      </div>
    </div>
  );
};

export default LocationSearchForm;
