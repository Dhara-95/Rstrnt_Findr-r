import React from "react";
import renderer from "react-test-renderer";

import { FilterResults } from "../FilterResults";

it("displays the dropdown menu", () => {
  const tree = renderer
    .create(<FilterResults handleRestaurantFilter={"handleRestaurantFilter"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
