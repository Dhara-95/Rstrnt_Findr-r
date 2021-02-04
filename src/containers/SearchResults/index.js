import React, { useState } from "react";

import { businesses } from "../../mocks/dataMock";
import { LoadingConfirmation } from "../../components/LoadingConfirmation";
import { RestaurantsNear } from "../../components/RestaurantsNear";
import { RestaurantList } from "../RestaurantList";

const SearchResults = (props) => {
  const { userInput } = props;
  const [restaurantData, updateRestaurantData] = useState(businesses);
  const [isLoading, updateLoadingState] = useState(false);

  // useEffect(() => {
  //   fetchRestaurantData(userInput, updateRestaurantData, updateLoadingState);
  // }, [userInput]);

  // Commented out the fetch to avoid unnecessary calls being made

  return (
    <>
      <RestaurantsNear userInput={userInput} />
      {isLoading === true && <LoadingConfirmation />}
      <RestaurantList restaurantData={restaurantData} />
    </>
  );
};

export { SearchResults };
