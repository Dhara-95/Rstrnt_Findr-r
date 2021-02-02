import React from "react";
import renderer from "react-test-renderer";
import { MockedProvider } from "@apollo/client/testing";

import { mocks } from "./mocks";
import { SearchResults } from "./index";

it("displays the user input correctly", async () => {
  const tree = renderer
    .create(
      <MockedProvider mocks={mocks}>
        <SearchResults userInput={"W13 34H"} />
      </MockedProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
