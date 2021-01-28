describe("homepage", () => {
  it("should have the right title", () => {
    browser.url("http://localhost:3000");
    expect(browser).toHaveTitle("Rstrnt Findr-r");
  });

  it("Should have the correct page header", () => {
    browser.url("http://localhost:3000");
    const header = $("h1=Rstrnt Findr-r");
    expect(header).toBeDisplayed();
  });

  it("Has an input field for user address/postcode", () => {
    browser.url("http://localhost:3000");
    const inputField = $('[name="address"]');
    expect(inputField).toExist();
  });

  it("Has correct text next to input field", () => {
    browser.url("http://localhost:3000");
    const span = $("span=Find restaurants near you:");
    expect(span).toBeDisplayed();
  });

  it("Has a find button", () => {
    browser.url("http://localhost:3000");
    const button = $('[value="Find"]');
    expect(button).toExist();
  });

  it("Should have a header ofr find by cuisine", () => {
    browser.url("http://localhost:3000");
    const findByCuisineTitle = $("h2=Find By Cuisine");
    expect(findByCuisineTitle).toBeDisplayed();
  });
});
