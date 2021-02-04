import React from "react";

import { checkValidImageURL } from "../../utils/checkValidImageURL";

const RestaurantImageSmall = (props) => {
  const { url, name } = props;

  return (
    <img
      className="small-image w-60"
      src={checkValidImageURL(url)}
      alt={name}
    />
  );
};

export { RestaurantImageSmall };
