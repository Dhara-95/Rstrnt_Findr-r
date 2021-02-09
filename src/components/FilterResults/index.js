import React from "react";

import { labels } from "../../Labels";

const FilterResults = (props) => {
  const { handleOnChange } = props;
  const { orderBy, nearestFilter, ratingFilter } = labels;

  return (
    <div className=" list-options flex justify-center p-4 items-center w-1/2 mx-auto">
      <h2 className="text-grey m-4">{orderBy}</h2>
      <select
        className="rounded-full w-1/3 h-8"
        name="filter"
        id="filter"
        onChange={(event) => {
          handleOnChange(event.target.value);
        }}
      >
        <option value="nearest">{nearestFilter}</option>
        <option value="rating">{ratingFilter}</option>
      </select>
    </div>
  );
};

export { FilterResults };
