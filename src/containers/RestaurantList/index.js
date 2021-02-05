import React from "react";

import { RestaurantCard } from "../index";

const RestaurantList = (props) => {
  const { data } = props;

  return (
    <div className="flex flex-col">
      {data.map((restaurant, index) => {
        return <RestaurantCard restaurant={restaurant} key={index} />;
      })}
    </div>
  );
};

export { RestaurantList };
