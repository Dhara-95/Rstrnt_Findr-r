import React from "react";

import { LocationSearchForm } from "../LocationSearchForm";
import { CuisineListContainer } from "../CuisineListContainer";

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
