import React from "react";

import {
  checkValidImageURL,
  formattedAddress,
} from "./restaurantListContainerUtils";
import { RestaurantName } from "../../components/RestaurantName";
import { RestaurantPrice } from "../../components/RestaurantPrice";
import { StarRating } from "../../components/StarRating";

const RestaurantListContainer = (props) => {
  const { restaurantData } = props;

  return (
    <>
      {restaurantData.map((restaurant, i) => {
        return (
          <div key={i}>
            <RestaurantName name={restaurant.name} />
            {restaurant.categories.map((tag, i) => {
              return (
                <span className="text-grey">
                  {(i ? ", " : "") + tag.title}{" "}
                </span>
              );
            })}

            <RestaurantPrice price={restaurant.price} />

            <StarRating rating={restaurant.rating} />

            <span className="text-grey">
              {formattedAddress(restaurant.location.formatted_address)}
            </span>

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
