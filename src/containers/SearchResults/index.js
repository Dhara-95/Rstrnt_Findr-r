import React, { useEffect, useState } from "react";

import { fetchRestaurantData } from "./searchResultsUtils";
import { FilterResults } from "../../components/FilterResults";
import { LoadingConfirmation, RestaurantsNear } from "../../components";
import { RestaurantList } from "../index";

const SearchResults = (props) => {
  const { userInput } = props;
  const [restaurantData, updateRestaurantData] = useState([]);
  const [isLoading, updateLoadingState] = useState(false);

  useEffect(() => {
    fetchRestaurantData(userInput, updateRestaurantData, updateLoadingState);
  }, [userInput]);

  return (
    <>
      <RestaurantsNear userInput={userInput} />
      {isLoading && <LoadingConfirmation />}
      <FilterResults
        businesses={restaurantData}
        updateRestaurantData={updateRestaurantData}
      />
      <RestaurantList data={restaurantData} />
    </>
  );
};

export { SearchResults };
