import React from "react";
import { Link } from "react-router-dom";

import { labels } from "../../Labels";
import { RestaurantLocationMap } from "../../components";

const RestaurantDetail = (props) => {
  const { coordinates, name } = props.restaurant;
  const { postcode } = props;
  const { backLink } = labels;

  return (
    <>
      <Link className="text-grey" to="/searchresults">
        {`${backLink} ${postcode}`}
      </Link>
      <h2 className="text-grey">Restaurant Detail page</h2>
      <RestaurantLocationMap coordinates={coordinates} name={name} />
    </>
  );
};

export { RestaurantDetail };
