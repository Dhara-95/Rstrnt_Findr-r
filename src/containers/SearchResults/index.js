import React, { useEffect, useState } from "react";

import { filterByRating } from "../../utils/filterByRating";
import { LoadingConfirmation, RestaurantsNear } from "../../components";
import { RestaurantList } from "../index";
import { yelp } from "../../utils/fetchRestaurantData";

const SearchResults = (props) => {
  const { userInput } = props;
  const [restaurantData, updateRestaurantData] = useState([]);
  const [isLoading, updateLoadingState] = useState(false);
  const [defaultRestaurantOrder, applyDefaultRestaurantOrder] = useState(null);

  useEffect(() => {
    yelp.getData(userInput, updateRestaurantData, updateLoadingState);
    // updateLoadingState only works within the method call - need to look into
  }, [userInput]);

  const handleRestaurantFilter = (action) => {
    if (defaultRestaurantOrder === null) {
      console.log("copying state");
      applyDefaultRestaurantOrder([...restaurantData]);
    }
    switch (action) {
      case "rating":
        updateRestaurantData(filterByRating(restaurantData));
        break;
      case "nearest":
        updateRestaurantData([...defaultRestaurantOrder]);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <RestaurantsNear userInput={userInput} />
      {isLoading && <LoadingConfirmation />}
      <RestaurantList
        data={restaurantData}
        handleRestaurantFilter={handleRestaurantFilter}
      />
    </>
  );
};

export { SearchResults };
