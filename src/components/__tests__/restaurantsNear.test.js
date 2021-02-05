import React from "react";
import renderer from "react-test-renderer";

import { RestaurantsNear } from "../RestaurantsNear";

it("displays the Restaurants Near Header correctly", () => {
  const tree = renderer
    .create(<RestaurantsNear userInput={"W13 3RH"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
