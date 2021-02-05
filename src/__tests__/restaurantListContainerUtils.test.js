import { checkValidImageURL } from "../utils/checkValidImageURL";

describe("checkValidImageURL tests", () => {
  test("Returns passed in valid url", () => {
    const workingURL = "valid URL";
    expect(checkValidImageURL(workingURL)).toEqual(workingURL);
  });

  test("Returns url for place holder img on invalid url", () => {
    const placeHolderURL =
      "https://www.westernheights.k12.ok.us/wp-content/uploads/2020/01/No-Photo-Available.jpg";
    const invalidURL = "https://s3-media3.fl.yelpcdn.com/bphoto/None/o.jpg";
    expect(checkValidImageURL(invalidURL)).toEqual(placeHolderURL);
  });
});
