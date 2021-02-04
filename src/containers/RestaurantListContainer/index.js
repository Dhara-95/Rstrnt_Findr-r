import React from "react";

import {
  checkValidImageURL,
  checkValidPriceRating,
  createIconArray,
} from "./restaurantListContainerUtils";
import { StarRating } from "../../components/StarRating";

const RestaurantListContainer = (props) => {
  const { restaurantData } = props;

  return (
    <>
      {restaurantData.map((restaurant, i) => {
        return (
          <div key={i}>
            <h2 className="text-grey">{restaurant.name}</h2>
            {restaurant.categories.map((tag, i) => {
              return (
                <span className="text-grey">
                  {(i ? ", " : "") + tag.title}{" "}
                </span>
              );
            })}

            <h2 className="text-grey">
              {checkValidPriceRating(restaurant.price)}
            </h2>

            <StarRating iconArray={createIconArray(restaurant.rating)} />

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
