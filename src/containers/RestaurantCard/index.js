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
    <div>
      <RestaurantName name={restaurant.name} />

      <RestaurantTags tags={restaurant.categories} />

      <RestaurantPrice price={restaurant.price} />

      <StarRating rating={restaurant.rating} />

      <SingleLineAddress
        unformattedAddress={restaurant.location.formatted_address}
      />

      <RestaurantImageSmall url={restaurant.photos[0]} name={restaurant.name} />
    </div>
  );
};

export { RestaurantCard };
