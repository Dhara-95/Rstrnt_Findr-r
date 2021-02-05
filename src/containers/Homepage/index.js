import React from "react";

import { CuisineListContainer, LocationSearchForm } from "../index";

const Homepage = (props) => {
  const { setUserInput } = props;

  return (
    <>
      <LocationSearchForm setUserInput={setUserInput} />
      <CuisineListContainer />
    </>
  );
};

export { Homepage };
