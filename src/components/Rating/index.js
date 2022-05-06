import React from 'react';

const Rating = ({ rating }) => {

    const numericRating = parseInt(rating);

    if (rating !== null && numericRating>0) {
        return <h5>{"⭐ ".repeat(numericRating)}</h5>
    } else {
        return <h5>No rating available</h5>
    }

}

export default Rating;