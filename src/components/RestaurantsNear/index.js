import React from "react";

import { labels } from "../../Labels";

const RestaurantsNear = (props) => {
  const { userInput } = props;
  const { searchResultQuery } = labels;

  return (
    <h2 className="text-grey">
      {searchResultQuery}
      {userInput}
    </h2>
  );
};

export { RestaurantsNear };
