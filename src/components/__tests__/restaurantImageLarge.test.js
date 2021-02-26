import React from "react";
import renderer from "react-test-renderer";

import { RestaurantImageLarge } from "../RestaurantImageLarge";

it("displays the large Restaurant image correctly", () => {
  const tree = renderer
    .create(<RestaurantImageLarge url={"url"} name={"name"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
