import React from "react";

const ReviewerName = (props) => {
  const { name } = props;

  return <p className="text-grey text-xl">{`— ${name}`}</p>;
};

export { ReviewerName };
