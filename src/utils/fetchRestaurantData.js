import { businesses } from "../mocks/dataMock";
import { RESTAURANT_BY_POSTCODE } from "../queries";

class ApiCall {
  constructor() {
    this.url = process.env.REACT_APP_YELP_ENDPOINT;
    this.method = "POST";
    this.headers = {
      "Content-Type": "application/json",
      Authorization: process.env.REACT_APP_YELP_API_KEY,
      "Accept-Language": "en-US",
    };
  }

  async getData(input, updateRestaurantData, updateLoadingState) {
    updateLoadingState(true);
    try {
      const options = this._formatOptions(input);
      const response = await fetch(this.url, options);
      const result = await response.json();
      const { business } = result.data.search;

      updateRestaurantData(business);
    } catch (error) {
      console.log("There was an error with the fetch: " + error);
    }

    updateLoadingState(false);
  }

  _formatOptions(input) {
    return {
      method: this.method,
      headers: this.headers,
      body: JSON.stringify({
        query: RESTAURANT_BY_POSTCODE,
        variables: {
          postcode: input,
        },
      }),
    };
  }
}

const yelp = new ApiCall();

export { yelp };
