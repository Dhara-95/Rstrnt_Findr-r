import React from "react";

import { RestaurantLocationMap } from "../../components";

const RestaurantDetail = (props) => {
  const { restaurant } = props;
  console.log(restaurant);
  return (
    <>
      <h2 className="text-grey">Restaurant Detail page</h2>
      <RestaurantLocationMap />
    </>
  );
};

export { RestaurantDetail };
