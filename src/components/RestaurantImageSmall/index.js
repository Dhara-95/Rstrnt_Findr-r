import React from "react";

import { checkInvalidImageURL } from "../../utils/checkInvalidImageURL";

const RestaurantImageSmall = (props) => {
  const { url, name } = props;
  const validURL = checkInvalidImageURL(url);

  return <img className="small-image w-60" src={validURL} alt={name} />;
};

export { RestaurantImageSmall };
