import React from "react";

import { LoadingConfirmation, RestaurantsNear } from "../../components";
import { RestaurantList } from "../index";

const SearchResults = (props) => {
  const { userInput, isLoading, data, handleOnChange } = props;
  // const [restaurantData, updateRestaurantData] = useState([]);
  // const [isLoading, updateLoadingState] = useState(false);
  // const [defaultRestaurantOrder, applyDefaultRestaurantOrder] = useState([]);

  // useEffect(() => {
  //   yelp.getData(userInput, updateRestaurantData, updateLoadingState);
  //   // updateLoadingState only works within the method call - need to look into
  // }, [userInput]);

  // const handleOnChange = (action) => {
  //   if (!defaultRestaurantOrder.length) {
  //     applyDefaultRestaurantOrder([...restaurantData]);
  //   }
  //   const actionList = {
  //     rating: filterByRating(restaurantData),
  //     nearest: [...defaultRestaurantOrder],
  //   };

  //   updateRestaurantData(actionList[action]);
  // };

  return (
    <>
      <RestaurantsNear userInput={userInput} />
      {isLoading && <LoadingConfirmation />}
      <RestaurantList
        data={data}
        handleOnChange={handleOnChange}
        isLoading={isLoading}
      />
    </>
  );
};

export { SearchResults };
