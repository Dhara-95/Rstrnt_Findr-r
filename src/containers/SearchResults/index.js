import React, { useEffect, useState } from "react";

import { restaurantFetch } from "../../utils/fetchRestaurantData";
import { LoadingConfirmation, RestaurantsNear } from "../../components";
import { RestaurantList } from "../index";

const SearchResults = (props) => {
  const { userInput } = props;
  const [restaurantData, updateRestaurantData] = useState([]);
  const [isLoading, updateLoadingState] = useState(false);

  useEffect(() => {
    updateLoadingState(true);
    console.log(isLoading);
    restaurantFetch.fetchData(userInput, updateRestaurantData);
    updateLoadingState(false);
    console.log(isLoading);
  }, [userInput, isLoading]);

  return (
    <>
      <RestaurantsNear userInput={userInput} />
      {isLoading && <LoadingConfirmation />}
      <RestaurantList data={restaurantData} />
    </>
  );
};

export { SearchResults };
