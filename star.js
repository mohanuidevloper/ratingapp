import React, { useState } from 'react';

function Star() {
  const [rating, SetRating] = useState(0);
  const [move, SetMove] = useState();

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        index = index + 1;
        return (
          <button
            className={index <= (rating || move) ? 'on' : 'off'}
            onClick={() => {
              SetRating(index);
            }}
            onMouseEnter={() => {
              SetMove(index);
            }}
            onMouseLeave={() => {
              SetMove(rating);
            }}
          >
            <span> &#9733; </span>
          </button>
        );
      })}
    </div>
  );
}

export default Star;
