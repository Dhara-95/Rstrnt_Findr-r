describe("homepage", () => {
  const homepageUrl = "http://localhost:3000";

  it("has the right title", () => {
    browser.url(homepageUrl);
    expect(browser).toHaveTitle("Rstrnt Findr-r");
  });

  it("has the correct page header", () => {
    browser.url(homepageUrl);
    const header = $("h1=Rstrnt Findr-r");
    expect(header).toBeDisplayed();
  });

  it("has an input field for user postcode", () => {
    browser.url(homepageUrl);
    const inputField = $('[name="postcode"]');
    expect(inputField).toExist();
  });

  it("has correct text next to input field", () => {
    browser.url(homepageUrl);
    const span = $("span=Find restaurants near you:");
    expect(span).toBeDisplayed();
  });

  it("has a find button", () => {
    browser.url(homepageUrl);
    const button = $('[value="Find"]');
    expect(button).toExist();
  });

  it("has a header of find by cuisine", () => {
    browser.url(homepageUrl);
    const findByCuisineTitle = $("h2=Find By Cuisine");
    expect(findByCuisineTitle).toBeDisplayed();
  });

  it("has a container with 4 elements in it", () => {
    browser.url(homepageUrl);
    const imageContainer = $(".image-container");
    expect(imageContainer).toHaveChildren(4);
  });
});
