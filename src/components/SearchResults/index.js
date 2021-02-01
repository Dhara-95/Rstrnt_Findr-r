import React from "react";
import { searchResultQueryLabel } from "../../Labels";

const SearchResults = (props) => {
  const { userInput } = props;
  return (
    <div>
      <h2 className="text-grey">
        {searchResultQueryLabel}
        {userInput}
      </h2>
    </div>
  );
};

export default SearchResults;
