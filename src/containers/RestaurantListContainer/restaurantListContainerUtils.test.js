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
