import React from 'react';
import { Link } from 'react-router-dom';

const List_Businesses = ({ business, onBusinessSelect }) => (
  <div
      className="card col-md-3 px-0"
    // onClick={() => onBusinessSelect(business)}
    >
      <img className="card-img-top img-overlay" src="img/bg3.jpg" alt="" />
      <div className="card-img-overlay">
        <Link to={`/businesses/${business.id}`} className="h2 text-white card-title px-2" href="/detail">{business.name}</Link>
      </div>
      <div className="card-body text-dark bg-light">
        <p className="card-text">{business.details}</p>
        <div className="star">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <span className="rate mr-2">5.0 </span>
          <span>(2 Reviews)</span>
        </div>
      </div>
    </div>
    // <h3>HI</h3>
);

export default List_Businesses;
