import React from "react";
import renderer from "react-test-renderer";
import { CuisineImage } from "./index";

it("displays the cuisine images correctly", () => {
  const tree = renderer.create(<CuisineImage image={"image"} />).toJSON();
  expect(tree).toMatchSnapshot();
});
