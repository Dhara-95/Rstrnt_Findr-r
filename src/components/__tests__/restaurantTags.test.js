import React from "react";
import renderer from "react-test-renderer";

import { RestaurantTags } from "../RestaurantTags";

it("displays the Restaurant tags correctly", () => {
  const tree = renderer
    .create(<RestaurantTags tags={[{ title: "Cafe" }]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("displays the Restaurant tags correctly when multiple tags are passed in", () => {
  const tree = renderer
    .create(
      <RestaurantTags
        tags={[{ title: "Cafe" }, { title: "Caribbean" }, { title: "Kebab" }]}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
