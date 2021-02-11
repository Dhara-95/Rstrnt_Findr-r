import React from "react";

import { checkInvalidImageURL } from "../../utils/checkInvalidImageURL";

const RestaurantImageSmall = (props) => {
  const { url, name } = props;
  const src = checkInvalidImageURL(url);

  return (
    <div className="flex w-100 h-100 rounded-3xl overflow-hidden relative justify-center content-center ">
      <img
        className="w-auto h-full block object-cover transform scale-130"
        src={src}
        alt={name}
      />
    </div>
  );
};

export { RestaurantImageSmall };
