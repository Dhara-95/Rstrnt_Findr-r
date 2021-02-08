import { RESTAURANT_BY_POSTCODE } from "../queries";

class FetchData {
  constructor() {
    this.url = process.env.REACT_APP_YELP_ENDPOINT;
    this.method = "POST";
    this.headers = {
      "Content-Type": "application/json",
      Authorization: process.env.REACT_APP_YELP_API_KEY,
      "Accept-Language": "en-US",
    };
  }

  getData(input, updateLoadingState) {
    updateLoadingState(true);
    const options = this._formatOptions(input);
    let returnData;

    fetch(this.url, options)
      .then((response) => response.json())
      .then((data) => {
        updateLoadingState(false);
        console.log(data.data.search.business);
        return data.data.search.business;
      })
      .catch((error) =>
        console.log("There was an error with the fetch: " + error)
      );

    // const rawResponse = await fetch(this.url, {
    //   method: this.method,
    //   headers: this.headers,
    //   body: JSON.stringify({
    //     query: this.query,
    //     variables: {
    //       postcode: input,
    //     },
    //   }),
    // });
    // const content = await rawResponse.json();
    // const { business } = content.data.search;
  }

  // tried to use # to make this method private but having Babel issues
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

const yelp = new FetchData();

export { yelp };
