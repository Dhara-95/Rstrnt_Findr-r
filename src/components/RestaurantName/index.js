import React from "react";

const RestaurantName = (props) => {
  const { name, textSize } = props;
  const styling = `restaurant-name text-white ${textSize}`;

  return <h2 className={styling}>{name}</h2>;
};

export { RestaurantName };
