import React from "react";
import renderer from "react-test-renderer";

import { RestaurantImageSmall } from "../RestaurantImageSmall";

it("displays the small Restaurant image correctly", () => {
  const tree = renderer
    .create(<RestaurantImageSmall url={"url"} name={"name"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
