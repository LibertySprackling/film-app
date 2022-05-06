import React from 'react';

const Rating = ({ rating }) => {

    const numericRating = parseInt(rating);

    if (rating !== null && numericRating>0) {
        return <p>{"⭐ ".repeat(numericRating)}</p>
    } else {
        return <p>No rating available</p>
    }

}

export default Rating;