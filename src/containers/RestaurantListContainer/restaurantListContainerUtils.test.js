import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

import {
  checkValidImageURL,
  checkValidPriceRating,
  createIconArray,
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

describe("checkValidPriceRating tests", () => {
  test("Returns price rating if available", () => {
    const validPrice = "££";
    expect(checkValidPriceRating(validPrice)).toEqual(validPrice);
  });

  test("Returns Price rating not available", () => {
    expect(checkValidPriceRating(null)).toEqual("No price rating available");
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
