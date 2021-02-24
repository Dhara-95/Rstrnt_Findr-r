import React from "react";
import renderer from "react-test-renderer";

import { businesses } from "../../mocks/dataMock";
import { SearchResults } from "../SearchResults";

it("displays the user input correctly", async () => {
  const tree = renderer
    .create(
      <SearchResults
        userInput={"W13 3RH"}
        isLoading={false}
        data={businesses}
        handleOnChange={"function"}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
