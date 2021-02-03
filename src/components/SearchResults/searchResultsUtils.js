import { RESTAURANT_BY_POSTCODE } from "../../queries";

const fetchRestaurantData = async (userInput) => {
  try {
    const rawResponse = await fetch(
      "https://rstrnt-cors.herokuapp.com/https://api.yelp.com/v3/graphql",
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
    console.log(content);
  } catch (error) {
    console.log("There was an error with the fetch: " + error);
  }
};

export { fetchRestaurantData };
