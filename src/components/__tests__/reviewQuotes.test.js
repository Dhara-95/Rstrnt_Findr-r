import React from "react";
import renderer from "react-test-renderer";

import { ReviewQuotes } from "../ReviewQuotes";

it("displays the review quote marks correctly", () => {
  const tree = renderer.create(<ReviewQuotes />).toJSON();
  expect(tree).toMatchSnapshot();
});
