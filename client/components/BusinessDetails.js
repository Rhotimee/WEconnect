import React from 'react';
import NavFoot from './NavFoot';

const BusinessDetails = () => (
  <div className="bg-cover">
    <NavFoot>
      <div className="container mt-4 mb-4" id="business-detail">
        <div className="row">

          <div className="card col px-0">
            <img className="card-img-top img-overlay" src="img/bg3.jpg" alt="" height="300px;" />
            <div className="card-img-overlay ">
              <a className="h1 text-white card-title" href="business-detail.html">Yum Cuisine</a>
            </div>

            <div className="card-body text-dark bg-light">
              <div className="data">
                <div className="row data1 ml-1">
                  <div className="p-1">
                    <img src="img/bg3.jpg" alt="" height="75px" width="120px" />
                  </div>
                  <div className="p-1">
                    <h3 className="">Restaurant</h3>
                    <p><i className="fa fa-map-marker" /> Ikeja</p>
                  </div>
                </div>

                <div className="row data2 mt-3 ml-4">
                  <button className="btn btn-outline-dark mr-2 like"> Like <i className="fa fa-heart" /></button>
                  <button className="btn btn-outline-dark mr-1 share">
                      Share
                    <i className="fa fa-facebook" />
                    <i className="fa fa-twitter" />
                    <i className="fa fa-envelope" />
                  </button>
                </div>

              </div> {/** end data * */}

              <div className="row mt-2">
                <p className="col-md-6">
                  Our foods cut across local dishes, each of which is prepared with
                  love and served in a manner that is both pleasing to the eyes & excites
                  your taste buds. We provide ‘culinary satisfaction’ for all events formal or informal such as
                  daily staff lunch, trainings, weddings, birthdays and other events & anniversaries.
                </p>
                <img className="col-md-6" width="500" src="https://maps.googleapis.com/maps/api/staticmap?center=ikeja+lagos&zoom=13&scale=2&size=600x50&maptype=roadmap&format=png&visual_refresh=true&markers=size:small%7Ccolor:0xff682e%7Clabel:1%7Cikeja+lagos" alt="Google Map of ikeja lagos" />
              </div>

              <div className="review">
                <hr className="straight" />
                <div className="row">
                  <div className="col star">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <span className="rate">5.0</span>
                      (2 Reviews)
                  </div>
                  <div className="col like">
                      5 likes <i className="fa fa-heart" />
                  </div>
                  <div className="col">
                    <i className="fa fa-users" />
                      152 Visits
                  </div>
                  <div className="col text-right">
                    <button className="btn btn-outline-dark">
                      Write a review
                    </button>
                  </div>
                </div>
              </div>

              {/* Reviews */}
              <hr className="straight" />
              <div className="all-reviews">
                <div className="card">
                  <div className="row card-body">
                    <div className="review-user p-2 text-center col-md-2">
                      <img className="rounded-circle" src="img/user2.jpg"width="120" height="100" alt="" />
                      <div className="caption mt-1">
                        <small><a href="/detail">Rotimi</a></small>
                      </div>
                    </div>
                    <div className="ml-3 review-text card-text align-self-center col-md">
                      <div className=" star align-self-center">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <p className="mt-2">We had the crispy shrimp and jollof rice 2 days ago and it was so good, we came back and ordered it again tonight. Soooo good</p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="row card-body">
                    <div className="review-user p-2 text-center col-md-2">
                      <img className="rounded-circle" src="img/user1.jpg" width="120" height="100" alt="" />
                      <div className="caption mt-1">
                        <small><a href="/detail">Sarah Ochem</a></small>
                      </div>
                    </div>
                    <div className="col-md ml-3 review-text card-text align-self-center">
                      <div className=" star align-self-center">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <p className="mt-2">The food is well prepared and tasty. We had Obe Dindin and Chef's Combo Platter. Both were excellent. Succulent prawns, fresh greens. Well cooked meat.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> {/** end card-body * */}

          </div>
        </div>`
      </div>
    </NavFoot>
  </div>
);

export default BusinessDetails;