import React from "react";
import { Link } from "react-router-dom";

import { labels } from "../../Labels";
import {
  RestaurantLocationMap,
  RestaurantImageLarge,
  RestaurantName,
  RestaurantTags,
} from "../../components";

const RestaurantDetail = (props) => {
  const { coordinates, name, photos, categories } = props.restaurant;
  const { postcode } = props;
  const { backLink } = labels;

  return (
    <>
      <Link className="text-grey" to="/searchresults">
        {`${backLink} ${postcode}`}
      </Link>
      <RestaurantName name={name} />
      <RestaurantImageLarge url={photos[0]} name={name} />
      <RestaurantTags tags={categories} />
      <RestaurantLocationMap coordinates={coordinates} name={name} />
    </>
  );
};

export { RestaurantDetail };
