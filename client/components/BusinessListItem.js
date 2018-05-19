import React from 'react';

const List_Businesses = ({business, onBusinessSelect}) => {
  return (
    <div className="card col-md-3 px-0" onClick={() => onBusinessSelect(business)}>
      <img className="card-img-top img-overlay" src="img/bg3.jpg" alt="" />
      <div className="card-img-overlay">
        <a className="h2 text-white card-title px-2" href="/detail">{business.name}</a>
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
  )
}

export default List_Businesses;