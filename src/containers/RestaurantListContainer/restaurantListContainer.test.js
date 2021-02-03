import React from "react";
import renderer from "react-test-renderer";

import { RestaurantListContainer } from "./index";
import { businesses } from "../../mocks/dataMock";

it("displays a list of businesses correctly", async () => {
  const tree = renderer
    .create(<RestaurantListContainer restaurantData={businesses} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
