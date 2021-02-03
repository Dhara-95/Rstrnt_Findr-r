import React, { useEffect } from "react";

import { fetchRestaurantData } from "./searchResultsUtils";
import { LabelsObject } from "../../Labels";

const SearchResults = (props) => {
  const { userInput } = props;
  const { searchResultQueryLabel } = LabelsObject;

  useEffect(() => {
    fetchRestaurantData(userInput);
  }, [userInput]);

  return (
    <div>
      <h2 className="text-grey">
        {searchResultQueryLabel}
        {userInput}
      </h2>
    </div>
  );
};

export { SearchResults };
