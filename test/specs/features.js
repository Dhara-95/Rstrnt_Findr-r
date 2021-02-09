import { business } from "../../__mocks__/dataMock";

describe("Feature tests", () => {
  const homepageUrl = "http://localhost:3000";

  beforeEach(() => {
    const mockApiCall = browser.mock(
      "https://rstrnt-cors.herokuapp.com/https://api.yelp.com/v3/graphql",
      {
        method: "post",
      }
    );
    mockApiCall.respond(business, {
      statusCode: 200,
      fetchResponse: false,
    });
  });

  it("Has the correct url on postcode submit", () => {
    browser.url(homepageUrl);
    const submitButton = $(".submit-button");
    submitButton.click();
    expect(browser).toHaveUrlContaining("/searchresults");
  });

  it("Has correct user input displayed on submit", () => {
    browser.url(homepageUrl);
    const input = $('[name="postcode"]');
    input.addValue("W13 3RH");
    const submitButton = $(".submit-button");
    submitButton.click();
    const h2header = $("h2=Restaurants near W13 3RH");
    expect(h2header).toBeDisplayed();
  });

  it("Has the ability to change the restaurant order based on rating or nearest to postcode", () => {
    browser.setWindowRect(null, null, 1366, 768);
    browser.url(homepageUrl);
    const input = $('[name="postcode"]');
    input.addValue("W13 3RH");
    const submitButton = $(".submit-button");
    submitButton.click();
    const selectBox = $("#filter");
    const elem = $("h2=A 2 Zee's");
    expect(elem).toBeVisibleInViewport();
    selectBox.selectByAttribute("value", "rating");
    expect(elem).not.toBeVisibleInViewport();
    selectBox.selectByAttribute("value", "nearest");
    expect(elem).toBeVisibleInViewport();
  });
});
