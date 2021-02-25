import React from "react";

import { LoadingConfirmation, RestaurantsNear } from "../../components";
import { RestaurantList } from "../index";

const SearchResults = (props) => {
  const {
    userInput,
    isLoading,
    data,
    handleOnChange,
    handleButtonClick,
  } = props;

  return (
    <>
      <RestaurantsNear userInput={userInput} />
      {isLoading && <LoadingConfirmation />}
      <RestaurantList
        data={data}
        handleOnChange={handleOnChange}
        isLoading={isLoading}
        handleButtonClick={handleButtonClick}
      />
    </>
  );
};

export { SearchResults };
