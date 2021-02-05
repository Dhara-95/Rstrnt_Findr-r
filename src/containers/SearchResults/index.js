import React, { useState } from "react";

import { businesses } from "../../mocks/dataMock";
import { LoadingConfirmation } from "../../components/LoadingConfirmation";
import { RestaurantList } from "../RestaurantList";
import { RestaurantsNear } from "../../components/RestaurantsNear";

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
      <div className="flex flex-col">
        <RestaurantList restaurantData={restaurantData} />
      </div>
    </>
  );
};

export { SearchResults };
