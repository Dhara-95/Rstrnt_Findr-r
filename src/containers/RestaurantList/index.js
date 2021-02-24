import React from "react";

import { FilterResults } from "../../components";
import { RestaurantCard } from "../index";

const RestaurantList = (props) => {
  const { data, handleOnChange, isLoading } = props;

  return (
    <div className="flex flex-col">
      {!isLoading && <FilterResults handleOnChange={handleOnChange} />}
      {data.map((restaurant, index) => {
        return <RestaurantCard restaurant={restaurant} key={index} />;
      })}
    </div>
  );
};

export { RestaurantList };
