import React from "react";
import { Link } from "react-router-dom";

import { labels } from "../../Labels";
import { RestaurantLocationMap, RestaurantName } from "../../components";

const RestaurantDetail = (props) => {
  const { coordinates, name } = props.restaurant;
  const { postcode } = props;
  const { backLink } = labels;

  return (
    <>
      <Link className="text-grey" to="/searchresults">
        {`${backLink} ${postcode}`}
      </Link>
      <RestaurantName name={name} />
      <RestaurantLocationMap coordinates={coordinates} name={name} />
    </>
  );
};

export { RestaurantDetail };
