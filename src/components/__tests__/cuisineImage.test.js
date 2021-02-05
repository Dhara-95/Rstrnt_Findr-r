import React from "react";
import renderer from "react-test-renderer";

import { CuisineImage } from "../CuisineImage";

it("displays the cuisine images correctly", () => {
  const tree = renderer.create(<CuisineImage image={"image"} />).toJSON();
  expect(tree).toMatchSnapshot();
});
