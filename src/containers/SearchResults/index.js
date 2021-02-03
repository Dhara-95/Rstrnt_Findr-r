import React, { useState } from "react";

import { businesses } from "../../mocks/dataMock";
import { checkValidImageURL } from "./searchResultsUtils";
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
      {isLoading === true && <h1 className="text-grey">Loading...</h1>}
      {restaurantData.length > 0 &&
        restaurantData.map((restaurant, i) => {
          return (
            <div key={i}>
              <h2 className="text-grey">{restaurant.name}</h2>

              <img
                src={checkValidImageURL(restaurant.photos[0])}
                width="150"
                alt={restaurant.name}
              />
            </div>
          );
        })}
    </>
  );
};

export { SearchResults };
