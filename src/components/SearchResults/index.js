import React, { useEffect } from "react";

import { LabelsObject } from "../../Labels";
import { RESTAURANT_BY_POSTCODE } from "../../queries";

const SearchResults = (props) => {
  const { userInput } = props;
  const { searchResultQueryLabel } = LabelsObject;

  useEffect(() => {
    const fetchData = async () => {
      const rawResponse = await fetch(
        "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/graphql",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer 2jXanN0JhNlrpYgMFcYjR7XU0jcaqXoPBLwWpETv4zyeMaummrCydWM40bTSc0D-dZhV-mMC3t9PuwjY8f63YbqZlRkOauXqP31xf0ft7JEsERye055c5NdExdsOYHYx",
            "Accept-Language": "en-US",
          },
          body: JSON.stringify({
            query: RESTAURANT_BY_POSTCODE,
            variables: {
              postcode: userInput,
            },
          }),
        }
      );
      const content = await rawResponse.json();

      console.log(content);
    };
    fetchData();
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
