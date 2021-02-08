import React from "react";

import { labels } from "../../Labels";
import { filterByRating } from "../../utils/filterByRating";

const FilterResults = (props) => {
  const { updateRestaurantData, businesses } = props;
  const { orderBy, nearestFilter, ratingFilter } = labels;

  return (
    <div className="flex justify-center p-4">
      <h2 className="text-grey m-4">{orderBy}</h2>
      <select
        name="filter"
        id="filter"
        onChange={() => {
          updateRestaurantData(filterByRating(businesses));
        }}
      >
        <option value="nearest">{nearestFilter}</option>
        <option value="rating">{ratingFilter}</option>
      </select>
    </div>
  );
};

export { FilterResults };
