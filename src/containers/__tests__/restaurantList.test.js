import React from "react";
import renderer from "react-test-renderer";

import { RestaurantList } from "../RestaurantList";
import { businesses } from "../../mocks/dataMock";

it("displays a list of businesses correctly", async () => {
  const tree = renderer
    .create(
      <RestaurantList
        data={businesses}
        handleRestaurantFilter={"handleRestaurantFilter"}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
