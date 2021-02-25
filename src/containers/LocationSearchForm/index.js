import React from "react";

import { labels } from "../../Labels";
import { SubmitButton } from "../../components";

const LocationSearchForm = (props) => {
  const { setUserInput, handleFetch } = props;
  const { findRestaurants, findButton } = labels;

  return (
    <div className="py-8 flex flex-col lg:justify-around lg:flex-row xl:justify-around xl:flex-row 2xl:justify-around 2xl:flex-row items-center w-1/2 mx-auto">
      <span className="text-grey">{findRestaurants}</span>
      <div className="rounded bg-white lg:w-1/2 xl:w-1/2 2xl:w-1/2 flex py-1 pr-1 pl-5 justify-between">
        <input
          onChange={(event) => setUserInput(event.target.value)}
          className="w-3/5 focus:outline-none"
          name="postcode"
          type="text"
          placeholder="W13 3RH"
        />
        <SubmitButton
          label={findButton}
          value={findButton}
          handleFetch={handleFetch}
        />
      </div>
    </div>
  );
};

export { LocationSearchForm };
