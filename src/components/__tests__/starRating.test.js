import React from "react";
import renderer from "react-test-renderer";

import { StarRating } from "../StarRating";

it("displays the Restaurants Star rating correctly for a half number rating", () => {
  const tree = renderer.create(<StarRating rating={2.5} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("displays the Restaurants Star rating correctly for a whole number rating", () => {
  const tree = renderer.create(<StarRating rating={4} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("displays the Restaurants Star rating correctly for a 0 rating", () => {
  const tree = renderer.create(<StarRating rating={0} />).toJSON();
  expect(tree).toMatchSnapshot();
});
