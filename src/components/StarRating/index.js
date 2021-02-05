import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { createIconList } from "../../utils/createIconList";

const StarRating = (props) => {
  const { rating } = props;
  const iconList = createIconList(rating);

  return (
    <div>
      {iconList.map((icon, index) => {
        return <FontAwesomeIcon icon={icon} key={index} color="gold" />;
      })}
    </div>
  );
};

export { StarRating };
