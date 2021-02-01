import React from "react";

const SubmitButton = (props) => {
  const { label, history, route } = props;
  return (
    <button
      className="submit-button rounded py-2 px-8 bg-teal hover:bg-teal-hover active:bg-teal-click focus:outline-none"
      type="button"
      value="Find"
      onClick={() => history.push(route)}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
