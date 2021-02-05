import React from "react";
import renderer from "react-test-renderer";

import { RestaurantName } from "../RestaurantName";

it("displays the Restaurant name correctly", () => {
  const tree = renderer.create(<RestaurantName name={"name"} />).toJSON();
  expect(tree).toMatchSnapshot();
});
