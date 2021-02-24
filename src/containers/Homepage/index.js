import React from "react";

import { CuisineListContainer, LocationSearchForm } from "../index";

const Homepage = (props) => {
  const { setUserInput, handleFetch } = props;

  return (
    <>
      <LocationSearchForm
        setUserInput={setUserInput}
        handleFetch={handleFetch}
      />
      <CuisineListContainer />
    </>
  );
};

export { Homepage };
