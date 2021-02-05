import React from "react";
import renderer from "react-test-renderer";

import { CuisineListContainer } from "../CuisineListContainer";

it("displays the Cuisine List Container component correctly", () => {
  const tree = renderer.create(<CuisineListContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});
