import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { filterByRating } from "../../utils/filterByRating";
import { labels } from "../../Labels";
import { Homepage, SearchResults, RestaurantDetail } from "../index";
import { formatRestaurantName } from "../../utils/formatRestaurantName";
import { returnSingleRestaurant } from "../../utils/returnSingleRestaurant";
import { yelp } from "../../utils/fetchRestaurantData";

const WebPageRoutes = () => {
  const [userInput, setUserInput] = useState("");
  const [restaurantData, updateRestaurantData] = useState([]);
  const [isLoading, updateLoadingState] = useState(false);
  const [defaultRestaurantOrder, applyDefaultRestaurantOrder] = useState([]);
  const [singleRestaurant, updateSingleRestaurant] = useState({});

  const { searchResultURL, findButton, restaurantDetailURL } = labels;

  const history = useHistory();

  const handleButtonClick = (value) => {
    if (value === findButton) {
      handleFetch();
    } else {
      const returnedRestaurant = returnSingleRestaurant(restaurantData, value);
      const formattedRestaurantName = formatRestaurantName(
        returnedRestaurant.name
      );
      history.push(restaurantDetailURL + formattedRestaurantName);
      updateSingleRestaurant(returnedRestaurant);
    }
  };

  const handleFetch = () => {
    history.push(searchResultURL);
    yelp.getData(userInput, updateRestaurantData, updateLoadingState);
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
        render={() => <RestaurantDetail restaurant={singleRestaurant} />}
      />
    </Switch>
  );
};

export { WebPageRoutes };
