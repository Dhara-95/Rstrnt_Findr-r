import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { labels, urlLabels } from "../../Labels";
import { Homepage, SearchResults, RestaurantDetail } from "../index";
import {
  filterByRating,
  formatRestaurantName,
  returnSingleRestaurant,
  yelp,
} from "../../utils";

const WebPageRoutes = () => {
  const [userInput, setUserInput] = useState("");
  const [restaurantData, updateRestaurantData] = useState([]);
  const [isLoading, updateLoadingState] = useState(false);
  const [defaultRestaurantOrder, applyDefaultRestaurantOrder] = useState([]);
  const [singleRestaurant, updateSingleRestaurant] = useState({});

  const { findButton } = labels;
  const { searchResultURL, restaurantDetailURL } = urlLabels;

  const history = useHistory();

  const handleButtonClick = (value) => {
    if (value === findButton) {
      handleFetch();
    } else {
      handleSingleRestaurantRedirect(value);
    }
  };

  const handleFetch = () => {
    history.push(searchResultURL);
    yelp.getData(userInput, updateRestaurantData, updateLoadingState);
  };

  const handleSingleRestaurantRedirect = (value) => {
    const returnedRestaurant = returnSingleRestaurant(restaurantData, value);
    updateSingleRestaurant(returnedRestaurant);
    const formattedRestaurantName = formatRestaurantName(
      returnedRestaurant.name
    );
    history.push(restaurantDetailURL + formattedRestaurantName);
  };

  const handleOnChange = (action) => {
    if (!defaultRestaurantOrder.length) {
      applyDefaultRestaurantOrder([...restaurantData]);
    }
    const actionList = {
      rating: filterByRating(restaurantData),
      nearest: [...defaultRestaurantOrder],
    };

    updateRestaurantData(actionList[action]);
  };

  return (
    <Switch>
      <Route
        path={"/"}
        exact
        render={() => (
          <Homepage
            setUserInput={setUserInput}
            handleButtonClick={handleButtonClick}
          />
        )}
      />
      <Route
        path={"/searchresults"}
        exact
        render={() => (
          <SearchResults
            userInput={userInput}
            isLoading={isLoading}
            data={restaurantData}
            handleOnChange={handleOnChange}
            handleButtonClick={handleButtonClick}
          />
        )}
      />
      <Route
        path={"/restaurant/:name"}
        exact
        render={() => (
          <RestaurantDetail
            restaurant={singleRestaurant}
            postcode={userInput}
          />
        )}
      />
    </Switch>
  );
};

export { WebPageRoutes };
