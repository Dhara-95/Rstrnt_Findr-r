import {
  checkValidImageURL,
  formattedAddress,
} from "./restaurantListContainerUtils";
import { LabelsObject } from "../../Labels";

describe("checkValidImageURL tests", () => {
  test("Returns passed in valid url", () => {
    const workingURL = "valid URL";
    expect(checkValidImageURL(workingURL)).toEqual(workingURL);
  });

  test("Returns url for place holder img on invalid url", () => {
    const { invalidImageURLLabel } = LabelsObject;
    const invalidURL = "https://s3-media3.fl.yelpcdn.com/bphoto/None/o.jpg";
    expect(checkValidImageURL(invalidURL)).toEqual(invalidImageURLLabel);
  });
});

describe("checkFormattedAddress", () => {
  test("Returns the correct formatted address", () => {
    const address = "55 Manor Road\nLondon W13 0LJ\nUnited Kingdom";
    const correctAddress = "55 Manor Road, London W13 0LJ, United Kingdom";
    expect(formattedAddress(address)).toEqual(correctAddress);
  });
});
