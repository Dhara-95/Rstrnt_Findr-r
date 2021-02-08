import React from "react";
import renderer from "react-test-renderer";

import { FilterResults } from "../FilterResults";

it("displays the dropdown menu", () => {
  const tree = renderer
    .create(
      <FilterResults
        updateRestaurantData={"updateRestaurantData"}
        businesses={"businesses"}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
