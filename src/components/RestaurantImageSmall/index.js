import React from "react";

import { checkInvalidImageURL } from "../../utils/checkInvalidImageURL";

const RestaurantImageSmall = (props) => {
  const { url, name } = props;
  const src = checkInvalidImageURL(url);

  return (
    <div className="flex w-48 h-48 rounded-3xl overflow-hidden relative justify-center content-center ">
      <img className="image" src={src} alt={name} />
    </div>
  );
};

export { RestaurantImageSmall };
