import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { FilterResults } from "../FilterResults";

it("displays the dropdown menu", () => {
  const tree = renderer
    .create(<FilterResults handleRestaurantFilter={"handleRestaurantFilter"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Filters results based on user selection", async () => {
  const myMock = jest.fn();
  render(<FilterResults handleRestaurantFilter={myMock} />);
  const select = screen.getByRole("combobox");
  userEvent.selectOptions(select, "rating");
  expect(myMock).toHaveBeenCalledTimes(1);

  userEvent.selectOptions(select, "nearest");
  expect(myMock).toHaveBeenCalledTimes(2);
});
