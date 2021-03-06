import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { createIconList } from "../../utils";

const StarRating = (props) => {
  const { rating } = props;
  const iconList = createIconList(rating);

  return (
    <div className="restaurant-rating">
      {iconList.map((icon, index) => {
        return (
          <FontAwesomeIcon icon={icon} key={index} color="gold" size="lg" />
        );
      })}
    </div>
  );
};

export { StarRating };
