import React from "react";

const Review = ({ reviews }) => {
  const reviewLength = reviews?.results?.length;
  return (
    <div className="review-area">
      {reviews?.results?.map((review, index) => {
        const isLastItem = index === reviewLength - 1;
        return (
          <div
            key={index}
            className="review-box"
            style={{ borderBottom: isLastItem ? "none" : "" }}
          >
            <h5>{review.author}</h5>
            <p>{review.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Review;
