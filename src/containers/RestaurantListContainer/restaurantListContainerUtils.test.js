import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

import {
  checkValidImageURL,
  createIconArray,
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

describe("checkCorrectStarRating", () => {
  test("Returns star rating array for whole number", () => {
    const wholeNumberArray = [faStar, faStar];
    expect(createIconArray(2)).toEqual(
      expect.arrayContaining(wholeNumberArray)
    );
  });

  test("Returns star rating array for half numbers", () => {
    const halfNumberArray = [faStar, faStarHalf];
    expect(createIconArray(1.5)).toEqual(
      expect.arrayContaining(halfNumberArray)
    );
  });
});

describe("checkFormattedAddress", () => {
  test("Returns the correct formatted address", () => {
    const address = "55 Manor Road\nLondon W13 0LJ\nUnited Kingdom";
    const correctAddress = "55 Manor Road, London W13 0LJ, United Kingdom";
    expect(formattedAddress(address)).toEqual(correctAddress);
  });
});
