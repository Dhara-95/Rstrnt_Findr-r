import React from "react";
import renderer from "react-test-renderer";

import { RestaurantImageSmall } from "../RestaurantImageSmall";

it("displays the Restaurant name correctly", () => {
  const tree = renderer
    .create(<RestaurantImageSmall url={"url"} name={"name"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
