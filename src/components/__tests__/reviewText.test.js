import React from "react";
import renderer from "react-test-renderer";

import { ReviewText } from "../ReviewText";

it("displays the reviewe text correctly", () => {
  const tree = renderer.create(<ReviewText text={"text"} />).toJSON();
  expect(tree).toMatchSnapshot();
});
