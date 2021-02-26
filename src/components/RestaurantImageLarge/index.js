import React from "react";

import { checkInvalidImageURL } from "../../utils";

const RestaurantImageLarge = (props) => {
  const { url, name } = props;
  const src = checkInvalidImageURL(url);

  return (
    <div className="flex w-48 h-48 rounded-3xl overflow-hidden relative justify-center content-center ">
      <img
        className="w-auto h-full block object-cover transform scale-130"
        src={src}
        alt={name}
      />
    </div>
  );
};

export { RestaurantImageLarge };
