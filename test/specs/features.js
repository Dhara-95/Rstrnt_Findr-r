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

  it("Redirects the user to /searchresults page on button submit", () => {
    browser.url(homepageUrl);
    const submitButton = $(".submit-button");
    submitButton.click();
    expect(browser).toHaveUrlContaining("/searchresults");
  });

  it("Has the correct main page information", () => {
    browser.url(homepageUrl);
    const input = $('[name="postcode"]');
    input.addValue("W13 3RH");
    const submitButton = $(".submit-button");
    submitButton.click();

    const title = $("h1=Rstrnt Findr-r");
    const header = $("h2=Restaurants near W13 3RH");
    const orderByFilter = $(".list-options");

    expect(title).toBeDisplayed();
    expect(header).toBeDisplayed();
    expect(orderByFilter).toBeDisplayed();
  });

  it("Has the correct mocked data displayed", () => {
    const elementXPath = "//*[@id='root']/div/div/div[4]";

    browser.url(homepageUrl);
    const input = $('[name="postcode"]');
    input.addValue("W13 3RH");
    const submitButton = $(".submit-button");
    submitButton.click();

    $(elementXPath).waitForExist();
    const restaurantCard = $(elementXPath);

    const name = restaurantCard.$("h2.restaurant-name");
    const tag = restaurantCard.$("div.restaurant-tag");
    const price = restaurantCard.$("h2.restaurant-price");
    const rating = restaurantCard.$("div.restaurant-rating");
    const address = restaurantCard.$("span.restaurant-address");

    expect(name).toHaveText("Chic O Land");
    expect(tag).toHaveText("Fast Food");
    expect(price).toHaveText("£");
    expect(rating).toHaveChildren(2);
    expect(address).toHaveText(
      "50 Drayton Green Road, London W13 8RY, United Kingdom"
    );
  });

  it("Has mocked data ordered as expected", () => {
    const elementXPathBase = "//*[@id='root']/div/div/div";

    browser.url(homepageUrl);
    const input = $('[name="postcode"]');
    input.addValue("W13 3RH");
    const submitButton = $(".submit-button");
    submitButton.click();

    $(`${elementXPathBase}[4]`).waitForExist();
    const restaurantCard1 = $(`${elementXPathBase}[2]`);
    const restaurantCard2 = $(`${elementXPathBase}[3]`);
    const restaurantCard3 = $(`${elementXPathBase}[4]`);

    const name1 = restaurantCard1.$("h2.restaurant-name");
    const name2 = restaurantCard2.$("h2.restaurant-name");
    const name3 = restaurantCard3.$("h2.restaurant-name");

    expect(name1).toHaveText("A 2 Zee's");
    expect(name2).toHaveText("Tophill Caribean");
    expect(name3).toHaveText("Chic O Land");
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
