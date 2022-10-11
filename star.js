import React, { useState } from 'react';

export default function Star() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        index = index + 1;
        return (
          <button
            className={index <= (rating || hover) ? 'on' : 'off'}
            onClick={() => {
              setRating(index);
            }}
            onMouseEnter={() => {
              setHover(index);
            }}
            onMouseLeave={() => {
              setHover(rating);
            }}
          >
            <span>&#9733;</span>
          </button>
        );
      })}
    </div>
  );
}
