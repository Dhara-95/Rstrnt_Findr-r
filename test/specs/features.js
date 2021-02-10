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

  // it("Redirects the user to /searchresults page on button submit", () => {
  //   browser.url(homepageUrl);
  //   const submitButton = $(".submit-button");
  //   submitButton.click();
  //   expect(browser).toHaveUrlContaining("/searchresults");
  // });

  // it("Has the correct main page information", () => {
  //   browser.url(homepageUrl);
  //   const input = $('[name="postcode"]');
  //   input.addValue("W13 3RH");
  //   const submitButton = $(".submit-button");
  //   submitButton.click();

  //   const title = $("h1=Rstrnt Findr-r");
  //   const header = $("h2=Restaurants near W13 3RH");
  //   const orderByFilter = $(".list-options");

  //   expect(title).toBeDisplayed();
  //   expect(header).toBeDisplayed();
  //   expect(orderByFilter).toBeDisplayed();
  // });

  it("Has the correct mocked data displayed", () => {
    const elementXPath = "//*[@id='root']/div/div/div[4]";

    browser.url(homepageUrl);
    const input = $('[name="postcode"]');
    input.addValue("W13 3RH");
    const submitButton = $(".submit-button");
    submitButton.click();

    $(elementXPath).waitForExist();

    const restaurantCard = $(elementXPath);
    console.log(restaurantCard.$("h2").getText());
    // gives expected name of restaurant

    // const name = $("h2=A 2 Zee's");
    // const tag = $("h2=Cafes");
    // const price = $("");
    // const rating =
    // const address =

    // expect(title).toBeDisplayed();
    // expect(header).toBeDisplayed();
    // expect(orderByFilter).toBeDisplayed();
  });

  // it("Has the ability for user to click dropdown menu", () => {
  //   browser.url(homepageUrl);
  //   const input = $('[name="postcode"]');
  //   input.addValue("W13 3RH");
  //   const submitButton = $(".submit-button");
  //   submitButton.click();
  //   const selectBox = $("#filter");
  //   expect(selectBox.isClickable());
  // });

  // it("Has the ability to change the restaurant order based on rating or nearest to postcode", () => {
  //   browser.url(homepageUrl);
  //   const input = $('[name="postcode"]');
  //   input.addValue("W13 3RH");
  //   const submitButton = $(".submit-button");
  //   submitButton.click();
  //   const selectBox = $("#filter");
  //   const elem = $("h2=A 2 Zee's");
  //   expect(elem).toBeVisibleInViewport();
  //   selectBox.selectByAttribute("value", "rating");
  //   const elemNotVisible = $("h2=A 2 Zee's");
  //   expect(elemNotVisible).not.toBeVisibleInViewport();
  //   selectBox.selectByAttribute("value", "nearest");
  //   const elemVisible = $("h2=A 2 Zee's");
  //   expect(elemVisible).toBeVisibleInViewport();
  // });
});
