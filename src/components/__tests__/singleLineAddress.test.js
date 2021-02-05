import React from "react";
import renderer from "react-test-renderer";

import { SingleLineAddress } from "../SingleLineAddress";

it("displays the Restaurants address correctly formatted", () => {
  const tree = renderer
    .create(
      <SingleLineAddress
        unformattedAddress={"55 Manor Road\nLondon W13 0LJ\nUnited Kingdom"}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
