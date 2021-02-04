import React from "react";
import renderer from "react-test-renderer";

import { RestaurantTags } from "./index";

it("displays the Restaurant tags correctly", () => {
  const tree = renderer
    .create(<RestaurantTags tags={[{ title: "Cafe" }]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
