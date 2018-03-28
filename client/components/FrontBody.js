import React from 'react';

const FrontBody = () => (
  <div className="cover">
    <div className="cover-overlay">

      <div className="container justify-content-center pt-5 content">

        <div className="heading">
          <h1 className="text-center">WECONNECT</h1>
          <h4 className="text-center">Find the best places to eat,
              drink, shop, or visit in any city in the world.
              Access over 5 million local businesses.
          </h4>
        </div>

        <form action="" className="justify-content-center p-3 mx-4">
          <div className="row">
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
              <button className="form-control form-control-lg btn-outline-light search" type="submit"> <i className="fa fa-search search-icon" />  Search</button>
            </div>
          </div>
        </form>

        <div className="row text-white text-center justify-content-center pt-4 mb-5 ">
          <div className="category-item py-4 m-2">
            <i className="fa fa-cutlery d-block mb-2" aria-hidden="true" />
              Food
          </div>
          <div className="category-item py-4 m-2">
            <i className="fa fa-wrench d-block mb-2" aria-hidden="true" />
              Repair
          </div>
          <div className="category-item py-4 m-2">
            <i className="fa fa-heartbeat d-block mb-2" aria-hidden="true" />
              Health
          </div>
          <div className="category-item py-4 m-2">
            <i className="fa fa-check-circle d-block mb-2" aria-hidden="true" />
              Events
          </div>
        </div>

      </div>

    </div>
  </div>
);

export default FrontBody;