import React from "react";

import { findButtonLabel } from "../../Labels";

const SubmitButton = () => {
  return (
    <button
      className="submit-button rounded py-2 px-8 bg-teal hover:bg-teal-hover active:bg-teal-click focus:outline-none"
      type="button"
      value="Find"
    >
      {findButtonLabel}
    </button>
  );
};

export default SubmitButton;
