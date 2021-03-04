import React from "react";

import {
  ReviewerName,
  ReviewQuotes,
  ReviewText,
  StarRating,
} from "../../components";

const ReviewList = (props) => {
  const { reviews } = props;

  return (
    <div>
      {reviews.map((review, index) => {
        const { text, rating } = review;
        const { name } = review.user;

        return (
          <div className="text-grey w-2/3 mx-auto">
            <ReviewQuotes />
            <ReviewText text={text} />
            <div className="flex flex-col items-end">
              <StarRating rating={rating} />
              <ReviewerName name={name} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { ReviewList };
