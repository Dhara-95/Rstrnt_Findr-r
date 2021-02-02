import React from "react";
import { MockedProvider } from "@apollo/client/testing";

import { mocks } from "./mocks";
import renderer from "react-test-renderer";
import { SearchResults } from "./index";

it("displays the user input correctly", () => {
  const tree = renderer
    .create(
      <MockedProvider mocks={mocks}>
        <SearchResults userInput={"W13 34H"} />
      </MockedProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
