import React from "react";

import { RestaurantImageSmall } from "../../components/RestaurantImageSmall";
import { RestaurantName } from "../../components/RestaurantName";
import { RestaurantPrice } from "../../components/RestaurantPrice";
import { SingleLineAddress } from "../../components/SingleLineAddress";
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
                <span className="text-grey" key={i}>
                  {(i ? ", " : "") + tag.title}{" "}
                </span>
              );
            })}

            <RestaurantPrice price={restaurant.price} />

            <StarRating rating={restaurant.rating} />

            <SingleLineAddress
              unformattedAddress={restaurant.location.formatted_address}
            />

            <RestaurantImageSmall
              url={restaurant.photos[0]}
              name={restaurant.name}
            />
          </div>
        );
      })}
    </>
  );
};

export { RestaurantListContainer };
