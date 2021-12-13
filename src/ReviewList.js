import React from 'react';

const ReviewList = ({movieName, movieReview}) => {
    return (
        <div className="border border-1 px-3 py-1 mb-2">
            <h5>{movieName}</h5>
            <h6 className="text-secondary">comments: {movieReview}</h6>
        </div>
    );
};

export default ReviewList;