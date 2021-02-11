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
    <div className="restaurant-card flex m-4 ml-auto w-4/5">
      <div>
        <RestaurantImageSmall url={photos[0]} name={name} />
      </div>
      <div className="text-left self-center pl-4">
        <div className="py-4">
          <RestaurantName name={name} />

          <RestaurantTags tags={categories} />
        </div>
        <div>
          <RestaurantPrice price={price} />

          <StarRating rating={rating} />

          <SingleLineAddress address={formatted_address} />
        </div>
      </div>
      <div>
        <SubmitButton label={seeRestaurantButton} history={null} route={null} />
      </div>
    </div>
  );
};

export { RestaurantCard };
