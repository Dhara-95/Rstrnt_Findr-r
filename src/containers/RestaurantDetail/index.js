import React from "react";
import { Link } from "react-router-dom";

import { labels } from "../../Labels";
import {
  RestaurantLocationMap,
  RestaurantImageLarge,
  RestaurantName,
} from "../../components";

const RestaurantDetail = (props) => {
  const { coordinates, name, photos } = props.restaurant;
  const { postcode } = props;
  const { backLink } = labels;

  return (
    <>
      <Link className="text-grey" to="/searchresults">
        {`${backLink} ${postcode}`}
      </Link>
      <RestaurantName name={name} />
      <RestaurantImageLarge url={photos[0]} name={name} />
      <RestaurantLocationMap coordinates={coordinates} name={name} />
    </>
  );
};

export { RestaurantDetail };
