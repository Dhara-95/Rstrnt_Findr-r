import React from "react";
import renderer from "react-test-renderer";

import { StarRating } from "./index";

it("displays the Restaurants Star rating correctly", () => {
  const tree = renderer.create(<StarRating rating={2.5} />).toJSON();
  expect(tree).toMatchSnapshot();
});
