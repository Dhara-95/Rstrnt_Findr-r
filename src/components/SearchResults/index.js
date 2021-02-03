import React, { useEffect, useState } from "react";

import { fetchRestaurantData } from "./searchResultsUtils";
import { LabelsObject } from "../../Labels";

const SearchResults = (props) => {
  const { userInput } = props;
  const { searchResultQueryLabel } = LabelsObject;
  const [restaurantData, updateRestaurantData] = useState([]);

  useEffect(() => {
    fetchRestaurantData(userInput, updateRestaurantData);
  }, [userInput]);

  console.log(restaurantData);

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
