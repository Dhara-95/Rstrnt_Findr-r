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
              "Bearer S1Zn98krZ67DXy-C4ZByWC-hwfPsUu8El_amtr7CX5xjZJ07d-qrhawcvyOBzx1WwKzqK6bfEN7dNu1ynU2b8AcCN5nQGFtQvl0oHpH-g9Wlc2oyGi9jQMzeVtwOYHYx",
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
  }, []);

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
