import React from "react";

import { RestaurantCard } from "../index";

const RestaurantList = (props) => {
  const { restaurantData } = props;

  return (
    <>
      {restaurantData.map((restaurant, index) => {
        return <RestaurantCard restaurant={restaurant} key={index} />;
      })}
    </>
  );
};

export { RestaurantList };
