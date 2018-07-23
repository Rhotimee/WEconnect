import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import stars from '../helpers/stars';

const ReviewCard = ({
  content, star, reviewer, userId
}) => (

  <div className="content-box review">
    <div className="row">
      { reviewer !== undefined ?
        <div className="col-md-2">
          <img src={!reviewer.image ? '/img/Blank-profile.png' : reviewer.image} alt="" />
        </div>
        : null
      }
      <div className="col-md-6">
        { reviewer !== undefined ?
          <p><Link to={`/user/${userId}`}>{reviewer.firstName} {reviewer.lastName}</Link></p>
          : null
        }
        <p>{content}</p>
      </div>
      <div className="col-md-4 star align-self-top">{ stars(star) }</div>
    </div>
  </div>
);

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  star: PropTypes.number.isRequired,
  reviewer: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired,
};

export default ReviewCard;
