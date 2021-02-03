import { RESTAURANT_BY_POSTCODE } from "../../queries";

const fetchRestaurantData = async (userInput, updateRestaurantData) => {
  try {
    const rawResponse = await fetch(
      "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/graphql",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.REACT_APP_YELP_API_KEY,
          "Accept-Language": "en-US",
        },
        body: JSON.stringify({
          query: RESTAURANT_BY_POSTCODE,
          variables: {
            postcode: userInput,
          },
        }),
      }
    );
    const content = await rawResponse.json();
    const { business } = content.data.search;
    updateRestaurantData(business);
  } catch (error) {
    console.log("There was an error with the fetch: " + error);
  }
};

export { fetchRestaurantData };
