import React from "react";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewQuotes = () => {
  return (
    <div className="flex justify-between">
      <FontAwesomeIcon icon={faQuoteLeft} color="light-grey" size="lg" />
      <FontAwesomeIcon icon={faQuoteRight} color="light-grey" size="lg" />
    </div>
  );
};

export { ReviewQuotes };
