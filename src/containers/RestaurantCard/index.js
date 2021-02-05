import React from "react";

import {
  RestaurantImageSmall,
  RestaurantName,
  RestaurantPrice,
  RestaurantTags,
  SingleLineAddress,
  StarRating,
} from "../../components";

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

  return (
    <div className="flex m-4 ml-auto w-4/5">
      <div>
        <RestaurantImageSmall url={photos[0]} name={name} />
      </div>
      <div className="text-left self-center">
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
      <div>{/* Will hold the button */}</div>
    </div>
  );
};

export { RestaurantCard };
