import React from "react";
import ReviewList from "./ReviewList";

const MovieReviews = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review) => (
        <ReviewList
          key={review.id}
          movieName={review.movieName}
          movieReview={review.reviews}
        />
      ))}
    </div>
  );
};

export default MovieReviews;
