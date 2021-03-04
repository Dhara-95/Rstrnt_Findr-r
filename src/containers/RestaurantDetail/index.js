import React from "react";
import { Link } from "react-router-dom";

import { labels } from "../../Labels";
import {
  RestaurantLocationMap,
  RestaurantImageLarge,
  RestaurantName,
  RestaurantTags,
  RestaurantPrice,
  StarRating,
} from "../../components";
import { ReviewList } from "../index";

const RestaurantDetail = (props) => {
  const {
    coordinates,
    name,
    photos,
    categories,
    price,
    rating,
    reviews,
  } = props.restaurant;
  const { postcode } = props;
  const { backLink, overallRating } = labels;

  return (
    <>
      <div className="pb-16">
        <Link className="text-grey" to="/searchresults">
          {`${backLink} ${postcode}`}
        </Link>
      </div>

      <RestaurantName name={name} textSize={"text-4xl"} />

      <RestaurantImageLarge url={photos[0]} name={name} />

      <div className="pb-4">
        <RestaurantTags tags={categories} />
      </div>

      <RestaurantPrice price={price} />

      <div className="py-8">
        <RestaurantLocationMap coordinates={coordinates} name={name} />
      </div>

      <h3 className="text-grey text-xl">{overallRating}</h3>
      <StarRating rating={rating} />
      <ReviewList reviews={reviews} />
    </>
  );
};

export { RestaurantDetail };
