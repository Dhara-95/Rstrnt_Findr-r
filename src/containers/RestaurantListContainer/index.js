import React from "react";

import { checkValidImageURL } from "./restaurantListContainerUtils";

const RestaurantListContainer = (props) => {
  const { restaurantData } = props;
  return (
    <>
      {restaurantData.map((restaurant, i) => {
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

export { RestaurantListContainer };
