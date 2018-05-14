import React, { Component } from 'react'
import NavFoot from './NavFoot';

const eachBusiness = (
  <div className="card col-md-3 px-0">
    <img className="card-img-top img-overlay" src="img/bg3.jpg" alt="" />
    <div className="card-img-overlay">
      <a className="h2 text-white card-title px-2" href="/detail">Yum Cuisine</a>
    </div>
    <div className="card-body text-dark bg-light">
      <p className="card-text">Delicious Foods Served here</p>
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
);

class BusinessList extends Component{ 
  render () {
  return (
  <div className="bg-cover">
    <NavFoot>
      <div className="list-cover">

        {/* Search */}
        <form action="" className="container bg-search py-5 sticky-top">
          <div className="row mx-4 ">
            <div className="col-md-6 px-1 my-1">
              <input type="text" className="b-name form-control form-control-lg" placeholder="I'm looking for..." />
            </div>
            <div className="col-md-4 px-1 my-1">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-light" id="basic-addon1"> <i className="fa fa-map-marker" /> </span>
                </div>
                <input type="text" className="form-control form-control-lg" placeholder="Lagos" aria-label="Username" aria-describedby="basic-addon1" />
              </div>
            </div>
            <div className="col-md-2 px-1 my-1">
              <button className="form-control form-control-lg btn-dark search" type="submit"> <i className="fa fa-search" />  Search</button>
            </div>
          </div>
        </form>

        {/* Lists */}
        <div className="mx-4"id="business-list">
          <div className="row justify-content-center">
            {eachBusiness}
          </div>
        </div>

      </div>
    </NavFoot>
  </div>
)}};

export default BusinessList;
