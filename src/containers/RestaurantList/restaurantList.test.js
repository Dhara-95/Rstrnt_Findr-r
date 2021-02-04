import React from "react";
import renderer from "react-test-renderer";

import { RestaurantList } from "./index";
import { businesses } from "../../mocks/dataMock";

it("displays a list of businesses correctly", async () => {
  const tree = renderer
    .create(<RestaurantList restaurantData={businesses} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
