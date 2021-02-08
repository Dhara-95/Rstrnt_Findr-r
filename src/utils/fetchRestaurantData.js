import { RESTAURANT_BY_POSTCODE } from "../queries";

class FetchData {
  constructor() {
    this.url =
      "https://rstrnt-cors.herokuapp.com/https://api.yelp.com/v3/graphql";
    this.method = "POST";
    this.headers = {
      "Content-Type": "application/json",
      Authorization: process.env.REACT_APP_YELP_API_KEY,
      "Accept-Language": "en-US",
    };
    this.query = RESTAURANT_BY_POSTCODE;
  }

  async getData(input, updateRestaurantData, updateLoadingState) {
    updateLoadingState(true);
    try {
      const rawResponse = await fetch(this.url, {
        method: this.method,
        headers: this.headers,
        body: JSON.stringify({
          query: this.query,
          variables: {
            postcode: input,
          },
        }),
      });
      const content = await rawResponse.json();
      const { business } = content.data.search;
      updateRestaurantData(business);
    } catch (error) {
      console.log("There was an error with the fetch: " + error);
    }
    updateLoadingState(false);
  }
}

const restaurantFetch = new FetchData();

export { restaurantFetch };
