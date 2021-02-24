import React from "react";

const SubmitButton = (props) => {
  const { label, handleFetch } = props;

  return (
    <button
      className="submit-button rounded py-2 px-8 bg-teal hover:bg-teal-hover active:bg-teal-click focus:outline-none"
      type="button"
      value={label}
      onClick={() => handleFetch()}
    >
      {label}
    </button>
  );
};

export { SubmitButton };
