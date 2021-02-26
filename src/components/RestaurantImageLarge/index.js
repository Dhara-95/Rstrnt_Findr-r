import React from "react";

import { checkInvalidImageURL } from "../../utils";

const RestaurantImageLarge = (props) => {
  const { url, name } = props;
  const src = checkInvalidImageURL(url);

  return (
    <div className="flex mx-auto w-full h-80 py-8 overflow-hidden relative justify-center content-center lg:w-2/3 xl:w-2/3 2xl:w-2/3 ">
      <img className="w-full h-auto block object-cover" src={src} alt={name} />
    </div>
  );
};

export { RestaurantImageLarge };
