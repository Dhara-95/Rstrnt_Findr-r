import React from "react";

import { checkInvalidImageURL } from "../../utils/checkInvalidImageURL";

const RestaurantImageSmall = (props) => {
  const { url, name } = props;

  return (
    <img
      className="small-image w-60"
      src={checkInvalidImageURL(url)}
      alt={name}
    />
  );
};

export { RestaurantImageSmall };
