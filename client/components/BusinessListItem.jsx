import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const listBusinesses = ({
  Image, id, category, location, name
}) => (
  <div className="business-card p-3 my-2 mx-sm-5">
    <div className="row">
      <div className="col-md-2">
        <img
          src={Image === '' ?
          'http://res.cloudinary.com/timi/image/upload/v1527336718/jmkhsmzsjlyp5xk4rfbe.jpg' : Image
      }
          alt=""
        />
      </div>
      <div className="col-md-6 px-3 pt-2">
        <Link className="h3" to={`/businesses/${id}`}>{name}</Link>
        <p className="">{category}</p>
        <p>{location}</p>
      </div>
      <div className="col-md-4">
        <div className="row mx-1 justify-content-md-center pt-sm-2">
          <div className="mr-2 rating-star">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="far fa-star" />
            <i className="far fa-star" />
          </div>
          <div className="rating-value p-1">3.0</div>
        </div>
      </div>
    </div>
  </div>
);

listBusinesses.propTypes = {
  Image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

listBusinesses.contextTypes = {
  router: PropTypes.object.isRequired
};

export default listBusinesses;
