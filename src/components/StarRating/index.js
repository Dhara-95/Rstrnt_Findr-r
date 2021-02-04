import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StarRating = (props) => {
  const { iconArray } = props;
  return (
    <div>
      {iconArray.map((icon, index) => {
        return <FontAwesomeIcon icon={icon} key={index} color="gold" />;
      })}
    </div>
  );
};

export { StarRating };
