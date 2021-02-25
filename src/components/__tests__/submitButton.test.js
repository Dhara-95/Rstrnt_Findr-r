import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { SubmitButton } from "../SubmitButton";

it("displays the button with the correct props", () => {
  const tree = renderer
    .create(
      <SubmitButton
        label={"Find"}
        value={"value"}
        handleButtonClick={"function"}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("calls the passed in function on button click", async () => {
  const myMock = jest.fn();
  render(
    <SubmitButton label={"Find"} value={"value"} handleButtonClick={myMock} />
  );
  const button = screen.getByRole("button");
  userEvent.click(button);

  expect(myMock).toHaveBeenCalledTimes(1);
});
