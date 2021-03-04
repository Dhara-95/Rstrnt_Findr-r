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
          <div
            className="text-grey w-full mx-auto py-4 lg:w-1/2 xl:w-1/2 2xl:w-1/2"
            key={index}
          >
            <ReviewQuotes />

            <div className="w-4/5 mx-auto">
              <ReviewText text={text} />
              <div className="flex flex-col items-end">
                <StarRating rating={rating} />
                <ReviewerName name={name} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { ReviewList };
