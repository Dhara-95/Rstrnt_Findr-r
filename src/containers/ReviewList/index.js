import React from "react";

import { ReviewQuotes } from "../../components";

const ReviewList = (props) => {
  const { reviews } = props;

  return (
    <div>
      {reviews.map((review, index) => {
        return (
          <div className="text-grey">
            <ReviewQuotes />
            {review.text}
            {review.rating}
            {review.user.name}
          </div>
        );
      })}
    </div>
  );
};

export { ReviewList };
