import React from "react";

import { LabelsObject } from "../../Labels";

const RestaurantsNear = (props) => {
  const { userInput } = props;
  const { searchResultQueryLabel } = LabelsObject;

  return (
    <h2 className="text-grey">
      {searchResultQueryLabel}
      {userInput}
    </h2>
  );
};

export { RestaurantsNear };
