import React from "react";

import { CuisineListContainer, LocationSearchForm } from "../index";

const Homepage = (props) => {
  const { setUserInput, handleButtonClick } = props;

  return (
    <>
      <LocationSearchForm
        setUserInput={setUserInput}
        handleButtonClick={handleButtonClick}
      />
      <CuisineListContainer />
    </>
  );
};

export { Homepage };
