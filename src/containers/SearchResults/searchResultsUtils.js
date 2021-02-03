import { LabelsObject } from "../../Labels";

import { RESTAURANT_BY_POSTCODE } from "../../queries";

const fetchRestaurantData = async (
  userInput,
  updateRestaurantData,
  updateLoadingState
) => {
  updateLoadingState(true);
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
    const { business } = content.data.search;
    updateRestaurantData(business);
  } catch (error) {
    console.log("There was an error with the fetch: " + error);
  }
  updateLoadingState(false);
};

const checkValidImageURL = (url) => {
  const { invalidImageURLLabel } = LabelsObject;

  if (url === "https://s3-media3.fl.yelpcdn.com/bphoto/None/o.jpg") {
    return invalidImageURLLabel;
  } else {
    return url;
  }
};

export { fetchRestaurantData, checkValidImageURL };
