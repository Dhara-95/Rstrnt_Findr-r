import React from "react";

const SubmitButton = (props) => {
  const { label } = props;
  return (
    <button
      className="submit-button rounded py-2 px-8 bg-teal hover:bg-teal-hover active:bg-teal-click focus:outline-none"
      type="button"
      value="Find"
    >
      {label}
    </button>
  );
};

export default SubmitButton;
