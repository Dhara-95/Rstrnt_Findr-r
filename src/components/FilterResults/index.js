import React from "react";

import { labels } from "../../Labels";

const FilterResults = (props) => {
  const { handleOnChange } = props;
  const { orderBy, nearestFilter, ratingFilter } = labels;

  return (
    <div className=" list-options flex flex-col items-center lg:justify-center lg:flex-row xl:justify-center xl:flex-row 2xl:justify-center 2xl:flex-row p-4  w-1/2 mx-auto">
      <h2 className="text-grey m-4">{orderBy}</h2>
      <select
        className="appearance-none rounded-full w-full bg-white lg:w-1/2 xl:w-1/2 2xl:w-1/3 h-8"
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
