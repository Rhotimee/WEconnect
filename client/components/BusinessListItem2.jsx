import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import average from '../helpers/averageStar';
import star from '../helpers/stars';


const listBusinesses = ({
  Image, id, name, reviews
}) => (

  <div className="card col-md-3 px-0 m-3 landing-business">
    <img
      className="card-img-top img-overlay"
      src={Image === '' ?
    'http://res.cloudinary.com/timi/image/upload/v1527336718/jmkhsmzsjlyp5xk4rfbe.jpg' : Image
    }
      alt=""
    />
    <div className="card-body text-dark bg-light">
      <Link className="card-text" to={`/businesses/${id}`}>{name}</Link>
      <div className="star">
        <span className="mr-2">
          {average(reviews) > 0 && average(reviews) }
        </span>
        {star(average(reviews))}
      </div>
    </div>
  </div>

);

listBusinesses.propTypes = {
  Image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  reviews: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

listBusinesses.contextTypes = {
  router: PropTypes.object.isRequired
};

export default listBusinesses;
