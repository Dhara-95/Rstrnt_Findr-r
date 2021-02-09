import React, { useEffect, useState } from "react";

import { filterByRating } from "../../utils/filterByRating";
import { LoadingConfirmation, RestaurantsNear } from "../../components";
import { RestaurantList } from "../index";
import { yelp } from "../../utils/fetchRestaurantData";

const SearchResults = (props) => {
  const { userInput } = props;
  const [restaurantData, updateRestaurantData] = useState([]);
  const [isLoading, updateLoadingState] = useState(false);
  const [defaultRestaurantOrder, applyDefaultRestaurantOrder] = useState([]);

  useEffect(() => {
    yelp.getData(userInput, updateRestaurantData, updateLoadingState);
    // updateLoadingState only works within the method call - need to look into
  }, [userInput]);

  const handleOnChange = (action) => {
    if (!defaultRestaurantOrder.length) {
      applyDefaultRestaurantOrder([...restaurantData]);
    }
    const actionList = {
      rating: filterByRating(restaurantData),
      nearest: [...defaultRestaurantOrder],
    };

    updateRestaurantData(actionList[action]);
  };

  return (
    <>
      <RestaurantsNear userInput={userInput} />
      {isLoading && <LoadingConfirmation />}
      <RestaurantList data={restaurantData} handleOnChange={handleOnChange} />
    </>
  );
};

export { SearchResults };
