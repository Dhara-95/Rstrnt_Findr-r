import React from "react";
import renderer from "react-test-renderer";

import { ReviewList } from "../ReviewList";
import { businesses } from "../../mocks/dataMock";

it("displays the reviews for a single restaurant correctly", async () => {
  const { reviews } = businesses[0];
  const tree = renderer.create(<ReviewList reviews={reviews} />).toJSON();
  expect(tree).toMatchSnapshot();
});
