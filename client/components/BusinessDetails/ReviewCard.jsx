import React from 'react';
import { Link } from 'react-router-dom';

const stars = (no) => {
  const arr = []
  for (let i = 0; i < no; i++){
    arr.push(i)
  }
  return arr.map((star, i) => <i key={i} className="fa fa-star"></i> )
}

const ReviewCard = ({ content, star, reviewer, userId }) => {
  return (
  <div className="card">
    <div className="row card-body">
      <div className="review-user p-2 text-center col-md-2">
        <img className="rounded-circle" src="img/user2.jpg"width="120" height="100" alt="" />
        <div className="caption mt-1">
          <small><Link to={`/user/${userId}`}>{reviewer.firstName}</Link></small>
        </div>
      </div>
      <div className="ml-3 review-text card-text align-self-center col-md">
        <div className=" star align-self-center">
         { stars(star) }
          
        </div>
        <p className="mt-2">{content}</p>
      </div>
    </div>
  </div>

)};

export default ReviewCard;
