import React from "react";

const CuisineImage = (props) => {
  const { image } = props;

  return (
    <div className="w-60 h-60 bg-grey rounded-3xl text-black m-4">{image}</div>
  );
};

export { CuisineImage };
