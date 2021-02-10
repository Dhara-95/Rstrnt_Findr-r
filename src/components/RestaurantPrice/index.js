import React from "react";

const RestaurantPrice = (props) => {
  const { price } = props;
  const priceCheck = price ? price : "No price rating available";

  return <h2 className=" restaurant-price text-grey">{priceCheck}</h2>;
};

export { RestaurantPrice };
