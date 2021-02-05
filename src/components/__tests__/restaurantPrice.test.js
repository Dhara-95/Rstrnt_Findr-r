import React from "react";
import renderer from "react-test-renderer";

import { RestaurantPrice } from "../RestaurantPrice";

it("displays the Restaurants Price rating correctly", () => {
  const tree = renderer.create(<RestaurantPrice price={"\u00a3"} />).toJSON();
  expect(tree).toMatchSnapshot();
});
