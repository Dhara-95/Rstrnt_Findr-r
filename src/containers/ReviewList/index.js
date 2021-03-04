import React from "react";

import { ReviewQuotes, ReviewText } from "../../components";

const ReviewList = (props) => {
  const { reviews } = props;

  return (
    <div>
      {reviews.map((review, index) => {
        const { text, rating } = review;
        const { name } = review.user;

        return (
          <div className="text-grey">
            <ReviewQuotes />
            <ReviewText text={text} />
            {rating}
            {name}
          </div>
        );
      })}
    </div>
  );
};

export { ReviewList };
