import React from "react";
import renderer from "react-test-renderer";

import { CuisineList } from "../CuisineList";

it("displays the Cuisine List component correctly", () => {
  const tree = renderer.create(<CuisineList />).toJSON();
  expect(tree).toMatchSnapshot();
});
