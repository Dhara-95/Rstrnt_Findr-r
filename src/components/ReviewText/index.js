import React from "react";

const ReviewText = (props) => {
  const { text } = props;

  return <p className="text-grey text-xl text-center font-bold">{text}</p>;
};

export { ReviewText };
