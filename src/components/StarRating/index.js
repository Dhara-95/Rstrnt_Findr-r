import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { createIconArray } from "../../utils/createIconArray";

const StarRating = (props) => {
  const { rating } = props;
  const iconArray = createIconArray(rating);

  return (
    <div>
      {iconArray.map((icon, index) => {
        return <FontAwesomeIcon icon={icon} key={index} color="gold" />;
      })}
    </div>
  );
};

export { StarRating };
