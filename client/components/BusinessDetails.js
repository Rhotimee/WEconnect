import React, { Component } from 'react';
import NavFoot from './NavFoot';
import { connect } from 'react-redux';
import { fetchOneBusiness, deleteOneBusiness } from '../actions/businessAction';
import { Link } from 'react-router-dom';
import EditBusiness from './EditBusinessForm';


class BusinessDetails extends Component {
  componentWillMount() {
    this.props.fetchOneBusiness(this.props.match.params.id);
  }


  render() {
    const { business, user } = this.props;
    const { id } = this.props.match.params;


    if (!business) {
      return <h2>Loading...</h2>;
    }
    if (business) {
      if (business.userId === this.props.user) {
        console.log('owner');
      } else {
        console.log('not owner', business.userId, user);
      }
    }


    return (
      <div className="bg-cover">
        <NavFoot>
          <div className="container mt-4 mb-4" id="business-detail">
            <div className="row">

              <div className="card col px-0">
                <img className="card-img-top img-overlay" src="img/bg3.jpg" alt="" height="300px;" />
                <div className="card-img-overlay ">
                  <a className="h1 text-white card-title" href="business-detail.html">{business.name}</a>
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

                {
                  business.userId === user ? <div>
                    <Link to={`/businesses/${id}/edit`}>edit</Link>
                    -
                    <Link to="/businesses" onClick={() => {this.props.deleteOneBusiness(id)}} >delete</Link>
                  </div>
                : null
              }

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
                  {business.details}
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
                    <button className="btn btn-outline-dark" data-toggle="modal" data-target="#addReview">
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
            </div>
          </div>
        </NavFoot>

            {/* Modal for Adding Reviews */}
    <div className="modal fade" id="addReview" >
      <div className="modal-dialog">
          <div className="modal-content">
              <div className="modal-header bg-dark text-white">
                  <h5 className="modal-title">Add Review</h5>
                  <button className="close" data-dismiss="modal"><span>&times;</span></button>
              </div>
              <div className="modal-body">
                  <form>
                      <p>Fields with <small>*</small> are required</p>
                      <div className="form-group">
                        <label htmlFor="title">Review <small>*</small> </label>
                        <textarea type="text" className="form-control" required></textarea>
                      </div>
                      <div className="form-group">
                        <label htmlFor="inputState">Star <small>*</small> </label>
                        <select id="inputState" className="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                  </form>
              </div>
              <div className="modal-footer">
                  <button className="btn btn-outline-dark" type="submit" data-dismiss="modal">Submit</button>
              </div>
          </div>
      </div>
    </div>


      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    business: state.oneBusiness.oneBusiness,
    user: state.user_reducer.signedInUser.id
  };
}


export default connect(mapStateToProps, { fetchOneBusiness, deleteOneBusiness })(BusinessDetails);
