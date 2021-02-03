import React from "react";
import renderer from "react-test-renderer";

import { RestaurantsNear } from "./index";

it("displays the Restaurants Near Header correctly", () => {
  const tree = renderer
    .create(<RestaurantsNear userInput={"W13 34H"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
