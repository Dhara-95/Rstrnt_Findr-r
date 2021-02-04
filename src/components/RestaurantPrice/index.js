import React from "react";

const RestaurantPrice = (props) => {
  const { price } = props;

  return <h2 className="text-grey">{checkValidPriceRating(price)}</h2>;
};

export { RestaurantPrice };
