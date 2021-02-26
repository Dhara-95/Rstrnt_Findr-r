import React from "react";

import { RestaurantLocationMap, RestaurantImageLarge } from "../../components";

const RestaurantDetail = (props) => {
  const { coordinates, name, photos } = props.restaurant;

  return (
    <>
      <h2 className="text-grey">Restaurant Detail page</h2>
      <RestaurantImageLarge url={photos[0]} name={name} />
      <RestaurantLocationMap coordinates={coordinates} name={name} />
    </>
  );
};

export { RestaurantDetail };
