import React from "react";

const RestaurantName = (props) => {
  const { name } = props;

  return <h2 className="text-grey">{name}</h2>;
};

export { RestaurantName };
