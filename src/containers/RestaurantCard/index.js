import React from "react";

import {
  RestaurantImageSmall,
  RestaurantName,
  RestaurantPrice,
  RestaurantTags,
  SingleLineAddress,
  StarRating,
  SubmitButton,
} from "../../components";
import { labels } from "../../Labels";

const RestaurantCard = (props) => {
  const {
    photos,
    name,
    categories,
    price,
    rating,
    location,
  } = props.restaurant;
  const { formatted_address } = location;
  const { seeRestaurantButton } = labels;

  return (
    <div className="restaurant-card flex mx-auto my-4 w-4/5">
      <div className="w-1/5">
        <RestaurantImageSmall url={photos[0]} name={name} />
      </div>
      <div className="flex flex-col text-left self-center w-1/2 space-y-4">
        <div className="pb-4">
          <RestaurantName name={name} />

          <RestaurantTags tags={categories} />
        </div>
        <div>
          <RestaurantPrice price={price} />

          <StarRating rating={rating} />

          <SingleLineAddress address={formatted_address} />
        </div>
      </div>
      <div className="flex items-center w-1/4">
        <SubmitButton label={seeRestaurantButton} history={null} route={null} />
      </div>
    </div>
  );
};

export { RestaurantCard };
