import React from "react";
import renderer from "react-test-renderer";

import { ReviewerName } from "../ReviewerName";

it("displays the reviewer's name correctly", () => {
  const tree = renderer.create(<ReviewerName name={"name"} />).toJSON();
  expect(tree).toMatchSnapshot();
});
