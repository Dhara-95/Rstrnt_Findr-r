import React from "react";

import { checkInvalidImageURL } from "../../utils/checkInvalidImageURL";

const RestaurantImageSmall = (props) => {
  const { url, name } = props;
  const validURL = checkInvalidImageURL(url);

  return (
    <div className="mask">
      <img className="image" src={validURL} alt={name} />
    </div>
  );
};

export { RestaurantImageSmall };
