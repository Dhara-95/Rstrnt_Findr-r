import React from "react";

import { RestaurantLocationMap } from "../../components";

const RestaurantDetail = (props) => {
  const { coordinates, name } = props.restaurant;

  return (
    <>
      <h2 className="text-grey">Restaurant Detail page</h2>
      <RestaurantLocationMap coordinates={coordinates} name={name} />
    </>
  );
};

export { RestaurantDetail };
