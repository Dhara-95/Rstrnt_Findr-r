import React from "react";
import renderer from "react-test-renderer";

import { SearchResults } from "../SearchResults";

it("displays the user input correctly", async () => {
  const tree = renderer
    .create(<SearchResults userInput={"W13 34H"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
