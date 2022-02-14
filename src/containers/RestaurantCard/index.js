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
    id,
  } = props.restaurant;
  const { formatted_address } = location;
  const { seeRestaurantButton } = labels;
  const { handleButtonClick } = props;

  return (
    <div className="restaurant-card flex mx-auto my-4 w-full xl:w-4/5 2xl:w-4/5">
      <RestaurantImageSmall url={photos[0]} name={name} />

      <div className="flex flex-col w-full text-left self-center px-4 md:w-1/3 lg:w-1/3 xl:w-1/2 2xl:w-1/2 space-y-4">
        <div className="pb-4">
          <RestaurantName name={name} textSize={"text-xl"} />

          <RestaurantTags tags={categories} />
        </div>
        <div>
          <RestaurantPrice price={price} />

          <StarRating rating={rating} />

          <SingleLineAddress address={formatted_address} />
        </div>
      </div>

      <div className="flex items-center justify-center w-1/2 lg:w-1/4 xl:w-1/4 2xl:w-1/4">
        <SubmitButton
          label={seeRestaurantButton}
          value={id}
          handleButtonClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export { RestaurantCard };
