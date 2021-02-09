import React from "react";

import { FilterResults } from "../../components/FilterResults";
import { RestaurantCard } from "../index";

const RestaurantList = (props) => {
  const { data, handleOnChange } = props;

  return (
    <div className="flex flex-col">
      <FilterResults handleOnChange={handleOnChange} />
      {data.map((restaurant, index) => {
        return <RestaurantCard restaurant={restaurant} key={index} />;
      })}
    </div>
  );
};

export { RestaurantList };
