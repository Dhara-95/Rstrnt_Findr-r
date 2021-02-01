import React from "react";

import { LabelsObject } from "../../Labels";
import { CuisineList } from "../CuisineList";

const CuisineListContainer = () => {
  const { findByCuisineLabel } = LabelsObject;

  return (
    <div className="py-8">
      <h2 className="text-2xl text-grey p-6">{findByCuisineLabel}</h2>
      <CuisineList />
    </div>
  );
};

export { CuisineListContainer };
