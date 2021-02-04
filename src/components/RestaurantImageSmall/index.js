import React from "react";

import { checkValidImageURL } from "../../utils/checkValidImageURL";

const RestaurantImageSmall = (props) => {
  const { url, name } = props;

  return <img src={checkValidImageURL(url)} width="150" alt={name} />;
};

export { RestaurantImageSmall };
