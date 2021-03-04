import React from "react";

import { ReviewQuotes, ReviewText, StarRating } from "../../components";

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
            <div className="flex justify-end">
              <StarRating rating={rating} />
            </div>
            {name}
          </div>
        );
      })}
    </div>
  );
};

export { ReviewList };
