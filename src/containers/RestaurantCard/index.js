import React from "react";

import { RestaurantImageSmall } from "../../components/RestaurantImageSmall";
import { RestaurantName } from "../../components/RestaurantName";
import { RestaurantPrice } from "../../components/RestaurantPrice";
import { StarRating } from "../../components/StarRating";
import { SingleLineAddress } from "../../components/SingleLineAddress";
import { RestaurantTags } from "../../components/RestaurantTags";

const RestaurantCard = (props) => {
  const { restaurant } = props;

  return (
    <div className="flex m-4 ml-auto w-4/5">
      <div>
        <RestaurantImageSmall
          url={restaurant.photos[0]}
          name={restaurant.name}
        />
      </div>
      <div className="text-left self-center">
        <div className="py-4">
          <RestaurantName name={restaurant.name} />

          <RestaurantTags tags={restaurant.categories} />
        </div>
        <div>
          <RestaurantPrice price={restaurant.price} />

          <StarRating rating={restaurant.rating} />

          <SingleLineAddress
            unformattedAddress={restaurant.location.formatted_address}
          />
        </div>
      </div>
      <div>{/* Will hold the button */}</div>
    </div>
  );
};

export { RestaurantCard };
