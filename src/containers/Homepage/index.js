import React from "react";

import { CuisineListContainer } from "../CuisineListContainer";
import { LocationSearchForm } from "../LocationSearchForm";

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
