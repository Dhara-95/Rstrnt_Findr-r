import React, { useEffect, useState } from "react";

import { fetchRestaurantData, checkValidImageURL } from "./searchResultsUtils";
import { LabelsObject } from "../../Labels";

const SearchResults = (props) => {
  const { userInput } = props;
  const { searchResultQueryLabel } = LabelsObject;
  const [restaurantData, updateRestaurantData] = useState([]);
  const [isLoading, updateLoadingState] = useState(false);

  useEffect(() => {
    fetchRestaurantData(userInput, updateRestaurantData, updateLoadingState);
  }, [userInput]);

  console.log(restaurantData);

  return (
    <div>
      <h2 className="text-grey">
        {searchResultQueryLabel}
        {userInput}
      </h2>
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
    </div>
  );
};

export { SearchResults };
