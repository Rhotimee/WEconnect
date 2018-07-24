import React from 'react';

const stars = (no) => {
  const arr = [];
  for (let i = 0; i < no; i++) {
    arr.push(i);
  }
  return arr.map((star, i) => <i key={i} className="fas fa-star" />);
};


export default stars;

