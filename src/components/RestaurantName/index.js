import React from "react";

const RestaurantName = (props) => {
  const { name } = props;

  return <h2 className="restaurant-name text-white text-xl">{name}</h2>;
};

export { RestaurantName };
