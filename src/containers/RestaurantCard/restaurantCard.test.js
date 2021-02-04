import React from "react";
import renderer from "react-test-renderer";

import { RestaurantCard } from "./index";
import { businesses } from "../../mocks/dataMock";

it("displays a restaurant in its own component", async () => {
  const tree = renderer
    .create(<RestaurantCard restaurant={businesses[0]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
