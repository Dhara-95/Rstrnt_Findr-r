import React, { useEffect, useState } from "react";

import { yelp } from "../../utils/fetchRestaurantData";
import { LoadingConfirmation, RestaurantsNear } from "../../components";
import { RestaurantList } from "../index";

const SearchResults = (props) => {
  const { userInput } = props;
  const [restaurantData, updateRestaurantData] = useState([]);
  const [isLoading, updateLoadingState] = useState(false);

  useEffect(() => {
    yelp.getData(userInput, updateRestaurantData, updateLoadingState);

    // updateLoadingState only works within the method call - need to look into
  }, [userInput]);

  return (
    <>
      <RestaurantsNear userInput={userInput} />
      {isLoading && <LoadingConfirmation />}
      <RestaurantList
        data={restaurantData}
        updateRestaurantData={updateRestaurantData}
      />
    </>
  );
};

export { SearchResults };
