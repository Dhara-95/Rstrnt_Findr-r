// describe("Feature tests", () => {
//   const homepageUrl = "http://localhost:3000";

//   it("Has the correct url on postcode submit", () => {
//     browser.url(homepageUrl);
//     const submitButton = $(".submit-button");
//     submitButton.click();
//     expect(browser).toHaveUrlContaining("/searchresults");
//   });

//   it("Has correct user input displayed on submit", () => {
//     browser.url(homepageUrl);
//     const input = $('[name="postcode"]');
//     input.addValue("W13 3RH");
//     const submitButton = $(".submit-button");
//     submitButton.click();
//     const h2header = $("h2=Restaurants near W13 3RH");
//     expect(h2header).toBeDisplayed();
//   });
// });
