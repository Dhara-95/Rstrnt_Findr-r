import React from "react";
import { useQuery } from "@apollo/client";

import { LabelsObject } from "../../Labels";
import { RESTAURANT_BY_POSTCODE } from "../../queries";

const SearchResults = (props) => {
  const { userInput } = props;
  const { searchResultQueryLabel } = LabelsObject;

  const { loading, error, data } = useQuery(RESTAURANT_BY_POSTCODE, {
    variables: { postcode: userInput },
  });

  if (loading) console.log(null);
  if (error) console.log(`Error! ${error}`);
  if (data) console.log(data);

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
